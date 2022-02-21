const { json } = require('body-parser');
const express = require('express')
const router = express.Router()

let globalSupplierList = [],
  globalLocationList = [],
  collaborators_list = [];

router.post('/login', function (req, res) {
  res.redirect('/dashboard');
});

router.get('/dashboard', function (req, res) {
  if (req.session.data['user_email'] === undefined) {
    res.redirect('/login');
  } else {
    res.render('dashboard');
  }
});

//not in use
router.post('/projects/vetting', function (req, res) {

  if (req.session.data['ccs_eoi_type'] === "all_online") {
    res.render('projects/vetting');
  } else if (req.session.data['ccs_eoi_type'] === "download_docs") {
    res.redirect('down-docs');
  } else {
    res.redirect('up-docs');
  }

});

//not in use
router.get('/projects/supplier', function (req, res) {

  let supp_id = req.query.id,
    supp_details = {},
    offerList = [],
    offerIDs = [],
    locationList = [];

  req.session.data['suppliers'].forEach((supplir) => {
    if (supplir.id == supp_id) supp_details = supplir;
  });

  // get the list of lot IDs for
  req.session.data['agreements'].forEach((agreement) => {

    if (agreement.number == req.session.data['this_agreement_id']) {

      let lotID = req.session.data['this_lot'].replace(/(Lot |:.+)/g, '');

      agreement.lots.forEach((lot) => {
        if (lotID == lot.number) {
          offerIDs = lot.offers;
        }
      });
    }
  });

  // loop through the global list of offers
  req.session.data['offers'].forEach((offr) => {

    // if this offer is in the agreement offer list (offerIDs), we'll add it to the list for display
    if (offerIDs.includes(offr.id)) {

      // does this supplier offer this offer?
      let offerOffered = "No";
      if (supp_details.offers.includes(offr.id)) offerOffered = "Yes";

      offerList.push({
        "name": offr.title,
        "desc": offr.description,
        "offered": offerOffered
      });

    }
  });

  // loop through the global list of locations
  req.session.data['locations'].forEach((loc) => {
    if (loc.value !== 13) {


      let locCovered = "No";
      if (supp_details.locations.includes(loc.value)) locCovered = "Yes";

      locationList.push({
        "name": loc.text,
        "covered": locCovered
      });

    }
  });

  res.render('projects/supplier', { 'theSupplier': supp_details, 'offerList': offerList, 'locationList': locationList });

});

router.get('/projects/choose-agreement', function (req, res) {
  let targetAgreement,
    otherAgreements = [];

  req.session.data['agreements'].forEach((agreement) => {

    if (agreement.number === req.session.data['this_agreement_id']) {
      targetAgreement = agreement;
    } else {
      otherAgreements.push(agreement);
    }

  });

  res.render('projects/choose-agreement', { 'mainAgreement': targetAgreement, 'otherAgreements': otherAgreements });

});

router.get('/projects/create-or-choose', function (req, res) {
  req.session.data['this_agreement_name'] = req.query.agg;
  req.session.data['this_agreement_id'] = req.query.agID;
  req.session.data['this_lot'] = req.query.lot; //not sure where it is used in prototype
  req.session.data['this_lot_number'] = req.query.lot.replace(/(Lot |:.+)/g, '')
  req.session.data['projPersistID'] = req.session.data['this_agreement_id'] + '-' + 'Lot ' + req.session.data['this_lot'].replace(/(Lot |:.+)/g, '') + '-' + req.session.data['contracting_auth'];
  let targetAgreement;
  req.session.data['agreements'].forEach((agreement) => {

    if (agreement.number === req.session.data['this_agreement_id']) {
      targetAgreement = agreement;
      req.session.data['the_agreement'] = agreement;
    }

  });
  if (targetAgreement !== undefined) {
    targetAgreement.lots.forEach((lot) => {

      if (req.session.data['this_lot_number'] === lot.number) {
        req.session.data['the_lot'] = lot;
      }
    });
  }
  res.redirect('/projects');

});

router.get('/agreement', function (req, res) {

  let agreeID = req.query.id,
    thisAgreement;

  req.session.data['agreements'].forEach((agreement) => {

    if (agreeID === agreement.number) {
      thisAgreement = agreement;
    }

  });

  if (thisAgreement !== undefined) {
    res.render('agreement', { 'theAgreement': thisAgreement });
  } else {
    res.redirect('/login');
  }

});

router.get('/agreement/lot', function (req, res) {

  let agreeID = req.query.id, agreedLotNo = req.query.no,
    thisAgreement, thisLot;
  req.session.data['this_agreement_id'] = agreeID;
  req.session.data['agreements'].forEach((agreement) => {

    if (agreeID === agreement.number) {
      thisAgreement = agreement;
    }
  });


  if (thisAgreement !== undefined) {
    thisAgreement.lots.forEach((lot) => {

      if (agreedLotNo === lot.number) {
        thisLot = lot;
      }
    });
  }
  if (thisAgreement !== undefined && thisLot !== undefined) {
    res.render('agreement/lot', { 'theAgreement': thisAgreement, 'theLot': thisLot, 'howToBuyInc': "includes/howtobuy/" + thisAgreement.number + "/lot" + thisLot.number + ".html" });
  }
  else {
    res.redirect('/login');
  }

});

// not in use now used in prototype alpha
router.get('/projects/offer-type', function (req, res) {

  let pageTitle = "Not enough data",
    pageIntro = "Not enough data.",
    lotID = req.session.data['this_lot'],
    offerIDArray,
    offerCollection = [];

  lotID = lotID.replace(/(Lot |:.+)/g, '');

  if (req.session.data['this_agreement_id'] === "RM1043.7") {

    if (lotID == 1 || lotID == 4) {
      pageTitle = "Type of specialist you need";
      pageIntro = "You can only post requirements for 1 specialist role at a time, for example if you want to find 3 developers, you must post 3 separate requirements – 1 for each developer.";
    } else if (lotID == 2 || lotID == 3) {
      pageTitle = "Type of service you need";
      pageIntro = "You can only post requirements for 1 service at a time, for example if you require 3 applications to be tested, you must post 3 separate requirements – 1 for each application.";
    }
  } else if (req.session.data['this_agreement_id'] === "RM1557.12") {

    pageTitle = "Type of cloud based services you need";
    pageIntro = "You can only post requirements for 1 cloud based service at a time.";

  }

  req.session.data['agreements'].forEach((agreement) => {

    if (agreement.number === req.session.data['this_agreement_id']) {

      agreement.lots.forEach((lot) => {
        if (lot.number == lotID) {
          offerIDArray = lot.offers;
        }
      });
    }

  });

  req.session.data['offers'].forEach((offer) => {

    let checkThis = false;

    if (req.session.data['offer_required'] == offer.id) checkThis = true;

    if (offerIDArray.includes(offer.id)) {
      offerCollection.push({
        value: offer.id,
        html: "<h3 class='govuk-heading-m'>" + offer.title + "</h3>",
        hint: {
          text: offer.description
        },
        checked: checkThis
      });
    }

  });

  res.render('projects/offer-type', { 'pageTitle': pageTitle, 'pageIntro': pageIntro, 'offerCollection': offerCollection });
});

