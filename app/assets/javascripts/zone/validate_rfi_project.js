const ccsZvalidateRfiProject = (event) => {
  event.preventDefault();

  let fieldCheck = "",
    errorStore = [];

    // fieldCheck = ccsZvalidateWithRegex( "rfi_prog_name", "Enter the Project / Programme Name", /^.+$/ );
    // if (fieldCheck !== true) errorStore.push(fieldCheck);

    // fieldCheck = ccsZvalidateTextArea( "rfi_why_this_work", "Describe why this work is required" );
    // if (fieldCheck !== true) errorStore.push(fieldCheck);

    fieldCheck = ccsZvalidateTextArea( "rfi_prob_statement", "Describe the problem you are aiming to solve" );
    if (fieldCheck !== true) errorStore.push(fieldCheck);

    // fieldCheck = ccsZvalidateTextArea( "rfi_will_work_on", "Describe the areas or techologies the resource will work on" );
    // if (fieldCheck !== true) errorStore.push(fieldCheck);

    // fieldCheck = ccsZvalidateWithRegex( "rfi_key_users_name", "List the key users", /^.+$/ );
    // if (fieldCheck !== true) errorStore.push(fieldCheck);

    // fieldCheck = ccsZvalidateTextArea( "rfi_key_users_outcomes", "Describe your key outcomes" );
    // if (fieldCheck !== true) errorStore.push(fieldCheck);

  if (errorStore.length === 0) document.forms["ccs_rfi_about_proj"].submit();
  else ccsZPresentErrorSummary(errorStore);
};
