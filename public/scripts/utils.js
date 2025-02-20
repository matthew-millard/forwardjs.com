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
