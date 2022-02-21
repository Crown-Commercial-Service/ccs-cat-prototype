const ccsZvalidateProjectName = (event) => {
    event.preventDefault();
  
    let fieldCheck = "",
      errorStore = [];
  
      fieldCheck = ccsZvalidateWithRegex( "projLongName", "Please enter a custom name for the project", /^.+$/ );
      if (fieldCheck !== true) errorStore.push(fieldCheck);
  
    if (errorStore.length === 0) document.forms["ccs_project_name_form"].submit();
    else ccsZPresentErrorSummary(errorStore);
  };