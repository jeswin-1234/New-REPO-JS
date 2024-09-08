export function getTimeZone(date = new Date()) {
    var timezoneOffset = date.getTimezoneOffset();
    var sign = timezoneOffset < 0 ? "+" : "-";
    var minutes = Math.abs(timezoneOffset);
    var hours = Math.floor(minutes / 60);
    minutes = minutes - 60 * hours;
    return sign + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
  }
  
  export const getTimeZoneAsString = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  };