//used in prototype alpha
router.all('/projects/filter-suppliers', function (req, res) {

  let offerTitle = "",
    supplierListURL = "",
    anyLoc = false;

  globalSupplierList = [];
  globalLocationList = [];

  req.session.data['offers'].forEach((ofr) => {
    if (ofr.id == req.session.data['offer_required']) {
      offerTitle = ofr.title;
      req.session.data['offerTitle'] = ofr.title;
    }
  });

  req.session.data['agreements'].forEach((agreemnt) => {
    if (agreemnt.number == req.session.data['this_agreement_id']) supplierListURL = agreemnt.supplierList;
  });

  // console.log(typeof req.session.data['required_locations'] === "object");

  if (typeof req.session.data['required_locations'] === "object") {
    req.session.data['required_locations'].forEach((reqLoc) => {

      if (reqLoc == 13) {
        anyLoc = true;
      } else {

        req.session.data['locations'].forEach((loc) => {

          if (reqLoc == loc.value) {
            globalLocationList.push(loc.text);
          }

        });
      }
    });
  } else {

    req.session.data['locations'].forEach((loc) => {

      if (req.session.data['required_locations'] == 13) {
        anyLoc = true;
      } else if (req.session.data['required_locations'] == loc.value) {
        globalLocationList.push(loc.text);
      }

    });

  }

  if (anyLoc === true) {
    globalLocationList = ["No specific location, for example they can work remotely"];
  }

  req.session.data['suppliers'].forEach((supplier) => {

    let matchedOffer = false,
      matchedLocale = false;

    supplier.offers.forEach((offer) => {
      if (offer == req.session.data['offer_required']) {
        matchedOffer = true;
      }
    });

    if (matchedOffer) {

      if (typeof req.session.data['required_locations'] === "object") {

        req.session.data['required_locations'].forEach((reqLoc) => {

          if (reqLoc == 13) {
            matchedLocale = true;
          } else {
            supplier.locations.forEach((offerLoc) => {
              if (offerLoc == reqLoc) matchedLocale = true;
            });
          }
        });

      } else {
        supplier.locations.forEach((offerLoc) => {
          if (offerLoc == req.session.data['required_locations'] || req.session.data['required_locations'] == 13) matchedLocale = true;
        });
      }

    }

    if (matchedOffer && matchedLocale) globalSupplierList.push(supplier);

  });

  res.render('projects/filter-suppliers', { 'filteredSuppliers': globalSupplierList, 'offerTitle': offerTitle, 'supplierListURL': supplierListURL, 'locationList': globalLocationList });

});

// set the project start date to today for data-bypass
router.post('/set-a-date', function (req, res) {
  let today = new Date();
  req.session.data['projDateStr'] = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  res.redirect('/projects');
});

//used in prototype alpha
router.get('/projects/name', function (req, res) {

  let projectID = "";

  let today = new Date();

  req.session.data['projDateStr'] = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  if (req.session.data['projPersistID'] === undefined) {
    projectID = req.session.data['this_agreement_id'] + '-' + 'Lot ' + req.session.data['this_lot'].replace(/(Lot |:.+)/g, '') + '-' + req.session.data['contracting_auth'];
  } else {
    projectID = req.session.data['projPersistID'];
  }

  // if (req.session.data['projPersistID'] === undefined) {
  //   projectID = "Project-" + Math.random().toString().replace(/^0\.(\d{4})\d+$/, "$1");
  // } else {
  //   projectID = req.session.data['projPersistID'];
  // }

  res.render('projects/name', { 'projectID': projectID });

});

//used in prototype alpha
router.get('/projects/proj-name-confirm', function (req, res) {

  let namingString = "";

  if (req.session.data['projLongName'].length > 0) {
    namingString = '<p class="govuk-body-l"><strong>' + req.session.data['projLongName'] + '</strong></p><p class="govuk-body">Project ID: <strong>' + req.session.data['projPersistID'] + '</strong> <br>You should include this ID in any correspondence with CCS. </p>';
  } else {
    namingString = '<p class="govuk-body-l">Your project has been saved with the ID <strong>' + req.session.data['projPersistID'] + '</strong> </p><p class="govuk-body">You should include this ID in any correspondence with CCS. </p>';
  }

  res.render('projects/proj-name-confirm', { 'namingString': namingString });

});

//used in prototype alpha
router.post('/projects/need-collab', function (req, res) {

  if (req.session.data['add_collaborators'] === "Yes") {
    res.redirect('add-collaborators');
  } else {
    res.redirect('index');
  }

});

//used in prototype alpha
router.post('/projects/store-collab', function (req, res) {

  req.session.data['project_team_members'] = [];

  for (var i = 1; i < 7; i++) {
    if (req.session.data['proj_collab_name_' + i] != "" && req.session.data['proj_collab_name_' + i] != undefined) {
      req.session.data['project_team_members'].push({
        "name": req.session.data['proj_collab_name_' + i],
        "email": req.session.data['proj_collab_email_' + i],
        "tel": req.session.data['proj_collab_tel_' + i]
      });
    }
  }
  // console.log(req.session.data['project_team_members']);
  res.redirect('/dashboard');
});

router.all('/rfi/type-select', function (req, res) {

  if (req.session.data['ccs_rfi_type'] === "all_online") {
    res.render('rfi/who');
  } else if (req.session.data['ccs_rfi_type'] === "download_docs") {
    res.redirect('down-docs');
  } else {
    res.redirect('up-docs');
  }

});

//used in prototype alpha
router.all('/rfi/dates', function (req, res) {

  let timeUnitCollection = [],
    storedUnit = req.session.data['rfi_proj_duration_units'],
    allUnits = ["days", "weeks", "months"];

  if (req.session.data['rfi_proj_duration_units'] == undefined) storedUnit = "weeks";

  allUnits.forEach((unit) => {
    let isSelected = (storedUnit === unit) ? true : false;

    timeUnitCollection.push({
      value: unit,
      text: unit,
      selected: isSelected
    });

  });

  res.render('rfi/dates', { 'timeUnitCollection': timeUnitCollection });
});

//used in prototype alpha
router.all('/projects/event-needs', function (req, res) {

  if (req.session.data['choose_pre_engage'] == "Request for Information") {
    res.redirect('/rfi/rfi-task-list.html');
  } else {

    let lotID = req.session.data['this_lot'],
      offerIDArray,
      offerCollection = [];

    lotID = lotID.replace(/(Lot |:.+)/g, '');

    req.session.data['agreements'].forEach((agreement) => {

      if (agreement.number === req.session.data['this_agreement_id']) {

        agreement.lots.forEach((lot) => {
          if (lot.number == lotID) {
            offerIDArray = lot.offers;
          }
        });
      }

    });

    req.session.data['offers'].forEach((offer) => {

      let checkThis = false;

      if (req.session.data['offer_required'] == offer.id) checkThis = true;

      if (offerIDArray.includes(offer.id)) {
        offerCollection.push({
          value: offer.id,
          text: offer.title,
          selected: checkThis
        });
      }

    });

    res.render('projects/event-needs', { 'offerCollection': offerCollection });
  }
});

//used in prototype alpha
router.post('/projects/event-sent', function (req, res) {

  let eoiID = "eoi-" + Math.random().toString().replace(/^0\.(\d{4})\d+$/, "$1");

  req.session.data['eoi_ref_no'] = eoiID;

  res.render('projects/event-sent', { 'eoi_ref_no': eoiID })

});

