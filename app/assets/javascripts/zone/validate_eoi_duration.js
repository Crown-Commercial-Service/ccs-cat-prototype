document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById("ccs_eoi_duration") !== null) {

        const start_day = document.getElementById("eoi_resource_start_date-day"),
        start_month = document.getElementById("eoi_resource_start_date-month"),
        start_year = document.getElementById("eoi_resource_start_date-year");

        const duration_years = document.getElementById('eoi_duration-years'),
        duration_months = document.getElementById('eoi_duration-months'),
        duration_days = document.getElementById('eoi_duration-days');
        // start_day.addEventListener('blur', (event) => {
        //     //validateEoIDateDay(start_day, "eoi_resource_start_date");
        //     validateFullDate(start_day, start_month, start_year, "eoi_resource_start_date");

        //   });
        //   start_month.addEventListener('blur', (event) => {
        //     //validateEoIDateMonth(start_month, "eoi_resource_start_date");
        //    validateFullDate(start_day, start_month, start_year, "eoi_resource_start_date");

        //   });
        //   start_year.addEventListener('blur', (event) => {
        //   validateFullDate(start_day, start_month, start_year, "eoi_resource_start_date");
        //   //  validateEoIDateYear(start_year, "eoi_resource_start_date")
        //   });
          start_day.addEventListener('keyup', (event) => {
            validateFullDate(start_day, start_month, start_year, "eoi_resource_start_date");
          });
          start_month.addEventListener('keyup', (event) => {
            validateFullDate(start_day, start_month, start_year, "eoi_resource_start_date");
          });
          start_year.addEventListener('keyup', (event) => {
            validateFullDate(start_day, start_month, start_year, "eoi_resource_start_date");
          });

          duration_years.addEventListener('keyup', (event) => {
            validateDurationYears(duration_years, "eoi_duration");
          });
          duration_months.addEventListener('keyup', (event) => {
            validateEoIDateMonth(duration_months, "eoi_duration");
          });
          duration_days.addEventListener('keyup', (event) => {
            validateEoIDateDay(duration_days, "eoi_duration");
          });

    }


    
      const validateEoIDateYear = (start_year, parent_id) => {
        if (!start_year.value.match(/^\d{4}$/) || start_year.value > 2025 || start_year.value < 2021) {
          start_year.classList.add("govuk-input--error");
          ccsZaddErrorMessage(document.getElementById(parent_id), "Enter a valid year");
        } else {
          start_year.classList.remove("govuk-input--error");
          ccsZremoveErrorMessage(document.getElementById(parent_id));
        }
      };

    const validateFullDate = (start_day, start_month, start_year, parent_id) => {
        let start_date = "";

        start_date = getDate(start_day, start_month, start_year, start_date);
          if (Number.isNaN(start_date)) {
            ccsZaddErrorMessage(document.getElementById(parent_id), "Enter a valid date");
          } else if(!isValidEoiStartDateForSelectedLot(start_date)){
            ccsZaddErrorMessage(document.getElementById(parent_id), "Start date cannot be after agreement expiry date");
            } else {
            ccsZremoveErrorMessage(document.getElementById(parent_id));
          }
      }
});

const validateDurationYears = (start_year, parent_id) => {
    if(start_year.value.trim() == "") return true;
  if (!start_year.value.match(/^\d\d?$/) || start_year.value > 10 || start_year.value < 0) {
    start_year.classList.add("govuk-input--error");
    ccsZaddErrorMessage(document.getElementById(parent_id), "Enter a valid year");
    return false;
  } else {
    start_year.classList.remove("govuk-input--error");
    ccsZremoveErrorMessage(document.getElementById(parent_id));
    return true;
  }
};

