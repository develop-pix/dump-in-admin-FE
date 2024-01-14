/**
 *
 * @param dateString ISO 8601 날짜, ex: "2023-12-29T15:00:00.000Z"
 * @returns 2023-12-29 형식으로 변경
 */
export function formatDate(dateString: string) {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(dateString)) {
    throw new Error("Invalid ISO 8601 date format");
  }
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