//used in prototype alpha
router.all('/projects/event-review', function (req, res) {

  let supplierListItems = "",
    locationListItems = "",
    supplierCount = globalSupplierList.length;

  globalSupplierList.forEach((supplier) => {
    supplierListItems += "<li>" + supplier.name + "</li>";
  });

  globalLocationList.forEach((location) => {
    locationListItems += "<li>" + location + "</li>";
  });


  if (req.session.data['choose_pre_engage'] == "Expression of Interest") {

    let docDetailList = [],
      madeUpDocSize = "",
      rightNow = new Date().toString().replace(/\s[A-Z]{2,3}.+/, ""),
      longMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      thisMonthName = "",
      deadlineHour = "",
      meridiem = "am",
      evalCriteriaList = "",
      theOfferTitle = "";

    if (req.session.data['offerTitle'] == undefined) {
      req.session.data['offers'].forEach((offer) => {

        if (req.session.data['eoi_offer'] == offer.id) req.session.data['offerTitle'] = offer.title;

      });
    }

    if (req.session.data['eoi_response_date_time'] != undefined) deadlineHour = req.session.data['eoi_response_date_time'].replace(/:\d{2}$/, "");

    if (req.session.data['eoi_response_date-month'] != undefined) {
      thisMonthName = longMonths[req.session.data['eoi_response_date-month'] - 1];

      if (deadlineHour > 11) meridiem = "pm";
      if (deadlineHour > 12) deadlineHour = deadlineHour - 12;
      deadlineHour += ":00" + meridiem;
    }

    if (req.session.data['eoi_file_upload_1'] != "" && req.session.data['eoi_file_upload_1'] != undefined) {
      madeUpDocSize = Math.random().toString().replace(/^0\.(\d{2})(\d)\d+$/, "$1.$2");
      docDetailList.push([{ text: req.session.data['eoi_file_upload_1'] }, { text: madeUpDocSize + "kB" }, { text: rightNow }]);
    }

    if (req.session.data['eoi_file_upload_2'] != "" && req.session.data['eoi_file_upload_2'] != undefined) {
      madeUpDocSize = Math.random().toString().replace(/^0\.(\d{2})(\d)\d+$/, "$1.$2");
      docDetailList.push([{ text: req.session.data['eoi_file_upload_2'] }, { text: madeUpDocSize + "kB" }, { text: rightNow }]);
    }

    if (req.session.data['eoi_file_upload_3'] != "" && req.session.data['eoi_file_upload_3'] != undefined) {
      madeUpDocSize = Math.random().toString().replace(/^0\.(\d{2})(\d)\d+$/, "$1.$2");
      docDetailList.push([{ text: req.session.data['eoi_file_upload_3'] }, { text: madeUpDocSize + "kB" }, { text: rightNow }]);
    }

    if (req.session.data['eoi_file_upload_4'] != "" && req.session.data['eoi_file_upload_4'] != undefined) {
      madeUpDocSize = Math.random().toString().replace(/^0\.(\d{2})(\d)\d+$/, "$1.$2");
      docDetailList.push([{ text: req.session.data['eoi_file_upload_4'] }, { text: madeUpDocSize + "kB" }, { text: rightNow }]);
    }

    if (req.session.data['eoi_about_cust_org'] != "" && req.session.data['eoi_about_cust_org'] != undefined) req.session.data['eoi_about_cust_org'] = req.session.data['eoi_about_cust_org'].replace(/\n/g, "<br>");
    if (req.session.data['eoi_work_objectives'] != "" && req.session.data['eoi_work_objectives'] != undefined) req.session.data['eoi_work_objectives'] = req.session.data['eoi_work_objectives'].replace(/\n/g, "<br>");

    if (req.session.data['eoi_other_info'] == "" || req.session.data['eoi_other_info'] == undefined) req.session.data['eoi_other_info'] = "None supplied";
    else req.session.data['eoi_other_info'] = req.session.data['eoi_other_info'].replace(/\n/g, "<br>");

    if (req.session.data['eoi_eval_criterion_1'] != "") {
      evalCriteriaList = "<li>" + req.session.data['eoi_eval_criterion_1'] + "</li>";
    } else {
      evalCriteriaList = "<li>Not yet supplied.</li>";
    }

    if (req.session.data['eoi_eval_criterion_2'] != "") evalCriteriaList += "<li>" + req.session.data['eoi_eval_criterion_2'] + "</li>";
    if (req.session.data['eoi_eval_criterion_3'] != "") evalCriteriaList += "<li>" + req.session.data['eoi_eval_criterion_3'] + "</li>";
    if (req.session.data['eoi_eval_criterion_4'] != "") evalCriteriaList += "<li>" + req.session.data['eoi_eval_criterion_4'] + "</li>";
    if (req.session.data['eoi_eval_criterion_5'] != "") evalCriteriaList += "<li>" + req.session.data['eoi_eval_criterion_5'] + "</li>";
    if (req.session.data['eoi_eval_criterion_6'] != "") evalCriteriaList += "<li>" + req.session.data['eoi_eval_criterion_6'] + "</li>";

    res.render('projects/eoi-review', { 'supplierList': supplierListItems, 'locationList': locationListItems, 'supplierCount': supplierCount, 'docDetailList': docDetailList, 'thisMonthName': thisMonthName, 'deadlineHour': deadlineHour, 'evalCriteriaList': evalCriteriaList });

  } else if (req.session.data['choose_pre_engage'] == "Request for Information") {

    res.render('projects/review', { 'supplierList': supplierListItems, 'locationList': locationListItems, 'supplierCount': supplierCount });
  }

});

router.get('/projects/select-path-for-lot', function (req, res) {
  if (req.session.data['the_lot'].hasEOI === true && req.session.data['the_lot'].hasRFI === true) {
    res.redirect('/projects/events/choose-route');
  } else if (req.session.data['the_lot'].hasEOI === true && req.session.data['the_lot'].hasRFI === false) {
    res.redirect('/eoi/eoi-task-list');
  } else if (req.session.data['the_lot'].hasEOI === false && req.session.data['the_lot'].hasRFI === true) {
    res.redirect('/rfi/rfi-task-list');
  }

});

router.get('/projects/select-edit-premarket-route', function (req, res) {
  if (req.session.data['the_lot'].hasEOI === true && req.session.data['the_lot'].hasRFI === true) {
    if (req.session.data['choose_pre_engage'] === "Request for Information") {
      res.redirect('/rfi/rfi-task-list');
    } else if (req.session.data['choose_pre_engage'] === "Expression of Interest") {
      res.redirect('/eoi/eoi-task-list');
    }
  } else if (req.session.data['the_lot'].hasEOI === true && req.session.data['the_lot'].hasRFI === false) {
    res.redirect('/eoi/eoi-task-list');
  } else if (req.session.data['the_lot'].hasEOI === false && req.session.data['the_lot'].hasRFI === true) {
    res.redirect('/rfi/rfi-task-list');
  }
 
});

router.get('/projects/select-review-path', function (req, res) {
  if (req.session.data['the_lot'].hasEOI === true && req.session.data['the_lot'].hasRFI === true) {
    if (req.session.data['choose_pre_engage'] === "Request for Information") {
      res.redirect('/rfi/review');
    } else if (req.session.data['choose_pre_engage'] === "Expression of Interest") {
      res.redirect('/eoi/review');
    }
  } else if (req.session.data['the_lot'].hasEOI === true && req.session.data['the_lot'].hasRFI === false) {
    res.redirect('/eoi/review');
  } else if (req.session.data['the_lot'].hasEOI === false && req.session.data['the_lot'].hasRFI === true) {
    res.redirect('/rfi/review');
  }
 
});

router.post('/projects/select-premarket-route', function (req, res) {
  if (req.session.data['choose_pre_engage'] === "Request for Information") {
    res.redirect('/rfi/rfi-task-list');
  } else if (req.session.data['choose_pre_engage'] === "Expression of Interest") {
    res.redirect('/eoi/eoi-task-list');
  }
});

router.get('/eoi/name', function (req, res) {
  let projectID = getProjectID(req);
  res.render('eoi/name', { 'projectID': projectID });
});

router.get('/eoi/procurement-lead', function (req, res) {
  let { team_members, leadUser } = getProcurementLead(req);
  res.render('eoi/procurement-lead', { 'potential_team_members': team_members, 'selected_user': leadUser });
});

