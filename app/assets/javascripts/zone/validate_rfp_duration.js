document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById("ccs_rfp_duration_form") !== null) {

        const start_day = document.getElementById("rfp_resource_start_date-day"),
        start_month = document.getElementById("rfp_resource_start_date-month"),
        start_year = document.getElementById("rfp_resource_start_date-year");

        const duration_years = document.getElementById('rfp_duration-years'),
        duration_months = document.getElementById('rfp_duration-months'),
        duration_days = document.getElementById('rfp_duration-days');
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
            validateFullDate(start_day, start_month, start_year, "rfp_resource_start_date");
          });
          start_month.addEventListener('keyup', (event) => {
            validateFullDate(start_day, start_month, start_year, "rfp_resource_start_date");
          });
          start_year.addEventListener('keyup', (event) => {
            validateFullDate(start_day, start_month, start_year, "rfp_resource_start_date");
          });

          duration_years.addEventListener('keyup', (event) => {
            validateDurationYears(duration_years, "rfp_duration");
          });
          duration_months.addEventListener('keyup', (event) => {
            validateRFPDateMonth(duration_months, "rfp_duration");
          });
          duration_days.addEventListener('keyup', (event) => {
            validateRFPDateDay(duration_days, "rfp_duration");
          });

    }


    
      const validateRFPDateYear = (start_year, parent_id) => {
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
          } else if(!isValidRFPStartDateForSelectedLot(start_date)){
            ccsZaddErrorMessage(document.getElementById(parent_id), "Start date cannot be after agreement expiry date");
            } else {
            ccsZremoveErrorMessage(document.getElementById(parent_id));
          }
      }
});

// const validateDurationYears = (start_year, parent_id) => {
//     if(start_year.value.trim() == "") return true;
//   if (!start_year.value.match(/^\d\d?$/) || start_year.value > 10 || start_year.value < 0) {
//     start_year.classList.add("govuk-input--error");
//     ccsZaddErrorMessage(document.getElementById(parent_id), "Enter a valid year");
//     return false;
//   } else {
//     start_year.classList.remove("govuk-input--error");
//     ccsZremoveErrorMessage(document.getElementById(parent_id));
//     return true;
//   }
// };

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

