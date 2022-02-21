const ccsZValidateSuppliersForm = (event) => {
    event.preventDefault();
    
  let fieldCheck = "",
  errorStore = [];

  let checked = $("input[type=checkbox]:checked").length;

  if(!checked) {
    ccsZaddErrorMessage(document.getElementById("rfi_required_suppliers"), "Select at least one supplier");
    fieldCheck = ["rfi_required_suppliers", "Select at least one supplier"];
  } else {
    ccsZremoveErrorMessage(document.getElementById("rfi_required_suppliers"));
    fieldCheck = true;
  }
  
  //fieldCheck = ccsZisOptionChecked( "rfi_required_suppliers", "Select at least one supplier");
  if (fieldCheck !== true) errorStore.push(fieldCheck);

  if (errorStore.length === 0) document.forms["ccs-rfi-suppliers-form"].submit();
  else ccsZPresentErrorSummary(errorStore);

}