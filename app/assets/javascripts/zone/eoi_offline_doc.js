document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById("ccs_eoi_offline_doc") !== null) {
    
          let saveButton = document.getElementById("eoi_btn_publish_doc_now");
                saveButton.disabled = true;
                saveButton.setAttribute('aria-disabled', true);
                saveButton.classList.add("govuk-button--disabled");
        document.getElementById('eoi_publish_doc_confirmation').addEventListener('change', (e) => {
            if (e.currentTarget.checked) {
                let saveButton = document.getElementById("eoi_btn_publish_doc_now");
                saveButton.disabled = false;
                saveButton.setAttribute('aria-disabled', false);
                saveButton.classList.remove("govuk-button--disabled");
            }
            else {
                let saveButton = document.getElementById("eoi_btn_publish_doc_now");
                saveButton.disabled = true;
                saveButton.setAttribute('aria-disabled', true);
                saveButton.classList.add("govuk-button--disabled");
            }

        });
    
    }
});