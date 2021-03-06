function initializeErrorStoreForFieldCheck(event) {
    event.preventDefault();
    let fieldCheck = "", errorStore = [];
    return { fieldCheck, errorStore };
}

const ccsZvalidateIR35acknowledgement = (event) => {
    let { fieldCheck, errorStore } = initializeErrorStoreForFieldCheck(event);
  
    fieldCheck = ccsZisOptionChecked( "IR35_acknowledgement", "Please select an option");
    if (fieldCheck !== true) errorStore.push(fieldCheck);
  
    if (errorStore.length === 0) document.forms["ccs_ir35_acknowledgement_form"].submit();
    else ccsZPresentErrorSummary(errorStore);
  }

  const ccsZvalidateCompetitionRoute = (event) => {
    let { fieldCheck, errorStore } = initializeErrorStoreForFieldCheck(event);
    fieldCheck = ccsZisOptionChecked( "fc_route_to_market", "Please select an option");
    if (fieldCheck !== true) errorStore.push(fieldCheck);
  
    if (errorStore.length === 0) document.forms["ccs_route_to_market_form"].submit();
    else ccsZPresentErrorSummary(errorStore);
  }

  const ccsZvalidateBuildType= (event) => {
    let { fieldCheck, errorStore } = initializeErrorStoreForFieldCheck(event);
    fieldCheck = ccsZisOptionChecked( "ccs_fc_type", "Please select an option");
    if (fieldCheck !== true) errorStore.push(fieldCheck);
  
    if (errorStore.length === 0) document.forms["ccs_ca_type_form"].submit();
    else ccsZPresentErrorSummary(errorStore);
  }

  const ccsZvalidateProjectPhase = (event) => {
    let { fieldCheck, errorStore } = initializeErrorStoreForFieldCheck(event);
    fieldCheck = ccsZisOptionChecked( "ccs_rfp_project_phase", "Please select an option");
    if (fieldCheck !== true) errorStore.push(fieldCheck);
  
    if (errorStore.length === 0) document.forms["ccs_rfp_project_phase_form"].submit();
    else ccsZPresentErrorSummary(errorStore);
  }

  const ccsZvalidateRfiSecurity = (event) => {
    let { fieldCheck, errorStore } = initializeErrorStoreForFieldCheck(event);

  
    fieldCheck = ccsZisOptionChecked( "ccs_vetting_type", "Select a security vetting level");
    if (fieldCheck !== true) errorStore.push(fieldCheck);
  
    if (errorStore.length === 0) document.forms["ccs_rfi_vetting_form"].submit();
    else ccsZPresentErrorSummary(errorStore);
  };

  const ccsZvalidateRfpSecurity = (event) => {
    let { fieldCheck, errorStore } = initializeErrorStoreForFieldCheck(event);

    fieldCheck = ccsZisOptionChecked( "ccs_rfp_vetting_type", "Select a security vetting level");
    if (fieldCheck !== true) errorStore.push(fieldCheck);
  
    if (errorStore.length === 0) document.forms["ccs_rfp_vetting_form"].submit();
    else ccsZPresentErrorSummary(errorStore);
  };
  
  const ccsZvalidateRfiType = (event) => {
    let { fieldCheck, errorStore } = initializeErrorStoreForFieldCheck(event);

    fieldCheck = ccsZisOptionChecked( "ccs_rfi_type", "Select an option");
    if (fieldCheck !== true) errorStore.push(fieldCheck);
  
    if (errorStore.length === 0) document.forms["ccs_rfi_type_form"].submit();
    else ccsZPresentErrorSummary(errorStore);
  };

  const ccsZvalidateEoiType = (event) => {
    let { fieldCheck, errorStore } = initializeErrorStoreForFieldCheck(event);

    fieldCheck = ccsZisOptionChecked( "ccs_eoi_type", "Select an option");
    if (fieldCheck !== true) errorStore.push(fieldCheck);
  
    if (errorStore.length === 0) document.forms["ccs_eoi_type_form"].submit();
    else ccsZPresentErrorSummary(errorStore);
  };

  const ccsZvalidateEoiServiceType = (event) => {
    let { fieldCheck, errorStore } = initializeErrorStoreForFieldCheck(event);
    fieldCheck = ccsZisOptionChecked( "eoi_service_type", "Please select an option");
    if (fieldCheck !== true) errorStore.push(fieldCheck);
  
    if (errorStore.length === 0) document.forms["ccs_eoi_new_form"].submit();
    else ccsZPresentErrorSummary(errorStore);
  }

  const ccsZvalidatePreMarketRoute = (event) => {
    let { fieldCheck, errorStore } = initializeErrorStoreForFieldCheck(event);
    fieldCheck = ccsZisOptionChecked( "choose_pre_engage", "Please select an option");
    if (fieldCheck !== true) errorStore.push(fieldCheck);
  
    if (errorStore.length === 0) document.forms["ccs_choose_pre_engage"].submit();
    else ccsZPresentErrorSummary(errorStore);
  }

  const ccsZvalidateRFPServiceType = (event) => {
    let { fieldCheck, errorStore } = initializeErrorStoreForFieldCheck(event);
    fieldCheck = ccsZisOptionChecked( "rfp_service_type", "Please select an option");
    if (fieldCheck !== true) errorStore.push(fieldCheck);
  
    if (errorStore.length === 0) document.forms["ccs_rfp_new_form"].submit();
    else ccsZPresentErrorSummary(errorStore);
  }