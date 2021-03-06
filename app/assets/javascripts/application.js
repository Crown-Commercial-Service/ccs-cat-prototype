/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();

// const thisLocation = window.location.href;
// const journeyPagesURL = ['name','procurement-lead','add-collaborators','type','offline-doc','online-task-list',
// 'questions','who','vetting','upload','suppliers',
// 'review','response-date','project','project-status','address','address-manual','acronyms'];
// $.each(journeyPagesURL,function() {
//   if(thisLocation.indexOf(this) != -1) {
//      ccsScrollToJourney();
//      return false;   
//   }       
// });

  if (matchMedia) {
    const mq = window.matchMedia("(min-width: 40.0625em)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // media query change
  function WidthChange(mq) {
    if (mq.matches) {
      document.querySelector('.global-navigation').setAttribute('aria-hidden', 'false');
    } else {
      document.querySelector('.global-navigation').setAttribute('aria-hidden', 'true');
    }
  }

  document.querySelector('.global-navigation__toggler').addEventListener('click', () => {
    var is_hidden = document.querySelector('.global-navigation').getAttribute('aria-hidden');
    var new_val = "true";
    if (is_hidden == "true") new_val = "false";
    document.querySelector('.global-navigation').setAttribute('aria-hidden', new_val);
  });
})

// forms validation
if (document.getElementById("ccs_login") !== null) document.getElementById("ccs_login").addEventListener('submit', ccsZvalidateLogin);

if (document.getElementById("ccs_create_or_choose") !== null) document.getElementById("ccs_create_or_choose").addEventListener('submit', ccsZvalidateCreateOrChoose);

if (document.getElementById("ccs_select_offer") !== null) document.getElementById("ccs_select_offer").addEventListener('submit', ccsZvalidateSelectOffer);

if (document.getElementById("ccs_eoi_needs") !== null) document.getElementById("ccs_eoi_needs").addEventListener('submit', ccsZvalidateEoiNeeds);

//if (document.getElementById("ccs_eoi_vetting_form") !== null) document.getElementById("ccs_eoi_vetting_form").addEventListener('submit', ccsZvalidateEoiSecurity);

//if (document.getElementById("ccs_eoi_incumbent_form") !== null) document.getElementById("ccs_eoi_incumbent_form").addEventListener('submit', ccsZvalidateEoiIncumbent);

if (document.getElementById("eoi_budget_form") !== null) document.getElementById("eoi_budget_form").addEventListener('submit', ccsZvalidateEoiBudget);

if (document.getElementById("ccs_eoi_criteria_form") !== null) document.getElementById("ccs_eoi_criteria_form").addEventListener('submit', ccsZvalidateEoiCriteria);

//if (document.getElementById("ccs_eoi_docs_form") !== null) document.getElementById("ccs_eoi_docs_form").addEventListener('submit', ccsZvalidateEoiDocs);

if (document.getElementById("ccs_eoi_deadline_form") !== null) document.getElementById("ccs_eoi_deadline_form").addEventListener('submit', ccsZvalidateEoiDeadline);

//if (document.getElementById("ccs_select_location") !== null) document.getElementById("ccs_select_location").addEventListener('submit', ccsZvalidateEoiLocation);

if (document.getElementById("ccs_eoi_contact_form") !== null) document.getElementById("ccs_eoi_contact_form").addEventListener('submit', ccsZvalidateEoiContact);

//if (document.getElementById("ccs_add_collab") !== null) document.getElementById("ccs_add_collab").addEventListener('submit', ccsZvalidateTeamMems);

//if (document.getElementById("ccs_add_rfi_collab") !== null) document.getElementById("ccs_add_rfi_collab").addEventListener('submit', ccsZvalidateRfiTeamMems);
//if (document.getElementById("ccs_project_name_form") !== null) document.getElementById("ccs_project_name_form").addEventListener('submit', ccsZvalidateProjectName);


if(document.getElementById("ccs_choose_pre_engage") !== null) document.getElementById("ccs_choose_pre_engage").addEventListener('submit', ccsZvalidatePreMarketRoute);

if(document.getElementById("ccs_eoi_type_form") !== null) document.getElementById("ccs_eoi_type_form").addEventListener('submit', ccsZvalidateEoiType);

if(document.getElementById("ccs_rfi_type_form") !== null) document.getElementById("ccs_rfi_type_form").addEventListener('submit', ccsZvalidateRfiType);

//if (document.getElementById("ccs_rfi_who_form") !== null) document.getElementById("ccs_rfi_who_form").addEventListener('submit', ccsZvalidateRfiWho);

if (document.getElementById("ccs_rfi_vetting_form") !== null) document.getElementById("ccs_rfi_vetting_form").addEventListener('submit', ccsZvalidateRfiSecurity);

if (document.getElementById("ccs_rfi_acronyms_form") !== null) document.getElementById("ccs_rfi_acronyms_form").addEventListener('submit', ccsZvalidateAcronyms);

// if (document.getElementById("ccs_rfi_dates_form") !== null) document.getElementById("ccs_rfi_dates_form").addEventListener('submit', ccsZvalidateRfiDates);