function getDate(start_day, start_month, start_year, start_date) {
    if (start_day.value.match(/^\d\d?$/) &&
        start_month.value.match(/^\d\d?$/) &&
        start_year.value.match(/^\d{4}$/)) {
        let start_day_str = start_day.value, start_month_str = start_month.value;

        if (start_day_str < 10 && !start_day_str.match(/^0\d$/))
            start_day_str = "0" + start_day_str;
        if (start_month_str < 10 && !start_month_str.match(/^0\d$/))
            start_month_str = "0" + start_month_str;
        start_date = new Date(start_year.value + "-" + start_month_str + "-" + start_day_str + "T11:00:00").getTime();
    }
    return start_date;
}

const validateEoIDateDay = (start_day, parent_id) => {
    if(start_day.value.trim() == "") return true;

    if (!start_day.value.match(/^\d\d?$/) || start_day.value > 31 || start_day.value < 1) {
      start_day.classList.add("govuk-input--error");
      ccsZaddErrorMessage(document.getElementById(parent_id), "Enter valid number of days between 1 to 31");
        return false;
    } else {
      start_day.classList.remove("govuk-input--error");
      ccsZremoveErrorMessage(document.getElementById(parent_id));
      return true;
    }
  };

  const validateEoIDateMonth = (start_month, parent_id) => {
    if(start_month.value.trim() == "") return true;
    if (!start_month.value.match(/^\d\d?$/) || start_month.value > 11 || start_month.value < 1) {
      start_month.classList.add("govuk-input--error");
      ccsZaddErrorMessage(document.getElementById(parent_id), "Enter valid number of months between 1 to 11");
      return false;

    } else {
      start_month.classList.remove("govuk-input--error");
      ccsZremoveErrorMessage(document.getElementById(parent_id));
      return true;

    }
  };

function isValidEoiStartDateForSelectedLot(start_date) {
    // $.ajax({
    //     url: "/eoi/isValidEoiStartDateForSelectedLot?date=" + start_date,
    //     async: false,
    //     type: "POST",
    //     contentType: "application/json"
    //   }).done(function (result) {
    //    return result.isValid;      
    //   });
    if(start_date < new Date('23,August,2025')) { // This will only work in prototype for MCF-3 lot 1 for enabling this page for other agreements need to add hidden field in the page to read lot endDate
        return true;
    }else {
        return false;
    }
}

const ccsZvalidateEoiStartDate = (event) => {
    event.preventDefault();
  
    let fieldCheck = "",
      errorStore = [];

      const start_day = document.getElementById("eoi_resource_start_date-day"),
      start_month = document.getElementById("eoi_resource_start_date-month"),
      start_year = document.getElementById("eoi_resource_start_date-year");
      let start_date = "";
        start_date = getDate(start_day, start_month, start_year, start_date);
  
        
    fieldCheck = ccsZvalidateThisDate( "eoi_resource_start_date", "Start date must be a valid future date", 1, 0 );
    if (fieldCheck !== true) errorStore.push(fieldCheck);

      fieldCheck = isValidEoiStartDateForSelectedLot(start_date);
      if(fieldCheck !== true) {
        ccsZaddErrorMessage(document.getElementById("eoi_resource_start_date"), "Start date cannot be after agreement expiry date");
          errorStore.push(["eoi_resource_start_date", "Start date cannot be after agreement expiry date"]);
      }
      const duration_years = document.getElementById('eoi_duration-years'),
      duration_months = document.getElementById('eoi_duration-months'),
      duration_days = document.getElementById('eoi_duration-days');
      
      fieldCheck = validateDurationYears(duration_years,'eoi_duration');
      if(fieldCheck !== true)errorStore.push(["eoi_duration", "Enter valid number of years"]);

      fieldCheck = validateEoIDateMonth(duration_months, "eoi_duration");
      if(fieldCheck !== true)errorStore.push(["eoi_duration", "Enter valid number of months between 1 to 11"]);

      fieldCheck = validateEoIDateDay(duration_days,'eoi_duration');
      if(fieldCheck !== true)errorStore.push(["eoi_duration", "Enter valid number of days between 1 to 31"]);

    if (errorStore.length === 0) document.forms["ccs_eoi_duration"].submit();
    else ccsZPresentErrorSummary(errorStore);
  };