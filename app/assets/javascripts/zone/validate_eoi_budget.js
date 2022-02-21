const ccsZvalidateEoiBudget = (event) => {
  event.preventDefault();

  let fieldCheck = "",
    errorStore = [];
    let minBudgetElement = document.getElementById("eoi_min_budget");

    
  fieldCheck = ccsZvalidateWithRegex( "eoi_max_budget", "Enter a numeric maximum value", /^\d{1,}$/ );
  if (fieldCheck !== true) errorStore.push(fieldCheck);


  if (minBudgetElement.value.trim().length > 0) {
    fieldCheck = ccsZvalidateWithRegex( "eoi_min_budget", "Enter a numeric minimum value", /^\d{1,}$/ );
    if (fieldCheck !== true) errorStore.push(fieldCheck);
    if(Number(minBudgetElement.value.trim()) > Number(document.getElementById("eoi_max_budget").value.trim())) {
      ccsZaddErrorMessage(minBudgetElement, "Minimum budget should be less than maximum budget");
      errorStore.push([minBudgetElement, "Minimum budget should be less than maximum budget"]);
    } else {
        ccsZremoveErrorMessage(minBudgetElement);   
     }

  }



  if (errorStore.length === 0) document.forms["eoi_budget_form"].submit();
  else ccsZPresentErrorSummary(errorStore);
};
