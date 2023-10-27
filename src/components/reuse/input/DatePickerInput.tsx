import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DatePickerInputProps } from "../../../interface/reuse/Input.interface";
import dayjs from "dayjs";

export default function DatePickerInput({
  date,
  setDate,
  name,
}: DatePickerInputProps) {
  /* 백엔드 요청에따라 Date 또는 string 타입으로 수정 */
  const formatDate = dayjs(date);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        format="YYYY년 MM월 DD일"
        label={name}
        value={formatDate}
        onChange={(newDate) => setDate(dayjs(newDate).toDate())}
      />
    </LocalizationProvider>
  );
}
