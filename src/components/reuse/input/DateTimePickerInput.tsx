import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePickerInputProps } from "../../../interface/reuse/Input.interface";
import dayjs from "dayjs";

export default function DateTimePickerInput({
  date,
  setDate,
  name,
}: DateTimePickerInputProps) {
  /* 백엔드 요청에따라 Date 또는 string 타입으로 수정 */
  const formatDate = dayjs(date);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        sx={{ width: "350px" }}
        label={name}
        value={formatDate}
        onChange={(newDate) => setDate(dayjs(newDate).toDate())}
        views={["year", "month", "day", "hours", "minutes"]}
        format="YYYY년 MM월 DD일 HH시 mm분"
        ampm={false}
        timeSteps={{ minutes: 1 }}
      />
    </LocalizationProvider>
  );
}