if (document.getElementById("ccs_rfp_address_form") !== null) {
  ccsZInitAddressFinder("rfp_invoice_address-address");
  document.getElementById("rfi_find_address_btn").addEventListener('click', ccsZFindAddress);
  document.getElementById("rfp_invoice_address-address").addEventListener('change', ccsZFoundAddress);
  document.getElementById("change_postcode").addEventListener('click', ccsZResetAddress);
}

if (document.getElementById("ccs_rfp_address_manual_form") !== null) document.getElementById("ccs_rfp_address_manual_form").addEventListener('submit', ccsZvalidateLegalAddress);

if (document.getElementById("ccs_rfi_about_proj") !== null) document.getElementById("ccs_rfi_about_proj").addEventListener('submit', ccsZvalidateRfiProject);

//if(document.getElementById("ccs_rfi_proj_status") !== null) document.getElementById("ccs_rfi_proj_status").addEventListener('submit', ccsZvalidateRfiProjectStatus);

if (document.getElementById("ccs_rfi_docs_form") !== null) document.getElementById("ccs_rfi_docs_form").addEventListener('submit', ccsZvalidateRfiDocs);

//if (document.getElementById("ccs_rfi_response_date_form") !== null) document.getElementById("ccs_rfi_response_date_form").addEventListener('submit', ccsZvalidateRfiResponseDate);

if (document.getElementById("ccs_rfi_questions_form") !== null) document.getElementById("ccs_rfi_questions_form").addEventListener('submit', ccsZvalidateRfIQuestions);

if (document.getElementById("ccs_eoi_purpose_form") !== null) document.getElementById("ccs_eoi_purpose_form").addEventListener('submit', ccsZvalidateEoiPurpose);

//if (document.getElementById("ccs_eoi_scope_form") !== null) document.getElementById("ccs_eoi_scope_form").addEventListener('submit', ccsZvalidateEoiScope);

if (document.getElementById("ccs_eoi_acronyms_form") !== null) document.getElementById("ccs_eoi_acronyms_form").addEventListener('submit', ccsZvalidateEoiAcronyms);

if (document.getElementById("ccs_eoi_about_proj") !== null) document.getElementById("ccs_eoi_about_proj").addEventListener('submit', ccsZvalidateEoiContext);


if (document.getElementById("ccs_eoi_new_form") !== null) document.getElementById("ccs_eoi_new_form").addEventListener('submit', ccsZvalidateEoiServiceType);

if (document.getElementById("ccs_eoi_terms_form") !== null) document.getElementById("ccs_eoi_terms_form").addEventListener('submit', ccsZvalidateEoiTermsForm);

if (document.getElementById("ccs_incumbent_form") !== null) document.getElementById("ccs_incumbent_form").addEventListener('submit', ccsZvalidateIncumbentForm);

if (document.getElementById("eoi_docs_form") !== null) document.getElementById("eoi_docs_form").addEventListener('submit', ccsZvalidateEoiDocs);

if (document.getElementById("ccs_eoi_duration") !== null) document.getElementById("ccs_eoi_duration").addEventListener('submit', ccsZvalidateEoiStartDate);

if (document.getElementById("ccs-rfi-suppliers-form") !== null) document.getElementById("ccs-rfi-suppliers-form").addEventListener('submit', ccsZValidateSuppliersForm);

if (document.getElementById("ccs_ir35_acknowledgement_form") !== null) document.getElementById("ccs_ir35_acknowledgement_form").addEventListener('submit', ccsZvalidateIR35acknowledgement);

if (document.getElementById("ccs_route_to_market_form") !== null) document.getElementById("ccs_route_to_market_form").addEventListener('submit', ccsZvalidateCompetitionRoute);

if (document.getElementById("ccs_ca_type_form") !== null) document.getElementById("ccs_ca_type_form").addEventListener('submit', ccsZvalidateBuildType);

if (document.getElementById("ccs_rfp_key_user_form") !== null) document.getElementById("ccs_rfp_key_user_form").addEventListener('submit', ccsZvalidateKeyUser);

if (document.getElementById("ccs_rfp_project_phase_form") !== null) document.getElementById("ccs_rfp_project_phase_form").addEventListener('submit', ccsZvalidateProjectPhase);

if (document.getElementById("ccs_rfp_resource_phase_form") !== null) document.getElementById("ccs_rfp_resource_phase_form").addEventListener('submit', ccsZvalidateResourcePhase);

if (document.getElementById("ccs_rfp_vetting_form") !== null) document.getElementById("ccs_rfp_vetting_form").addEventListener('submit', ccsZvalidateRfpSecurity);

if (document.getElementById("ccs_rfp_incumbent_form") !== null) document.getElementById("ccs_rfp_incumbent_form").addEventListener('submit', ccsZvalidateRfpIncumbent);

if (document.getElementById("ccs_rfp_vetting_confirmation_form") !== null) document.getElementById("ccs_rfp_vetting_confirmation_form").addEventListener('submit', ccsZvalidateVettingConfirmation);

if (document.getElementById("ccs_rfp_duration_form") !== null) document.getElementById("ccs_rfp_duration_form").addEventListener('submit', ccsZvalidateRFPStartDate);

if (document.getElementById("ccs_rfp_new_form") !== null) document.getElementById("ccs_rfp_new_form").addEventListener('submit', ccsZvalidateRFPServiceType);
