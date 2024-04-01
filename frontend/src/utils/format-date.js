export const formatDate = (dateString) => {
  if(!dateString) {
    return ""
  }
  const date = new Date(dateString);
  const yyyy = date.getFullYear();
  let mm = date.toLocaleString("default", { month: "short" });
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  const formattedDate = dd + " " + mm + " " + yyyy;
  return formattedDate;
};
export const formatDateToISO = (dateString ) => {
  if (!dateString) {
    return "";
  }
  const date = new Date(dateString);
  return date.toISOString().substr(0, 10);
}  