router.get('/eoi/add-collaborators', function (req, res) {
  let { drop_down_user_list, leadUser } = getCollaboratorsList(req);
  res.render('eoi/add-collaborators', { 'potential_team_members': drop_down_user_list, 'lead_user': leadUser });

});

router.post('/eoi/store-collaborators', function (req, res) {
  req.session.data['collaborators_list'] = collaborators_list;
  collaborators_list = []; // emptying it because if we clear data from prototype this does not gets clear and messes with functionality. 
  res.redirect('/eoi/eoi-task-list');
});

router.get('/eoi/select-document-type', function (req, res) {
  if (req.session.data['ccs_eoi_type'] === "all_online") {
    res.redirect('/eoi/online-task-list');
  } else if (req.session.data['ccs_eoi_type'] === "all_offline") {
    res.redirect('/eoi/offline-doc');
  }
});

router.post('/eoi/isValidEoiStartDateForSelectedLot', function (req, res) {
  const startDate = new Date(req.query.date);
  const lotExpiryDate = new Date(req.session.data['the_lot'].endDate);


  // // get logic to check if date is big or small
  if (startDate < lotExpiryDate) {
    res.type('json');
    res.send(JSON.stringify({ 'isValid': true }));
    res.end();
  } else {
    res.type('json');
    res.send(JSON.stringify({ 'isValid': false }));
    res.end();
  }
});

router.all('/eoi/suppliers', function (req, res) {
  const suppliers_list = req.session.data['agreement_suppliers_list'];

  if (req.session.data['eoi_selected_suppliers'] === undefined) {
    req.session.data['eoi_selected_suppliers'] = req.session.data['agreement_suppliers_list'].map((sup) => { return sup.id });
    req.session.data['eoi_selected_supplier_count'] = req.session.data['agreement_suppliers_list'].length;
    suppliers_list.map((supp) => {
      supp.btntext = "Remove";
    });
  } else {
    let arr_of_selected_ids;
    if(typeof(req.session.data['eoi_selected_suppliers']) === 'string')
    arr_of_selected_ids = req.session.data['eoi_selected_suppliers'].split(',').map(Number);
    else
    arr_of_selected_ids = req.session.data['eoi_selected_suppliers'];
    suppliers_list.forEach((supp) => {
      if (arr_of_selected_ids.includes(supp.id, 0)) {
        supp.btntext = "Remove";
      } else {
        supp.btntext = "Add";
      }
    });
  }
  res.render('eoi/suppliers', { 'suppliers_list': suppliers_list });
});

router.all('/eoi/response-date', function (req, res) {
  //published date
  const publication_date = new Date();
  publication_date.setDate(publication_date.getDate());
  if (req.session.data['eoi_publish_date_string'] === undefined) {
    req.session.data['eoi_publish_date_string'] = getDateString(publication_date);
  }
  //clarification date
  const clarification_date = AddDaysToDate(publication_date, 4);
  if (req.session.data['eoi_clarification_date_string'] === undefined) {
    req.session.data['eoi_clarification_date_string'] = getDateString(clarification_date) + ', 11:59 pm';
    req.session.data['eoi_clarification_date'] = clarification_date;
  }
  //Deadline for the publication of responses to RFI Clarification questions

  const clarification_response_date = AddDaysToDate(publication_date, 6);
  if (req.session.data['eoi_clarification_response_date_string'] === undefined) {
    req.session.data['eoi_clarification_response_date_string'] = getDateString(clarification_response_date) + ', 11:59 pm';
    req.session.data['eoi_clarification_response_date'] = clarification_response_date;
  }
  //Deadline for submission of a RFI Response = Publication plus 10 working days

  const rfi_response_date = AddDaysToDate(publication_date, 10);
  if (req.session.data['eoi_response_date_string'] === undefined) {
    req.session.data['eoi_response_date_string'] = getDateString(rfi_response_date) + ', 11:59 pm';
    req.session.data['eoi_response_date'] = rfi_response_date;
  }
  //Confirm next steps to RFI Respondents = Publication plus 20 working days

  const next_steps_date = AddDaysToDate(publication_date, 20);
  if (req.session.data['eoi_next_steps_date_string'] === undefined) {
    req.session.data['eoi_next_steps_date_string'] = getDateString(next_steps_date) + ', 11:59 pm';
    req.session.data['eoi_next_steps_date'] = next_steps_date;
  }

  res.render('eoi/response-date', {
    'eoi_publish_date_string': req.session.data['eoi_publish_date_string'],
    'clarification_date_string': req.session.data['eoi_clarification_date_string'],
    'clarification_response_date_string': req.session.data['eoi_clarification_response_date_string'],
    'eoi_response_date_string': req.session.data['eoi_response_date_string'],
    'next_steps_date_string': req.session.data['eoi_next_steps_date_string']
  });

});

router.post('/eoi/changeClarificationDate', function (req, res) {
  let newClarification_date_string = req.query.date;
  const newdate = new Date(newClarification_date_string);
  const olddate = new Date(req.session.data['eoi_clarification_date']);
  const clarification_res_date = new Date(req.session.data['eoi_clarification_response_date']);
  const eoi_res_date = new Date(req.session.data['eoi_response_date']);
  const ns_res_date = new Date(req.session.data['eoi_next_steps_date']);

  // get logic to check if date is big or small
  req.session.data['eoi_clarification_date_string'] = getDateString(newdate);
  req.session.data['eoi_clarification_date'] = newdate;

  if (newdate.getTime() > olddate.getTime()) {
    // find duration difference in date
    const duration_difference = getDifferenceInDays(newdate, olddate);

    //change other dates

    //date 3
    const clarification_response_date = AddDaysToDate(clarification_res_date, duration_difference);
    req.session.data['eoi_clarification_response_date_string'] = getDateString(clarification_response_date);
    req.session.data['eoi_clarification_response_date'] = clarification_response_date;

    //date 4
    const eoi_response_date = AddDaysToDate(eoi_res_date, duration_difference);
    req.session.data['eoi_response_date_string'] = getDateString(eoi_response_date);
    req.session.data['eoi_response_date'] = eoi_response_date;

    //date 5
    const ns_date = AddDaysToDate(ns_res_date, duration_difference);
    req.session.data['eoi_next_steps_date_string'] = getDateString(ns_date);
    req.session.data['eoi_next_steps_date'] = ns_date;

    // change all the other offsets by that duration
    res.type('json');
    res.send(JSON.stringify({
      "change_all_dates": true, "newdate": req.session.data['eoi_clarification_date_string'],
      "clarification_res": req.session.data['eoi_clarification_response_date_string'],
      "eoi_res": req.session.data['eoi_response_date_string'],
      "nxt_steps": req.session.data['eoi_next_steps_date_string']
    }));
    res.end();
  }
  else { //its a valid future date but less than the suggested date(as per publication offset)
    res.type('json');
    res.send(JSON.stringify({ "change_all_dates": false, "newdate": req.session.data['eoi_clarification_date_string'] }));
    res.end();
  }
});

