document.addEventListener('DOMContentLoaded', () => {

  if (document.getElementById("eoi_docs_form") !== null) {

  //   if (document.getElementById("eoi_file_upload_1").value.trim().length > 0) {
  //     $('#eoi_additional_link').attr('disabled',true);
  //    // document.getElementById('eoi_additional_link').setAttribute('disabled', 'true'); 
  //   }
  //   else if(document.getElementById("eoi_additional_link").value.length > 0) {
  //     //document.getElementById("").setAttribute(disabled);
  //     $('#eoi_file_upload_1').attr('disabled',true);
  //   }
   }
});


const ccsZvalidateEoiDocs = (event) => {
    event.preventDefault();
  
    let fieldCheck = "",
      errorStore = [];
  
    if (document.getElementById("eoi_file_upload_1").value.length > 0) {
      fieldCheck = ccsZvalidateWithRegex( "eoi_file_upload_1", "Only the following document types are permitted: csv, doc, docx, jpg, kml, ods, odt, pdf, png, ppt, pptx, rdf, rtf, txt, xls, xlsx, xml, zip",/^(\w|\W)+\.(docx?|pdf|csv|jpg|kml|ods|odt|png|ppt|pptx|rdf|rtf|txt|xls|xlsx|xml|zip)$/);
      if (fieldCheck !== true) errorStore.push(fieldCheck);
    }
  
    if (document.getElementById("eoi_additional_link").value.length > 0) {
      fieldCheck = ccsZvalidateWithRegex( "eoi_additional_link", "Please enter a valid link",  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
      if (fieldCheck !== true) errorStore.push(fieldCheck);
    }
  
    if (errorStore.length === 0) document.forms["eoi_docs_form"].submit();
    else ccsZPresentErrorSummary(errorStore);
  };