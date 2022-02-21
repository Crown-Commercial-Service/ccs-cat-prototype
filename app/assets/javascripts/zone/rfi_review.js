document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById("ccs_rfi_publish_form") !== null) {
    
          let saveButton = document.getElementById("rfi_btn_publish_now");
                saveButton.disabled = true;
                saveButton.setAttribute('aria-disabled', true);
                saveButton.classList.add("govuk-button--disabled");
        document.getElementById('rfi_publish_confirmation').addEventListener('change', (e) => {
            if (e.currentTarget.checked) {
                let saveButton = document.getElementById("rfi_btn_publish_now");
                saveButton.disabled = false;
                saveButton.setAttribute('aria-disabled', false);
                saveButton.classList.remove("govuk-button--disabled");
            }
            else {
                let saveButton = document.getElementById("rfi_btn_publish_now");
                saveButton.disabled = true;
                saveButton.setAttribute('aria-disabled', true);
                saveButton.classList.add("govuk-button--disabled");
            }

        });
    
    }
});