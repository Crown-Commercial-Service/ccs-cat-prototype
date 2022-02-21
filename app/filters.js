module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  filters.ccsURLEncode = (theString) => {
    return encodeURI(theString);
  };

  filters.ccsDecode = (theString) => {
    return decodeURI(theString);
  };

  filters.friendlyDate = (dateString, addTime, hours) => {

    if (dateString.match(/^\d\d\/\d\d\/\d\d\d\d$/)) {

      return dateString;

    } else if (dateString.match(/^\d\d\d\d\-\d\d\-\d\d$/)) {

      let dateParts = dateString.split("-");
      return dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0];

    } else if (Date.parse(dateString) !== NaN) {

      let targetDate = new Date(dateString);

      let timeString = "";

      if (addTime) {

        let target_hour = targetDate.getHours();
        let target_mins = targetDate.getMinutes();

        if (hours == 12) {
          let meridiem = "am";
          if (target_hour > 11) meridiem = "pm";
          if (target_hour > 12) target_hour = target_hour - 12;
          if (target_mins < 10) target_mins = "0" + target_mins;

          timeString = ", " + target_hour + ":" + target_mins + meridiem;
        } else {
          if (target_hour < 10) target_hour = "0" + target_hour;
          if (target_mins < 10) target_mins = "0" + target_mins;

          timeString = ", " + target_hour + ":" + target_mins + "hrs";
        }
      }

      return targetDate.getDate() + "/" + months[targetDate.getMonth() - 1] + "/" + targetDate.getFullYear() + timeString;

    } else {
      return "Not a valid date";
    }

  };

  filters.getALongMonth = (monthNo) => {
    let monthNames = ["Null", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[Number(monthNo)];
  };

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
