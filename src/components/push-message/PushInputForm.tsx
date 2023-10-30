import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { customColors } from "../../styles/base/Variable.style";
import DateTimePickerInput from "../reuse/input/DateTimePickerInput";
import { useState } from "react";
import { PushInputFormProps } from "../../interface/PushMessage.interface";
import RowFieldInput from "../reuse/input/RowFieldInput";

export default function PushInputForm({
  title,
  setTitle,
  description,
  setDescription,
  screenData,
  setScreenData,
  reservationDate,
  setReservationDate,
}: PushInputFormProps) {
  const [isDatePickerEnabled, setDatePickerEnabled] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDatePickerEnabled(event.target.checked);
    // 체크박스가 해제되면 reservationDate를 현재 시간으로 초기화 -> 현재시간일 경우 서버로 null 값을 보냄
    if (!event.target.checked) {
      setReservationDate(new Date());
    }
  };

  return (
    <Box
      sx={{
        width: "auto",
        display: "inline-block",
        overflow: "hidden",
        border: `2px solid ${customColors.sub_pink}`,
        borderRadius: "0px 10px 10px 10px",
        minWidth: "50vw",
      }}
    >
      <Box
        sx={{
          margin: "50px 20px 50px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "70px",
        }}
      >
        <RowFieldInput
          label="제목"
          value={title}
          width="90%"
          row={3}
          maxLength={100}
          setInput={setTitle}
        />
        <RowFieldInput
          label="내용"
          value={description}
          width="90%"
          row={6}
          maxLength={300}
          setInput={setDescription}
        />
        <RowFieldInput
          label="스크린정보"
          value={screenData}
          width="70%"
          row={2}
          maxLength={null}
          setInput={setScreenData}
        />

        <Box sx={{ display: "flex", gap: "20px" }}>
          <FormControlLabel
            label="예약발송"
            control={
              <Checkbox
                checked={isDatePickerEnabled}
                onChange={handleCheckboxChange}
              />
            }
          />
          {isDatePickerEnabled && (
            <DateTimePickerInput
              date={reservationDate}
              setDate={setReservationDate}
              name={"예약 발송일"}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}