router.post('/eoi/clarification-response', function (req, res) {
  let newClarification_date_string = req.query.date;
  const newdate = new Date(newClarification_date_string);
  const clarification_date = new Date(req.session.data['eoi_clarification_date_string']);
  const olddate = new Date(req.session.data['eoi_clarification_response_date']);
  const eoi_res_date = new Date(req.session.data['eoi_response_date']);
  const ns_res_date = new Date(req.session.data['eoi_next_steps_date']);

  // // get logic to check if date is big or small
  if (clarification_date.getTime() > newdate.getTime()) {
    res.type('json');
    res.send(JSON.stringify({ "error": true, "err_msg": "Deadline for responses of EoI clarification questions must be after deadline of clarification period" }));
    res.end()
  }

  if (newdate.getTime() > olddate.getTime()) {
    req.session.data['eoi_clarification_response_date_string'] = getDateString(newdate);
    req.session.data['eoi_clarification_response_date'] = newdate;
    // find duration difference in date
    const duration_difference = getDifferenceInDays(newdate, olddate);

    //change other dates

    //date 4
    const eoi_response_date = AddDaysToDate(eoi_res_date, duration_difference);
    req.session.data['eoi_response_date_string'] = getDateString(eoi_response_date);
    req.session.data['eoi_response_date'] = eoi_response_date;

    //date 5
    const ns_date = AddDaysToDate(ns_res_date, duration_difference);
    req.session.data['eoi_next_steps_date_string'] = getDateString(ns_date);
    req.session.data['eoi_next_steps_date'] = ns_date;

    // change all the other offsets by that duration
    res.type('json');
    res.send(JSON.stringify({
      "change_all_dates": true, "newdate": req.session.data['eoi_clarification_response_date_string'],
      "eoi_res": req.session.data['eoi_response_date_string'],
      "nxt_steps": req.session.data['eoi_next_steps_date_string']
    }));
    res.end();
  }
  else { //its a valid future date but less than the suggested date(as per publication offset)
    res.type('json');
    res.send(JSON.stringify({ "change_all_dates": false, "newdate": req.session.data['eoi_clarification_response_date_string'] }));
    res.end();
  }
});

router.post('/eoi/change-response-date', function (req, res) {
  const newdate = new Date(req.query.date);
  const clarification_response_date = new Date(req.session.data['eoi_clarification_response_date']);
  const olddate = new Date(req.session.data['eoi_response_date']);
  const ns_res_date = new Date(req.session.data['eoi_next_steps_date']);

  // // get logic to check if date is big or small
  if (clarification_response_date.getTime() > newdate.getTime()) {
    res.type('json');
    res.send(JSON.stringify({ 'error': true, 'error_msg': 'Deadline for EoI response must be after deadline for clarification of EoI questions' }));
    res.end();
  }

  if (newdate.getTime() > olddate.getTime()) {
    req.session.data['eoi_response_date_string'] = getDateString(newdate);
    req.session.data['eoi_response_date'] = newdate;
    // find duration difference in date
    const duration_difference = getDifferenceInDays(newdate, olddate);
    //change other dates
    //date 5
    const ns_date = AddDaysToDate(ns_res_date, duration_difference);
    req.session.data['eoi_next_steps_date_string'] = getDateString(ns_date);
    req.session.data['eoi_next_steps_date'] = ns_date;

    // change all the other offsets by that duration
    res.type('json');
    res.send(JSON.stringify({
      "change_all_dates": true, "newdate": req.session.data['eoi_response_date_string'],
      "nxt_steps": req.session.data['eoi_next_steps_date_string']
    }));
    res.end();
  }
  else { //its a valid future date but less than the suggested date(as per publication offset)
    res.type('json');
    res.send(JSON.stringify({ "change_all_dates": false, "newdate": req.session.data['eoi_response_date_string'] }));
    res.end();
  }
});

router.post('/eoi/change-nextsteps-date', function (req, res) {
  const newdate = new Date(req.query.date);
  const res_date = new Date(req.session.data['eoi_response_date']);
  const olddate = new Date(req.session.data['eoi_next_steps_date']);

  // // get logic to check if date is big or small
  // if (clarification_date.getTime() > newdate.getTime()) {
  //      res.type(json);
  // res.send(JSON.stringify({'error':true,'error_msg':'Deadline for responses of RFI clarification questions must be after deadline of clarification period'}));
  // res.end();
  // }

  if (newdate.getTime() > res_date.getTime()) {
    req.session.data['eoi_next_steps_date_string'] = getDateString(newdate);
    req.session.data['eoi_next_steps_date'] = newdate;

    // change all the other offsets by that duration
    res.type('json');
    res.send(JSON.stringify({ "change_all_dates": true, "newdate": req.session.data['eoi_next_steps_date_string'] }));
    res.end();
  }
  else { //its a valid future date but less than the suggested date(as per publication offset)
    res.type('json');
    res.send(JSON.stringify({ "error": true, "err_msg": "Deadline for next steps must be after deadline for EoI response date" }));
    res.end();
  }
});

router.all('/eoi/review', function (req, res) {
  let leadUser = {};
  let resourseStartDate = "";
  req.session.data['potential_team_members'].forEach((user) => {
    if (req.session.data['procurement_lead'] == null) {
      if (user.is_logged_in === true) {
        req.session.data['procurement_lead'] = user.id;
        leadUser = user;
      }
    } else if (user.id === req.session.data['procurement_lead']) {
      leadUser = user;
    }
  });
 
    let date = new Date(req.session.data['eoi_resource_start_date-day'] + ',' + req.session.data['eoi_resource_start_date-month'] + ',' + req.session.data['eoi_resource_start_date-year'])
    resourseStartDate = getDateString(date);
  res.render('eoi/review', { 'lead_user': leadUser , 'resourseStartDate':resourseStartDate });
});

router.post('/eoi/event-sent', function (req, res) {

  let eoiID = "eoi-" + Math.random().toString().replace(/^0\.(\d{4})\d+$/, "$1");

  req.session.data['eoi_ref_no'] = eoiID;

  res.render('eoi/event-sent', { 'eoi_ref_no': eoiID })

});

router.get('/rfi/select-document-type', function (req, res) {

  if (req.session.data['ccs_rfi_type'] === "all_online") {
    res.redirect('/rfi/online-task-list');
  } else if (req.session.data['ccs_rfi_type'] === "all_offline") {
    res.redirect('/rfi/offline-doc');
  }
});


router.get('/rfi/rfi-task-list', function (req, res) {
  let projectID = getProjectID(req);
  res.render('rfi/rfi-task-list', { 'projectID': projectID });
});


router.get('/rfi/name', function (req, res) {

  let projectID = getProjectID(req);
  // if (req.session.data['projPersistID'] === undefined) {
  //   projectID = "Project-" + Math.random().toString().replace(/^0\.(\d{4})\d+$/, "$1");
  // } else {
  //   projectID = req.session.data['projPersistID'];
  // }

  res.render('rfi/name', { 'projectID': projectID });

});

router.post('/rfi/set-procurement-lead', function (req, res) {
  respondWithSelectedUser(req, res);
});

router.get('/rfi/procurement-lead', function (req, res) {
  let { team_members, leadUser } = getProcurementLead(req);
  res.render('rfi/procurement-lead', { 'potential_team_members': team_members, 'selected_user': leadUser });
});

router.get('/rfi/add-collaborators', function (req, res) {
  let { drop_down_user_list, leadUser } = getCollaboratorsList(req);
  res.render('rfi/add-collaborators', { 'potential_team_members': drop_down_user_list, 'lead_user': leadUser });

});

router.post('/rfi/store-collaborators', function (req, res) {
  req.session.data['collaborators_list'] = collaborators_list;
  collaborators_list = []; // emptying it because if we clear data from prototype this does not gets clear and messes with functionality. 
  res.redirect('/rfi/rfi-task-list');
});

router.post('/rfi/get-collaborator-detail', function (req, res) {
  respondWithSelectedUser(req, res);
});

router.post('/rfi/add-rfi-collaborator', function (req, res) {
  let selectedUser = {};
  req.session.data['potential_team_members'].forEach((user) => {
    if (user.id === req.query.id) {
      selectedUser = user;
      collaborators_list.push(selectedUser);
    }
  });
  res.type('json');
  res.send(JSON.stringify(selectedUser));
  res.end();
});

