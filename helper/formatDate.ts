export const formatDateToMonthYear = (dateString: string): string => {
  const dateObj = new Date(dateString);

  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObj.getFullYear().toString();

  return `${month}.${year}`;
};
