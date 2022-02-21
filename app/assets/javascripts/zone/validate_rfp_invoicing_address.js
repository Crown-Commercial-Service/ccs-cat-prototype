const ccsZvalidateLegalAddress = (event) => {
  event.preventDefault();

  let fieldCheck = "",
    errorStore = [],
    addyLineOne = document.getElementById("rfp_invoice_address-line-1").value,
    addyTown = document.getElementById("rfp_invoice_address-town").value,
    addyPostCode = document.getElementById("rfp_invoice_address-postcode").value;

  if (addyLineOne !== "" || addyTown !== "" || addyPostCode !== "") {

    fieldCheck = ccsZvalidateWithRegex( "rfp_invoice_address-line-1", "Specify the building and street", /^.+$/ );
    if (fieldCheck !== true) errorStore.push(fieldCheck);

    fieldCheck = ccsZvalidateWithRegex( "rfp_invoice_address-town", "Specify the town or city", /^[A-Z|a-z| ]+$/ );
    if (fieldCheck !== true) errorStore.push(fieldCheck);

    fieldCheck = ccsZvalidateWithRegex( "rfp_invoice_address-postcode", "Enter a valid postcode", /A([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})$/ );
    if (fieldCheck !== true) errorStore.push(fieldCheck);

  }

  if (errorStore.length === 0) document.forms["ccs_rfp_address_manual_form"].submit();
  else ccsZPresentErrorSummary(errorStore);
};
