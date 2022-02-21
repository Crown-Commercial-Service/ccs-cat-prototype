const ccsZvalidateIncumbentForm = (event) => {
  event.preventDefault();

  let fieldCheck = "",
    errorStore = [];

  fieldCheck = ccsZisOptionChecked( "ccs_incumbent", "Indicate if there is an incumbent supplier");
  if (fieldCheck !== true) {
    errorStore.push(fieldCheck);

  } else {
    ccsZremoveErrorMessage("ccs_incumbent");
  }

  if ($("input[type='radio'][name='ccs_incumbent']:checked").val() === "Yes" && document.getElementById("incumbent_supplier").value.trim().length === 0) {
    errorStore.push(["incumbent_supplier", "Provide the name of the incumbent supplier"])
    ccsZaddErrorMessage(document.getElementById("incumbent_supplier"), "Provide the name of the incumbent supplier");
  } else {
    ccsZremoveErrorMessage("incumbent_supplier");
  }

  if (errorStore.length === 0) document.forms["ccs_incumbent_form"].submit();
  else ccsZPresentErrorSummary(errorStore);
};



