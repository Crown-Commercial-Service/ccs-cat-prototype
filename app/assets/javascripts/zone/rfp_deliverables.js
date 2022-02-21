document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById("ccs_rfp_deliverables_form") !== null) {
  
      let with_value_count = 6,
        prev_input = 0,
        deleteButtons = document.querySelectorAll("a.del");
  
      for (var text_box_num = 6; text_box_num > 1; text_box_num--) {
  
        let this_box = document.getElementById("rfp_deliverable_" + text_box_num);
  
        if (this_box.value !== "") {
          this_box.classList.remove('ccs-dynaform-hidden');
  
          if (text_box_num === 6) {
            document.getElementById("ccs_rfp_deliverables_add").classList.add('ccs-dynaform-hidden');
          }
  
        } else {
          let the_label = document.querySelector('label[for=rfp_deliverable_' + text_box_num + ']');
          the_label.classList.add('ccs-dynaform-hidden');
          with_value_count = text_box_num;
        }
  
      }
  
      document.getElementById("ccs_rfp_deliverables_add").addEventListener('click', (e) => {
        e.preventDefault();
  
        document.getElementById("rfp_deliverable_" + with_value_count).classList.remove("ccs-dynaform-hidden");
  
        document.querySelector('label[for=rfp_deliverable_' + with_value_count + ']').classList.remove("ccs-dynaform-hidden");
  
        if (with_value_count > 2 ) {
          prev_input = with_value_count - 1;
          document.querySelector('label[for=rfp_deliverable_' + prev_input + '] a.del').classList.add("ccs-dynaform-hidden");
        }
  
        with_value_count++;
  
        if (with_value_count === 6) {
          document.getElementById("ccs_rfp_deliverables_add").classList.add('ccs-dynaform-hidden');
        }
  
      });
  
      // delete buttons
      deleteButtons.forEach((db) => {
        db.addEventListener('click', (e) => {
  
          e.preventDefault();
  
          let target = db.href.replace(/^(.+\/)(\d{1,2})$/, "$2"),
            prev_box = Number(target) - 1;
          document.getElementById('rfp_deliverable_' + target).value = "";
          document.getElementById('rfp_deliverable_' + target).classList.add("ccs-dynaform-hidden");
          //document.getElementById('rfi_question_' + target + '-error').parentNode.removeChild(document.getElementById('rfi_question_' + target + '-error'));
          document.querySelector('label[for=rfp_deliverable_' + target + ']').classList.add("ccs-dynaform-hidden");
  
          if (prev_box > 1) {
            document.querySelector('label[for=rfp_deliverable_' + prev_box + '] a.del').classList.remove("ccs-dynaform-hidden");
          }
          document.getElementById("ccs_rfp_deliverables_add").classList.remove('ccs-dynaform-hidden');
          with_value_count--;
        });
      });
  
    }
  });