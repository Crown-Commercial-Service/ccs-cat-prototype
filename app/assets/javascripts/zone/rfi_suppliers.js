 document.addEventListener('DOMContentLoaded', () => {

  if (document.getElementById("ccs-rfi-suppliers-form") !== null) {
    let selected_supplier_id = [];
    let checkboxes = document.querySelectorAll('input.govuk-checkboxes__input');
    // if(document.getElementById('rfi_selected_suppliers').value === "" && document.getElementById('rfi_selected_supplier_count').value === "" ) {
        
    //     selected_supplier_id = ['1','2','3','4','5','6','7','8','9','10'
    //     ,'11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
    // }
    // else {
        if(document.getElementById('rfi_selected_suppliers').value !== "") {
         selected_supplier_id = document.getElementById('rfi_selected_suppliers').value.split(',');
         checkboxes.forEach((ch) => {
         if(selected_supplier_id.includes(ch.value,0))
            ch.checked = true;
        });
        } 
        let element =  document.getElementById('added_suppliers_count');
         element.innerText = selected_supplier_id.length;
    //} 
   
    //let add_remove_buttons = document.querySelectorAll('a.add');
    // document.getElementById('page2').classList.add('ccs-dynaform-hidden');
    // document.getElementById('page3').classList.add('ccs-dynaform-hidden');

    // document.getElementById('next-link-page2').addEventListener('click', (e) => {
    //     e.preventDefault();
    //     document.getElementById('page1').classList.add('ccs-dynaform-hidden');
    //     document.getElementById('page2').classList.remove('ccs-dynaform-hidden');
    // });
    // document.getElementById('next-link-page3').addEventListener('click', (e) => {
    //     e.preventDefault();
    //     document.getElementById('page2').classList.add('ccs-dynaform-hidden');
    //     document.getElementById('page3').classList.remove('ccs-dynaform-hidden');
    // });
    
    // document.getElementById('prev-link-page2').addEventListener('click', (e) => {
    //     e.preventDefault();
    //     document.getElementById('page2').classList.add('ccs-dynaform-hidden');
    //     document.getElementById('page1').classList.remove('ccs-dynaform-hidden');
    // });
    // document.getElementById('prev-link-page3').addEventListener('click', (e) => {
    //     e.preventDefault();
    //     document.getElementById('page3').classList.add('ccs-dynaform-hidden');
    //     document.getElementById('page2').classList.remove('ccs-dynaform-hidden');
    // });

    // add_remove_buttons.forEach((button) => {

    //     button.addEventListener('click', (e) => {
    //       e.preventDefault();
    //       let supplier_id = button.href.replace(/^(.+\/)(\d{1,2})$/, "$2");
    //      let button_text = e.target.text;

    //   if(button_text ==='Add') {
    //     if(typeof(selected_supplier_id)== 'string')
    //     {
    //         selected_supplier_id = selected_supplier_id.split(',');
    //     }
    //     selected_supplier_id.push(supplier_id);
    //     document.getElementById('rfi_selected_suppliers').value = selected_supplier_id;
    //     let element =  document.getElementById('added_suppliers_count');
    //      element.innerText = selected_supplier_id.length;
    //      document.getElementById('rfi_selected_supplier_count').value =  selected_supplier_id.length;
    //      e.target.text = 'Remove';
    
    //   } else {
    //     e.target.text = 'Add';
    //     if(typeof(selected_supplier_id)== 'string')
    //     {
    //         selected_supplier_id = selected_supplier_id.split(',');
    //     }
    //     let val = selected_supplier_id.findIndex((supp) => supp === supplier_id);
    //     selected_supplier_id.splice(val, 1);
    //     document.getElementById('rfi_selected_suppliers').value = selected_supplier_id;

    //     let element =  document.getElementById('added_suppliers_count');
    //     element.innerText = selected_supplier_id.length;
    //     document.getElementById('rfi_selected_supplier_count').value = selected_supplier_id.length;
    //       //send ajax call and update page to remove supplier
    //     }
    //     });
    // });

    checkboxes.forEach((ch) => {
        ch.addEventListener('change', (e) => {
          e.preventDefault();
          let supplier_id = ch.value;

        // let button_text = e.target.text;

      if(ch.checked) {
        if(typeof(selected_supplier_id)== 'string')
        {
            selected_supplier_id = selected_supplier_id.split(',');
        }
        selected_supplier_id.push(supplier_id);
        document.getElementById('rfi_selected_suppliers').value = selected_supplier_id;
        let element =  document.getElementById('added_suppliers_count');
         element.innerText = selected_supplier_id.length;
         document.getElementById('rfi_selected_supplier_count').value =  selected_supplier_id.length;    
      } else {
        if(typeof(selected_supplier_id)== 'string')
        {
            selected_supplier_id = selected_supplier_id.split(',');
        }
        let val = selected_supplier_id.findIndex((supp) => supp === supplier_id);
        selected_supplier_id.splice(val, 1);
        document.getElementById('rfi_selected_suppliers').value = selected_supplier_id;

        let element =  document.getElementById('added_suppliers_count');
        element.innerText = selected_supplier_id.length;
        document.getElementById('rfi_selected_supplier_count').value = selected_supplier_id.length;
          //send ajax call and update page to remove supplier
        }
        });
    });

    //Add all logic
    // document.getElementById('add_all').addEventListener('click', (e) => {
    //     e.preventDefault();
    //     if(typeof(selected_supplier_id)== 'string')
    //     {
    //         selected_supplier_id = selected_supplier_id.split(',');
    //     }
    //     selected_supplier_id.splice(0, selected_supplier_id.length);
    //     add_remove_buttons.forEach((button) => {
    //         let supplier_id = button.href.replace(/^(.+\/)(\d{1,2})$/, "$2");
    //         selected_supplier_id.push(supplier_id);
    //         button.text = 'Remove';
    //     });
    //     let element =  document.getElementById('added_suppliers_count');
    //     element.innerText = selected_supplier_id.length ;
    //     document.getElementById('rfi_selected_supplier_count').value = selected_supplier_id.length;
    //     document.getElementById('rfi_selected_suppliers').value = selected_supplier_id;
    // });


    //remove all logic
    // document.getElementById('remove_all').addEventListener('click', (e) => {
    //     e.preventDefault();
    //     if(typeof(selected_supplier_id)== 'string')
    //     {
    //         selected_supplier_id = selected_supplier_id.split(',');
    //     }
    //     selected_supplier_id.splice(0, selected_supplier_id.length);
    //     add_remove_buttons.forEach((button) => {
    //         button.text = 'Add';
    //     });
    
    //     let element =  document.getElementById('added_suppliers_count');
    //     element.innerText = selected_supplier_id.length ;
    //     document.getElementById('rfi_selected_supplier_count').value = selected_supplier_id.length;
    //     document.getElementById('rfi_selected_suppliers').value = selected_supplier_id;
    // });



  }
});