const validateRFPDateDay = (start_day, parent_id) => {
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

  const validateRFPDateMonth = (start_month, parent_id) => {
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

function isValidRFPStartDateForSelectedLot(start_date) {
    // $.ajax({
    //     url: "/eoi/isValidEoiStartDateForSelectedLot?date=" + start_date,
    //     async: false,
    //     type: "POST",
    //     contentType: "application/json"
    //   }).done(function (result) {
    //    return result.isValid;      
    //   });
    let val = document.getElementById('agreement-expiry-date').innerHTML;
    if(start_date < new Date(val)) { 
        return true;
    }else {
        return false;
    }
}

const ccsZvalidateRFPStartDate = (event) => {
    event.preventDefault();
  
    let fieldCheck = "",
      errorStore = [];

      const start_day = document.getElementById("rfp_resource_start_date-day"),
      start_month = document.getElementById("rfp_resource_start_date-month"),
      start_year = document.getElementById("rfp_resource_start_date-year");
      let start_date = "";
        start_date = getDate(start_day, start_month, start_year, start_date);
  
        
    fieldCheck = ccsZvalidateThisDate( "rfp_resource_start_date", "Start date must be a valid future date", 1, 0 );
    if (fieldCheck !== true) errorStore.push(fieldCheck);

      fieldCheck = isValidRFPStartDateForSelectedLot(start_date);
      if(fieldCheck !== true) {
        ccsZaddErrorMessage(document.getElementById("rfp_resource_start_date"), "Start date cannot be after agreement expiry date");
          errorStore.push(["rfp_resource_start_date", "Start date cannot be after agreement expiry date"]);
      }
      const duration_years = document.getElementById('rfp_duration-years'),
      duration_months = document.getElementById('rfp_duration-months'),
      duration_days = document.getElementById('rfp_duration-days');
      
      fieldCheck = validateDurationYears(duration_years,'rfp_duration');
      if(fieldCheck !== true)errorStore.push(["rfp_duration", "Enter valid number of years"]);

      fieldCheck = validateRFPDateMonth(duration_months, "rfp_duration");
      if(fieldCheck !== true)errorStore.push(["rfp_duration", "Enter valid number of months between 1 to 11"]);

      fieldCheck = validateRFPDateDay(duration_days,'rfp_duration');
      if(fieldCheck !== true)errorStore.push(["rfp_duration", "Enter valid number of days between 1 to 31"]);

    if (errorStore.length === 0) document.forms["ccs_rfp_duration_form"].submit();
    else ccsZPresentErrorSummary(errorStore);
  };





















// if (document.getElementById("ccs_rfp_duration_form") !== null) {

//     const start_day = document.getElementById("rfp_resource_start_date-day"),
//         start_month = document.getElementById("rfp_resource_start_date-month"),
//         start_year = document.getElementById("rfp_resource_start_date-year"),

//         end_day = document.getElementById("rfp_resource_end_date-day"),
//         end_month = document.getElementById("rfp_resource_end_date-month"),
//         end_year = document.getElementById("rfp_resource_end_date-year");

//     $('resource_duration_summary').hidden = true;

//     duration_div = document.getElementById("resource_duration_summary");
//     duration_string_element = document.getElementById("duration_string");

//     duration_div.classList.add('ccs-dynaform-hidden');

//     // start_day.addEventListener('keyup', (event) => {
//     //   setRfIEndDate(start_day, start_month, start_year, duration_num, duration_units, end_day, end_month, end_year);
//     // });

//     start_day.addEventListener('blur', (event) => {
//         validateRfIDateDay(start_day, "rfp_resource_start_date");
//     });

//     // start_month.addEventListener('keyup', (event) => {
//     //   setRfIEndDate(start_day, start_month, start_year, duration_num, duration_units, end_day, end_month, end_year);
//     // });

//     start_month.addEventListener('blur', (event) => {
//         validateRfIDateMonth(start_month, "rfp_resource_start_date");
//     });

//     // start_year.addEventListener('keyup', (event) => {
//     //   setRfIEndDate(start_day, start_month, start_year, duration_num, duration_units, end_day, end_month, end_year);
//     // });

//     start_year.addEventListener('blur', (event) => {
//         validateRfIDateYear(start_year, "rfp_resource_start_date");
//     });

//     end_day.addEventListener('keyup', (event) => {
//         setRfIDuration(start_day, start_month, start_year, duration_div, duration_string_element, end_day, end_month, end_year);
//     });

//     end_day.addEventListener('blur', (event) => {
//         validateRfIDateDay(end_day, "rfp_resource_end_date");
//     });

//     end_month.addEventListener('keyup', (event) => {
//         setRfIDuration(start_day, start_month, start_year, duration_div, duration_string_element, end_day, end_month, end_year);
//     });

//     end_month.addEventListener('blur', (event) => {
//         validateRfIDateMonth(end_month, "rfp_resource_end_date");
//     });

//     end_year.addEventListener('keyup', (event) => {
//         setRfIDuration(start_day, start_month, start_year, duration_div, duration_string_element, end_day, end_month, end_year);
//     });

//     end_year.addEventListener('blur', (event) => {
//         validateRfIDateYear(end_year, "rfp_resource_end_date");
//     });

// }


// const validateRfIDateDay = (start_day, parent_id) => {

//     if (!start_day.value.match(/^\d\d?$/) || start_day.value > 31 || start_day.value < 1) {
//         start_day.classList.add("govuk-input--error");
//         ccsZaddErrorMessage(document.getElementById(parent_id), "Enter a valid day");
//     } else {
//         start_day.classList.remove("govuk-input--error");
//         ccsZremoveErrorMessage(document.getElementById(parent_id));
//     }
// };

// const validateRfIDateMonth = (start_month, parent_id) => {

//     if (!start_month.value.match(/^\d\d?$/) || start_month.value > 12 || start_month.value < 1) {
//         start_month.classList.add("govuk-input--error");
//         ccsZaddErrorMessage(document.getElementById(parent_id), "Enter a valid month");
//     } else {
//         start_month.classList.remove("govuk-input--error");
//         ccsZremoveErrorMessage(document.getElementById(parent_id));
//     }
// };

// const validateRfIDateYear = (start_year, parent_id) => {

//     if (!start_year.value.match(/^\d{4}$/) || start_year.value > 2121 || start_year.value < 2021) {
//         start_year.classList.add("govuk-input--error");
//         ccsZaddErrorMessage(document.getElementById(parent_id), "Enter a valid year");
//     } else {
//         start_year.classList.remove("govuk-input--error");
//         ccsZremoveErrorMessage(document.getElementById(parent_id));
//     }
// };

// const setRfIDuration = (start_day, start_month, start_year, duration_div, duration_string_element, end_day, end_month, end_year) => {
//     // console.log("setting a duration");
//     // we're only going to do something if we have two complete dates
//     duration_div.classList.remove('css-dynaform-hidden');
//     $('resource_duration_summary').hidden = false;
//     if (end_day.value.match(/^\d\d?$/) &&
//         end_month.value.match(/^\d\d?$/) &&
//         end_year.value.match(/^\d{4}$/) &&
//         start_day.value.match(/^\d\d?$/) &&
//         start_month.value.match(/^\d\d?$/) &&
//         start_year.value.match(/^\d{4}$/)) {

//         //console.log("get months");
//         let end_day_str = end_day.value,
//             end_month_str = end_month.value,
//             start_day_str = start_day.value,
//             start_month_str = start_month.value,
//             duration_millis = 0,
//             days_rem = 0,
//             weeks_rem = 0,
//             months_rem = 0;

//         if (end_day_str < 10 && !end_day_str.match(/^0\d$/)) end_day_str = "0" + end_day_str;
//         if (end_month_str < 10 && !end_month_str.match(/^0\d$/)) end_month_str = "0" + end_month_str;
//         if (start_day_str < 10 && !start_day_str.match(/^0\d$/)) start_day_str = "0" + start_day_str;
//         if (start_month_str < 10 && !start_month_str.match(/^0\d$/)) start_month_str = "0" + start_month_str;

//         const end_date = new Date(end_year.value + "-" + end_month_str + "-" + end_day_str + "T11:00:00").getTime(),
//             start_date = new Date(start_year.value + "-" + start_month_str + "-" + start_day_str + "T11:00:00").getTime();

//         if (Number.isNaN(end_date) && Number.isNaN(start_date)) {
//             ccsZaddErrorMessage(document.getElementById("rfp_resource_end_date"), "Enter a valid date");
//             ccsZaddErrorMessage(document.getElementById("rfp_resource_start_date"), "Enter a valid date");
//             duration_div.classList.add('css-dynaform-hidden');
//         } else if (Number.isNaN(start_date)) {
//             ccsZaddErrorMessage(document.getElementById("rfp_resource_start_date"), "Enter a valid date");
//             duration_div.classList.add('css-dynaform-hidden');
//         } else if (Number.isNaN(end_date)) {
//             ccsZaddErrorMessage(document.getElementById("rfp_resource_end_date"), "Enter a valid date");
//             duration_div.classList.add('css-dynaform-hidden');
//         } else {
//             ccsZremoveErrorMessage(document.getElementById("rfp_resource_start_date"));
//             ccsZremoveErrorMessage(document.getElementById("rfp_resource_end_date"));
//             duration_div.classList.remove('ccs-dynaform-hidden');

//             let durationStr = dateDiffInString(new Date(start_date), new Date(end_date));
//             duration_string_element.innerText = durationStr;
//         }
//     }
// };


// function dateDiffInString(dt1, dt2) {
//     let ret = { days: 0, months: 0, years: 0 };
//     if (dt1 == dt2) return ret;
//     if (dt1 > dt2) {
//         var dtmp = dt2;
//         dt2 = dt1;
//         dt1 = dtmp;
//     }

//     let year1 = dt1.getFullYear();
//     let year2 = dt2.getFullYear();

//     let month1 = dt1.getMonth();
//     let month2 = dt2.getMonth();

//     let day1 = dt1.getDate();
//     let day2 = dt2.getDate();

//     /*
//      * Set initial values bearing in mind the months or days may be negative
//      */

//     ret.years = year2 - year1;
//     ret.months = month2 - month1;
//     ret.days = day2 - day1;

//     /*
//      * Now we deal with the negatives
//      */

//     /*
//      * First if the day difference is negative
//      * eg dt2 = 13 oct, dt1 = 25 sept
//      */
//     if (ret['days'] < 0) {
//         /*
//          * Use temporary dates to get the number of days remaining in the month
//          */
//         var dtmp1 = new Date(dt1.getFullYear(), dt1.getMonth() + 1, 1, 0, 0, -1);
//         var numDays = dtmp1.getDate();
//         ret['months'] -= 1;
//         ret['days'] += numDays;
//     }

//     /*
//      * Now if the month difference is negative
//      */
//     if (ret['months'] < 0) {
//         ret['months'] += 12;
//         ret['years'] -= 1;
//     }

//     let durationStr = "";
//     if (ret.years >= 1) {
//         if (ret.years === 1)
//             durationStr += ret.years + " year";
//         else
//             durationStr += ret.years + " years";
//     }
//     if (ret.months >= 1) {
//         if (durationStr.trim() !== "") {
//             durationStr += ", ";
//         }
//         if(ret.months === 1 ) {
//             durationStr += ret.months + " month"
//         }
//         else {
//             durationStr += ret.months + " months";
//         }
//     }
//     if (ret.days >= 1) {
//         if (durationStr.trim() !== "") {
//             durationStr += ", " ;
//         } 
//         if(ret.days === 1) {
//             durationStr += ret.days + " day";
//         }
//         else {
//             durationStr += ret.days + " days";
//         }
//     }
//     return durationStr;
// };