router.post('/rfi/delete-rfi-collaborator', function (req, res) {
  let selectedUser = {};
  req.session.data['potential_team_members'].forEach((user) => {
    if (user.id === req.query.id) {
      selectedUser = user;
    }
  });
  if (collaborators_list === undefined) {
    collaborators_list = req.session.data['collaborators-list'];
  }
  let index = collaborators_list.findIndex((user) => user.id === selectedUser.id);
  if (index !== -1) {
    collaborators_list.splice(index, 1);
  }
  res.type('json');
  res.send(JSON.stringify(selectedUser));
  res.end();
});

router.get('/rfi/project-status', function (req, res) {

  const phases_list = ['Discovery', 'Alpha', 'Beta', 'Live'];
  let prog_phase_items = [{ "value": "0", "text": "Please select an option", "selected": true }];
  let resourse_phase_items = [{ "value": "0", "text": "Please select an option", "selected": true }];
  let selected = true;
  phases_list.forEach((item, index) => {
    if (req.session.data['rfi_prog_phase'] === (index + 1).toString()) {
      selected = true;
    } else {
      selected = false;
    }
    prog_phase_items.push({
      value: item,
      text: item,
      selected: selected
    });
    if (req.session.data['rfi_prog_resourse_phase_req'] === (index + 1).toString()) {
      selected = true;
    } else {
      selected = false;
    }
    resourse_phase_items.push({
      value: item,
      text: item,
      selected: selected
    });
  })
  res.render('rfi/project-status', { 'prog_phase_items': prog_phase_items, 'resourse_phase_items': resourse_phase_items });

});

router.all('/rfi/response-date', function (req, res) {
  //published date
  const publication_date = new Date();
  publication_date.setDate(publication_date.getDate());
  if (req.session.data['rfi_publish_date_string'] === undefined) {
    req.session.data['rfi_publish_date_string'] = getDateString(publication_date);
  }
  //clarification date
  const clarification_date = AddDaysToDate(publication_date, 4);
  if (req.session.data['rfi_clarification_date_string'] === undefined) {
    req.session.data['rfi_clarification_date_string'] = getDateString(clarification_date) + ', 11:59 pm';
    req.session.data['rfi_clarification_date'] = clarification_date;
  }
  //Deadline for the publication of responses to RFI Clarification questions

  const clarification_response_date = AddDaysToDate(publication_date, 6);
  if (req.session.data['rfi_clarification_response_date_string'] === undefined) {
    req.session.data['rfi_clarification_response_date_string'] = getDateString(clarification_response_date) + ', 11:59 pm';
    req.session.data['rfi_clarification_response_date'] = clarification_response_date;
  }
  //Deadline for submission of a RFI Response = Publication plus 10 working days

  const rfi_response_date = AddDaysToDate(publication_date, 10);
  if (req.session.data['rfi_response_date_string'] === undefined) {
    req.session.data['rfi_response_date_string'] = getDateString(rfi_response_date) + ', 11:59 pm';
    req.session.data['rfi_response_date'] = rfi_response_date;
  }
  //Confirm next steps to RFI Respondents = Publication plus 20 working days

  const next_steps_date = AddDaysToDate(publication_date, 20);
  if (req.session.data['rfi_next_steps_date_string'] === undefined) {
    req.session.data['rfi_next_steps_date_string'] = getDateString(next_steps_date) + ', 11:59 pm';
    req.session.data['rfi_next_steps_date'] = next_steps_date;
  }

  //res.render('rfi/response-date');

  res.render('rfi/response-date', {
    'rfi_publish_date_string': req.session.data['rfi_publish_date_string'],
    'clarification_date_string': req.session.data['rfi_clarification_date_string'],
    'clarification_response_date_string': req.session.data['rfi_clarification_response_date_string'],
    'rfi_response_date_string': req.session.data['rfi_response_date_string'],
    'next_steps_date_string': req.session.data['rfi_next_steps_date_string']
  });

});

router.post('/rfi/changeClarificationDate', function (req, res) {
  let newClarification_date_string = req.query.date;
  const newdate = new Date(newClarification_date_string);
  const olddate = new Date(req.session.data['rfi_clarification_date']);
  const clarification_res_date = new Date(req.session.data['rfi_clarification_response_date']);
  const rfi_res_date = new Date(req.session.data['rfi_response_date']);
  const ns_res_date = new Date(req.session.data['rfi_next_steps_date']);

  // get logic to check if date is big or small
  req.session.data['rfi_clarification_date_string'] = getDateString(newdate);
  req.session.data['rfi_clarification_date'] = newdate;

  if (newdate.getTime() > olddate.getTime()) {
    // find duration difference in date
    const duration_difference = getDifferenceInDays(newdate, olddate);

    //change other dates

    //date 3
    const clarification_response_date = AddDaysToDate(clarification_res_date, duration_difference);
    req.session.data['rfi_clarification_response_date_string'] = getDateString(clarification_response_date);
    req.session.data['rfi_clarification_response_date'] = clarification_response_date;

    //date 4
    const rfi_response_date = AddDaysToDate(rfi_res_date, duration_difference);
    req.session.data['rfi_response_date_string'] = getDateString(rfi_response_date);
    req.session.data['rfi_response_date'] = rfi_response_date;

    //date 5
    const ns_date = AddDaysToDate(ns_res_date, duration_difference);
    req.session.data['rfi_next_steps_date_string'] = getDateString(ns_date);
    req.session.data['rfi_next_steps_date'] = ns_date;

    // change all the other offsets by that duration
    res.type('json');
    res.send(JSON.stringify({
      "change_all_dates": true, "newdate": req.session.data['rfi_clarification_date_string'],
      "clarification_res": req.session.data['rfi_clarification_response_date_string'],
      "rfi_res": req.session.data['rfi_response_date_string'],
      "nxt_steps": req.session.data['rfi_next_steps_date_string']
    }));
    res.end();
  }
  else { //its a valid future date but less than the suggested date(as per publication offset)
    res.type('json');
    res.send(JSON.stringify({ "change_all_dates": false, "newdate": req.session.data['rfi_clarification_date_string'] }));
    res.end();
  }
});

router.post('/rfi/clarification-response', function (req, res) {
  let newClarification_date_string = req.query.date;
  const newdate = new Date(newClarification_date_string);
  const clarification_date = new Date(req.session.data['rfi_clarification_date_string']);
  const olddate = new Date(req.session.data['rfi_clarification_response_date']);
  const rfi_res_date = new Date(req.session.data['rfi_response_date']);
  const ns_res_date = new Date(req.session.data['rfi_next_steps_date']);

  // // get logic to check if date is big or small
  if (clarification_date.getTime() > newdate.getTime()) {
    res.type('json');
    res.send(JSON.stringify({ "error": true, "err_msg": "Deadline for responses of RFI clarification questions must be after deadline of clarification period" }));
    res.end()
  }

  if (newdate.getTime() > olddate.getTime()) {
    req.session.data['rfi_clarification_response_date_string'] = getDateString(newdate);
    req.session.data['rfi_clarification_response_date'] = newdate;
    // find duration difference in date
    const duration_difference = getDifferenceInDays(newdate, olddate);

    //change other dates

    //date 4
    const rfi_response_date = AddDaysToDate(rfi_res_date, duration_difference);
    req.session.data['rfi_response_date_string'] = getDateString(rfi_response_date);
    req.session.data['rfi_response_date'] = rfi_response_date;

    //date 5
    const ns_date = AddDaysToDate(ns_res_date, duration_difference);
    req.session.data['rfi_next_steps_date_string'] = getDateString(ns_date);
    req.session.data['rfi_next_steps_date'] = ns_date;

    // change all the other offsets by that duration
    res.type('json');
    res.send(JSON.stringify({
      "change_all_dates": true, "newdate": req.session.data['rfi_clarification_response_date_string'],
      "rfi_res": req.session.data['rfi_response_date_string'],
      "nxt_steps": req.session.data['rfi_next_steps_date_string']
    }));
    res.end();
  }
  else { //its a valid future date but less than the suggested date(as per publication offset)
    res.type('json');
    res.send(JSON.stringify({ "change_all_dates": false, "newdate": req.session.data['rfi_clarification_response_date_string'] }));
    res.end();
  }
});

