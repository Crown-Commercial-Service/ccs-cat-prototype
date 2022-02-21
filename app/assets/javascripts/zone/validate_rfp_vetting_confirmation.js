const ccsZvalidateVettingConfirmation = (event) => {
  event.preventDefault();

  let fieldCheck = "",
    errorStore = [];

  fieldCheck = ccsZisOptionChecked( "rfp_radio_security_confirmation", "Indicate if lower security requirement is needed for any of the resources you added");
  if (fieldCheck !== true) {
    errorStore.push(fieldCheck);

  } else {
    ccsZremoveErrorMessage("rfp_radio_security_confirmation");
  }

  if ($("input[type='radio'][name='rfp_radio_security_confirmation']:checked").val() === "Yes" && document.getElementById("rfp_security_confirmation").value.trim().length === 0) {
    errorStore.push(["rfp_security_confirmation", "Provide the number of resources"])
    ccsZaddErrorMessage(document.getElementById("rfp_security_confirmation"), "Provide the number of resources");
  } else {
    ccsZremoveErrorMessage("rfp_security_confirmation");
  }

  if (errorStore.length === 0) document.forms["ccs_rfp_vetting_confirmation_form"].submit();
  else ccsZPresentErrorSummary(errorStore);
};


document.addEventListener('DOMContentLoaded', () => {

  if (document.getElementById("ccs_rfp_vetting_confirmation_form") !== null) {

    if (document.getElementById("rfp_radio_security_confirmation-2").checked ||
      (!document.getElementById("rfp_radio_security_confirmation-2").checked &&
        !document.getElementById("rfp_radio_security_confirmation").checked)) {
      document.getElementById("rfp_security_confirmation").classList.add('ccs-dynaform-hidden');
      document.querySelector('label[for="rfp_security_confirmation"]').classList.add('ccs-dynaform-hidden');
    } else {
      let theParentNode = document.getElementById("rfp_security_confirmation").parentNode;
      theParentNode.classList.add('yes');
      document.getElementById("rfp_security_confirmation").classList.add('yeswho');
      document.querySelector('label[for="rfp_security_confirmation"]').classList.add('yeswho');
    }

    document.querySelectorAll('input[name="rfp_radio_security_confirmation"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        let itemval = event.target.value;


        if (itemval === "Yes" && event.target.checked) {
          document.getElementById("rfp_security_confirmation").classList.remove('ccs-dynaform-hidden');
          document.querySelector('label[for="rfp_security_confirmation"]').classList.remove('ccs-dynaform-hidden');

          event.target.parentNode.classList.add('yes');
          document.getElementById("rfp_security_confirmation").parentNode.classList.add('yeswho');

        } else if (itemval === "No" && event.target.checked){
          document.getElementById("rfp_security_confirmation").classList.add('ccs-dynaform-hidden');
          document.querySelector('label[for="rfp_security_confirmation"]').classList.add('ccs-dynaform-hidden');

          document.getElementById("rfp_radio_security_confirmation").parentNode.classList.remove('yes');
          document.getElementById("rfp_security_confirmation").parentNode.classList.remove('yeswho');

          if (document.getElementById("rfp_security_confirmation-error") !== null) document.getElementById("rfp_security_confirmation-error").classList.add('ccs-dynaform-hidden');
        }


      });
    });
  }
});
