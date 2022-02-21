document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById("ccs_eoi_terms_form") !== null) {
  
      let with_value_count = 5,
        prev_input = 0,
        deleteButtons = document.querySelectorAll("a.del");
  
      for (var acronym_fieldset = 5; acronym_fieldset > 1; acronym_fieldset--) {
  
  
        let this_fieldset = document.querySelector(".acronym_" + acronym_fieldset),
          term_box = document.getElementById("eoi_term_" + acronym_fieldset);
  
        if (term_box.value !== "") {
          this_fieldset.classList.remove('ccs-dynaform-hidden');
  
          if (acronym_fieldset === 5) {
            document.getElementById("ccs_specialTerm_add").classList.add('ccs-dynaform-hidden');
          }
  
        } else {
  
          this_fieldset.classList.add('ccs-dynaform-hidden');
          with_value_count = acronym_fieldset;
        }
  
      }
  
      document.getElementById("ccs_specialTerm_add").addEventListener('click', (e) => {
        e.preventDefault();
  
        document.querySelector(".acronym_" + with_value_count).classList.remove("ccs-dynaform-hidden");
  
        if (with_value_count > 2 ) {
          prev_input = with_value_count - 1;
          document.querySelector(".acronym_"  + prev_input + " a.del").classList.add("ccs-dynaform-hidden");
        }
  
        with_value_count++;
  
        if (with_value_count === 6) {
          document.getElementById("ccs_specialTerm_add").classList.add('ccs-dynaform-hidden');
        }
  
      });
  
      // delete buttons
      deleteButtons.forEach((db) => {
        db.addEventListener('click', (e) => {
  
          e.preventDefault();
  
          let target = db.href.replace(/^(.+\/)(\d{1,2})$/, "$2"),
            prev_coll = Number(target) - 1,
            target_fieldset = db.closest("fieldset");
  
          target_fieldset.classList.add("ccs-dynaform-hidden");
  
          document.getElementById('eoi_term_' + target).value = "";
          document.getElementById('eoi_condition_' + target).value = "";
         
  
          if (prev_coll > 1) {
            document.querySelector('.acronym_' + prev_coll + ' a.del').classList.remove("ccs-dynaform-hidden");
          }
  
          document.getElementById("ccs_specialTerm_add").classList.remove('ccs-dynaform-hidden');
          with_value_count--;
        });
      });
  
    }
  
  });
  
  const ccsZvalidateEoiTermsForm = (event) => {
    event.preventDefault();
  
    let fieldCheck = "",
      errorStore = [],
      longNum = ["0", "1", "2", "3", "4", "5"];
  
    for (var x = 1; x < 6; x++) {
      let term_field = document.getElementById('eoi_term_' + x);
      let definition_field = document.getElementById("eoi_condition_" + x);
     ccsZremoveErrorMessage(term_field);
     ccsZremoveErrorMessage(definition_field);
      // console.log(name_field.classList.value);
  
      if (term_field.closest("fieldset").classList.value.indexOf("ccs-dynaform-hidden") === -1) {

        if(term_field.value.length > 100 ) {
            ccsZaddErrorMessage(term_field, 'Term and condition title ' + x + ' must be 100 characters or fewer');      
            fieldCheck = [term_field.id, 'Term and condition title ' + x + ' must be 100 characters or fewer'];
            errorStore.push(fieldCheck);
        }

        if(definition_field.value.length > 1000 ) {
            ccsZaddErrorMessage(definition_field, 'Term and condition description ' + x + ' must be 1000 characters or fewer');      
            fieldCheck = [definition_field.id, 'Term and condition description ' + x + ' must be 1000 characters or fewer'];
            errorStore.push(fieldCheck);
        }

        if(term_field.value.trim() !== '' && definition_field.value.trim() === ''){
            ccsZaddErrorMessage(definition_field, 'Please provide description for the term and condition title ' + x);      
            fieldCheck = [definition_field.id, 'Please provide description for the term and condition title' + x];
            errorStore.push(fieldCheck);
        }
        if(term_field.value.trim() === '' && definition_field.value.trim() !== ''){
            ccsZaddErrorMessage(term_field, 'Please provide a term and condition title for description ' + x);      
            fieldCheck = [term_field.id, 'Please provide a term and condition title for description ' + x];
            errorStore.push(fieldCheck);
        }
      }
    }
  
    if (errorStore.length === 0) document.forms["ccs_eoi_terms_form"].submit();
    else ccsZPresentErrorSummary(errorStore);
  
  };
  