router.post('/rfi/change-response-date', function (req, res) {
  const newdate = new Date(req.query.date);
  const clarification_response_date = new Date(req.session.data['rfi_clarification_response_date']);
  const olddate = new Date(req.session.data['rfi_response_date']);
  const ns_res_date = new Date(req.session.data['rfi_next_steps_date']);

  // // get logic to check if date is big or small
  if (clarification_response_date.getTime() > newdate.getTime()) {
    res.type('json');
    res.send(JSON.stringify({ 'error': true, 'error_msg': 'Deadline for rfi response must be after deadline for clarification of rfi questions' }));
    res.end();
  }

  if (newdate.getTime() > olddate.getTime()) {
    req.session.data['rfi_response_date_string'] = getDateString(newdate);
    req.session.data['rfi_response_date'] = newdate;
    // find duration difference in date
    const duration_difference = getDifferenceInDays(newdate, olddate);
    //change other dates
    //date 5
    const ns_date = AddDaysToDate(ns_res_date, duration_difference);
    req.session.data['rfi_next_steps_date_string'] = getDateString(ns_date);
    req.session.data['rfi_next_steps_date'] = ns_date;

    // change all the other offsets by that duration
    res.type('json');
    res.send(JSON.stringify({
      "change_all_dates": true, "newdate": req.session.data['rfi_response_date_string'],
      "nxt_steps": req.session.data['rfi_next_steps_date_string']
    }));
    res.end();
  }
  else { //its a valid future date but less than the suggested date(as per publication offset)
    res.type('json');
    res.send(JSON.stringify({ "change_all_dates": false, "newdate": req.session.data['rfi_response_date_string'] }));
    res.end();
  }
});

router.post('/rfi/change-nextsteps-date', function (req, res) {
  const newdate = new Date(req.query.date);
  const res_date = new Date(req.session.data['rfi_response_date']);
  const olddate = new Date(req.session.data['rfi_next_steps_date']);

  // // get logic to check if date is big or small
  // if (clarification_date.getTime() > newdate.getTime()) {
  //      res.type(json);
  // res.send(JSON.stringify({'error':true,'error_msg':'Deadline for responses of RFI clarification questions must be after deadline of clarification period'}));
  // res.end();
  // }

  if (newdate.getTime() > res_date.getTime()) {
    req.session.data['rfi_next_steps_date_string'] = getDateString(newdate);
    req.session.data['rfi_next_steps_date'] = newdate;

    // change all the other offsets by that duration
    res.type('json');
    res.send(JSON.stringify({ "change_all_dates": true, "newdate": req.session.data['rfi_next_steps_date_string'] }));
    res.end();
  }
  else { //its a valid future date but less than the suggested date(as per publication offset)
    res.type('json');
    res.send(JSON.stringify({ "error": true, "err_msg": "Deadline for next steps must be after deadline for RFI response date" }));
    res.end();
  }
});

router.all('/rfi/suppliers', function (req, res) {
  const suppliers_list = req.session.data['agreement_suppliers_list'];
  res.render('rfi/suppliers', { 'suppliers_list': suppliers_list });
});


// router.post('/rfi/add-supplier', function (req, res) {
//   let suppliers_list = [];
//   const selected_supplier = req.session.data['rfi_suppliers'].find((supplier) => supplier.id === req.query.id);
//   if (selected_supplier !== undefined) {
//     req.session.data['rfi_selected_suppliers'].push(selected_supplier);
//   }
//   suppliers_list = req.session.data['rfi_suppliers'];
//   res.render('rfi/partial-views/supplier_list', { 'suppliers_list': suppliers_list, 'selected_supplier': selected_supplier });

// });

router.all('/rfi/review', function (req, res) {
  let leadUser = {};
  req.session.data['potential_team_members'].forEach((user) => {
    if (user.id === req.session.data['procurement_lead']) {
      leadUser = user;
    }
  });
  res.render('rfi/review', { 'lead_user': leadUser });
});

router.post('/rfi/event-sent', function (req, res) {

  let rfiID = "rfi-" + Math.random().toString().replace(/^0\.(\d{4})\d+$/, "$1");

  req.session.data['rfi_ref_no'] = rfiID;

  res.render('rfi/event-sent', { 'rfi_ref_no': rfiID })

});

router.get('/requirements/select-fc-route', function (req, res) {
  if (req.session.data['fc_route_to_market'] === '1-stage') {
    res.redirect('/requirements/rfp/type');
  } else if (req.session.data['fc_route_to_market'] === '2-stage') {
    res.redirect('/requirements/'); // not yet available in prototype
  } else if (req.session.data['fc_route_to_market'] === 'award') {
    res.redirect('/requirements/'); // not yet available in prototype
  }

});

router.get('/requirements/rfp/name', function (req, res) {
  let projectID = getProjectID(req);
  res.render('requirements/rfp/name', { 'projectID': projectID });
});

router.get('/requirements/rfp/procurement-lead', function (req, res) {
  let { team_members, leadUser } = getProcurementLead(req);
  res.render('requirements/rfp/procurement-lead', { 'potential_team_members': team_members, 'selected_user': leadUser });
});

router.get('/requirements/rfp/add-collaborators', function (req, res) {
  let { drop_down_user_list, leadUser } = getCollaboratorsList(req);        
  res.render('requirements/rfp/add-collaborators', { 'potential_team_members': drop_down_user_list, 'lead_user': leadUser });
});

router.post('/requirements/store-collaborators', function (req,res) {
req.session.data['collaborators_list'] = collaborators_list;
 res.redirect('/requirements/rfp/task-list');
});

router.post('/requirements/select_route', function (req, res) {

  if (req.session.data['ccs_route_to_market'] === "2-stage") {
    res.redirect('/requirements/build-type');
  } else if (req.session.data['ccs_route_to_market'] === "1-stage") {
    res.redirect('/requirements/build-type');
  } else {
    res.render('requirements/route');
  }

});

router.post('/requirements/select-fc-type', function (req, res) {
  // if (req.session.data['ccs_fc_type'] === "all_online") {
  //   res.redirect('/requirements/rfp/online-task-list');
  // } else if (req.session.data['ccs_fc_type'] === "all_offline") {
  //   res.redirect('/requirements/rfp/offline-doc');
  // }
  res.redirect('/requirements/rfp/task-list')
});

router.post('/requirements/select-rfp-context-route', function (req, res) {
  if (req.session.data['ccs_fc_type'] === "all_online") {
    res.redirect('/requirements/rfp/context/sub-task-list');
  } else if (req.session.data['ccs_fc_type'] === "all_offline") {
    res.redirect('/requirements/rfp/offline-doc');
  }
});

