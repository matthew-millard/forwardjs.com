// export function createGoogleMapsLink(address) {
//   const baseURL = "https://www.google.com/maps/search/";
//   const url = new URL(baseURL);
//   const params = new URLSearchParams();
//   params.set("q", address);
//   url.search = params.toString();

//   return url.href;
// }

export function formatDateTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  // only include the year if it's not the current year
  if (dateTime.getFullYear() !== currentYear) {
    options.year = "numeric";
  }

  return dateTime.toLocaleString("en-US", options);
}
