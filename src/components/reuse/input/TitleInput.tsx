import { Box, TextField } from "@mui/material";
import { TitleInputProps } from "../../../interface/reuse/Input.interface";
import { useState } from "react";

export default function TitleInput({ input, setInput }: TitleInputProps) {
  const [error, setError] = useState<boolean>(false);
  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    /* 30글자가 넘으면 Alert,  */
    if (e.currentTarget.value.length > 30) {
      setError(true);
    } else {
      setError(false);
      setInput(e.currentTarget.value);
    }
  };
  return (
    <Box>
      {error ? (
        <TextField
          sx={{ width: "40vw" }}
          size="small"
          value={input}
          onChange={onInputChangeHandler}
          error
          helperText="최대 30글자 까지 입력 가능합니다."
        />
      ) : (
        <TextField
          sx={{ width: "40vw" }}
          size="small"
          value={input}
          onChange={onInputChangeHandler}
        />
      )}
    </Box>
  );
}