router.all('/requirements/rfp/suppliers', function (req, res) {
  const suppliers_list = req.session.data['agreement_suppliers_list'];

  // if (req.session.data['eoi_selected_suppliers'] === undefined) {
  //   req.session.data['eoi_selected_suppliers'] = req.session.data['agreement_suppliers_list'].map((sup) => { return sup.id });
  //   req.session.data['eoi_selected_supplier_count'] = req.session.data['agreement_suppliers_list'].length;
  //   suppliers_list.map((supp) => {
  //     supp.btntext = "Remove";
  //   });
  // } else {
  //   let arr_of_selected_ids;
  //   if(typeof(req.session.data['eoi_selected_suppliers']) === 'string')
  //   arr_of_selected_ids = req.session.data['eoi_selected_suppliers'].split(',').map(Number);
  //   else
  //   arr_of_selected_ids = req.session.data['eoi_selected_suppliers'];
  //   suppliers_list.forEach((supp) => {
  //     if (arr_of_selected_ids.includes(supp.id, 0)) {
  //       supp.btntext = "Remove";
  //     } else {
  //       supp.btntext = "Add";
  //     }
  //   });
  // }
  res.render('requirements/rfp/suppliers', { 'suppliers_list': suppliers_list });
});


router.get('/requirements/rfp/select-rfp-requirement-mode', function (req, res) {
  if (req.session.data['ccs_rfp_requirement_mode'] === "all_online") {
    res.redirect('/requirements/rfp/online-requirements');
  } else if (req.session.data['ccs_rfp_requirement_mode'] === "all_offline") {
    res.redirect('/requirements/rfp/offline-requirements');
  }
});

router.get('/requirements/rfp/response-date', function (req, res) {
  //published date
  const publication_date = new Date();
  publication_date.setDate(publication_date.getDate());
  if (req.session.data['rfp_publish_date_string'] === undefined) {
    req.session.data['rfp_publish_date_string'] = getDateString(publication_date);
  }
  //clarification date
  const clarification_date = AddDaysToDate(publication_date, 4);
  if (req.session.data['rfp_clarification_date_string'] === undefined) {
    req.session.data['rfp_clarification_date_string'] = getDateString(clarification_date) + ', 11:59 pm';
    req.session.data['rfp_clarification_date'] = clarification_date;
  }
  //Deadline for the publication of responses to RFI Clarification questions

  const clarification_response_date = AddDaysToDate(publication_date, 6);
  if (req.session.data['rfp_clarification_response_date_string'] === undefined) {
    req.session.data['rfp_clarification_response_date_string'] = getDateString(clarification_response_date) + ', 11:59 pm';
    req.session.data['rfp_clarification_response_date'] = clarification_response_date;
  }
  //Deadline for submission of a RFI Response = Publication plus 10 working days

  const rfi_response_date = AddDaysToDate(publication_date, 10);
  if (req.session.data['rfp_response_date_string'] === undefined) {
    req.session.data['rfp_response_date_string'] = getDateString(rfi_response_date) + ', 11:59 pm';
    req.session.data['rfp_response_date'] = rfi_response_date;
  }
  //Confirm next steps to RFI Respondents = Publication plus 20 working days

  const next_steps_date = AddDaysToDate(publication_date, 20);
  if (req.session.data['rfp_next_steps_date_string'] === undefined) {
    req.session.data['rfp_next_steps_date_string'] = getDateString(next_steps_date) + ', 11:59 pm';
    req.session.data['rfp_next_steps_date'] = next_steps_date;
  }

  res.render('requirements/rfp/response-date', {
    'rfp_publish_date_string': req.session.data['rfp_publish_date_string'],
    'clarification_date_string': req.session.data['rfp_clarification_date_string'],
    'clarification_response_date_string': req.session.data['rfp_clarification_response_date_string'],
    'rfp_response_date_string': req.session.data['rfp_response_date_string'],
    'next_steps_date_string': req.session.data['rfp_next_steps_date_string']
  });

});

router.post('/requirements/rfp/select-scoring-criteria', function (req, res) {
  if (req.session.data['rfp_scoring_criteria_type'] === "ccs") {
    res.redirect('/requirements/rfp/ccs-score-criteria');
  } else if (req.session.data['rfp_scoring_criteria_type'] === "own") {
    res.redirect('/requirements/rfp/custom-score-criteria');
  }
});

router.all('/requirements/rfp/review', function (req, res) {
  let leadUser = {};
 
  req.session.data['potential_team_members'].forEach((user) => {
    if (req.session.data['procurement_lead'] == null) {
      if (user.is_logged_in === true) {
        req.session.data['procurement_lead'] = user.id;
        leadUser = user;
      }
    } else if (user.id === req.session.data['procurement_lead']) {
      leadUser = user;
    }
  });
  res.render('requirements/rfp/review', { 'lead_user': leadUser });
});

router.post('/requirements/rfp/event-sent', function (req, res) {

  let rfpID = "XXX-XXXX"//"rfp-" + Math.random().toString().replace(/^0\.(\d{4})\d+$/, "$1");

  req.session.data['rfp_ref_no'] = rfpID;

  res.render('requirements/rfp/event-sent', { 'rfp_ref_no': rfpID })

});


module.exports = router

function getCollaboratorsList(req) {
  let drop_down_user_list = [];
  let leadUser = {};
  drop_down_user_list.push({
    value: 0,
    text: "Please select",
    selected: true
  });
  req.session.data['potential_team_members'].forEach((user) => {
    if (req.session.data['procurement_lead'] == null) {
      if (user.is_logged_in === true) {
        req.session.data['procurement_lead'] = user.id;
        leadUser = user;
      }
    }
    if (user.id === req.session.data['procurement_lead']) {
      leadUser = user;
    }
    if (req.session.data['collaborators_list'] === undefined || !(req.session.data['collaborators_list'].filter(function (e) { return e.id === user.id; }).length > 0)) {
      drop_down_user_list.push({
        value: user.id,
        text: user.fullname,
        selected: false
      });
    }
  });

  //remove lead user from drop down list
  let val = drop_down_user_list.findIndex((user) => user.value === leadUser.id);
  delete drop_down_user_list[val];
  return { drop_down_user_list, leadUser };
}

function getProcurementLead(req) {
  let team_members = [];
  let checkThis = false;
  let leadUser = {};
  req.session.data['potential_team_members'].forEach((user) => {
    if (req.session.data['procurement_lead'] == null) {
      if (user.is_logged_in === true) {
        req.session.data['procurement_lead'] = user.id;
        leadUser = user;
      }
    }
    if (user.id === req.session.data['procurement_lead']) {
      checkThis = true;
      leadUser = user;
    }
    else {
      checkThis = false;
    }
    team_members.push({
      value: user.id,
      text: user.fullname,
      selected: checkThis
    });
  });
  return { team_members, leadUser };
}

function respondWithSelectedUser(req, res) {
  let selectedUser = {};
  req.session.data['potential_team_members'].forEach((user) => {
    if (user.id === req.query.id) {
      selectedUser = user;
    }
  });
  res.type('json');
  res.send(JSON.stringify(selectedUser));
  res.end();
}

function getProjectID(req) {
  let projectID = "";

  let today = new Date();

  req.session.data['projDateStr'] = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  if (req.session.data['projPersistID'] === undefined) {
    projectID = req.session.data['this_agreement_id'] + '-' + 'Lot ' + req.session.data['this_lot'].replace(/(Lot |:.+)/g, '') + '-' + req.session.data['contracting_auth'];
  } else {
    projectID = req.session.data['projPersistID'];
  }
  return projectID;
}

function AddDaysToDate(publication_date, no_of_days) {
  let new_date = new Date(publication_date.valueOf());
  new_date.setDate(new_date.getDate() + no_of_days);
  return new_date;
}
function getDifferenceInDays(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
}
function getDateString(date) {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  }).replace(/ /g, ' ');
}
// function paginate(array, page_size, page_number) {
//   // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
//   return array.slice((page_number - 1) * page_size, page_number * page_size);
// }