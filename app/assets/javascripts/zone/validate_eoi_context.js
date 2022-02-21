const ccsZvalidateEoiContext = (event) => {
  event.preventDefault();

  let fieldCheck = "",
    errorStore = [];

  fieldCheck = ccsZvalidateTextArea("eoi_prob_statement", "Describe the problem you are aiming to solve");
  if (fieldCheck !== true) errorStore.push(fieldCheck);

  if (errorStore.length === 0) document.forms["ccs_eoi_about_proj"].submit();
  else ccsZPresentErrorSummary(errorStore);
};
