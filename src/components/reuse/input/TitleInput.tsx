import { Box, InputAdornment, TextField } from "@mui/material";
import { TitleInputProps } from "../../../interface/reuse/Input.interface";

export default function TitleInput({ setInput }: TitleInputProps) {
  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.currentTarget.value);
  };
  return (
    <Box>
      <TextField
        sx={{ width: "40vw" }}
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">Title</InputAdornment>
          ),
        }}
        onChange={onInputChangeHandler}
      />
    </Box>
  );
}
