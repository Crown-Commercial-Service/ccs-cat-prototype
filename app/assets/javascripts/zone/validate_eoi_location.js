const ccsZvalidateEoiLocation = (event) => {
  event.preventDefault();

  let fieldCheck = "",
    errorStore = [];

  fieldCheck = ccsZisOptionChecked( "required_locations", "Select at least one location");
  if (fieldCheck !== true) errorStore.push(fieldCheck);

  if (errorStore.length === 0) document.forms["ccs_select_location"].submit();
  else ccsZPresentErrorSummary(errorStore);
};

document.addEventListener('DOMContentLoaded', () => {

  if (document.getElementById("ccs_select_location") !== null || document.getElementById("rfi_location")!==null || document.getElementById("eoi_location")!==null || document.getElementById("rfp_location")!==null ) {

    let allCheckbox = document.getElementById("required_locations-14"),
      locationCheckboxes = document.querySelectorAll("input[name='required_locations']");

    if (allCheckbox.checked) {
      locationCheckboxes.forEach((cb) => {

        if (cb.value != 13) cb.disabled = true;

      });
    }

    document.getElementById("required_locations-14").addEventListener('change', () => {
      let allCb = document.getElementById("required_locations-14"),
        locationCheckboxes = document.querySelectorAll("input[name='required_locations']");

      locationCheckboxes.forEach((cb) => {

        if (allCb.checked && cb.value != 13) {
          cb.checked = false;
          cb.disabled = true;
        }

        if (!allCb.checked && cb.value != 13) {
          cb.disabled = false;
        }

      });

    });
  }
});
