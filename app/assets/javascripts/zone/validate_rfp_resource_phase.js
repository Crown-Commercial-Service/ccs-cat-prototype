const ccsZvalidateResourcePhase = (event) => {
    event.preventDefault();
  
    let fieldCheck = "",
      errorStore = [];
  
    fieldCheck = ccsZisOptionChecked( "ccs_rfp_resource_phase", "Select at least one location");
    if (fieldCheck !== true) errorStore.push(fieldCheck);
  
    if (errorStore.length === 0) document.forms["ccs_rfp_resource_phase_form"].submit();
    else ccsZPresentErrorSummary(errorStore);
  };
  
  document.addEventListener('DOMContentLoaded', () => {
  
    if (document.getElementById("ccs_rfp_resource_phase_form") !== null ) {
  
      let allCheckbox = document.getElementById("ccs_rfp_resource_phase-6"),
        locationCheckboxes = document.querySelectorAll("input[name='ccs_rfp_resource_phase']");
  
      if (allCheckbox.checked) {
        locationCheckboxes.forEach((cb) => {
            if (cb.value != 5) cb.disabled = true;
        });
      }
  
      document.getElementById("ccs_rfp_resource_phase-6").addEventListener('change', () => {
        let allCb = document.getElementById("ccs_rfp_resource_phase-6"),
          locationCheckboxes = document.querySelectorAll("input[name='ccs_rfp_resource_phase']");
  
        locationCheckboxes.forEach((cb) => {
  
          if (allCb.checked && cb.value != 5) {
            cb.checked = false;
            cb.disabled = true;
          }
          if (!allCb.checked && cb.value != 5) {
            cb.disabled = false;
          }
          });
      });
    }
  });
  