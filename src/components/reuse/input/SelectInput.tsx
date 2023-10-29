import { Box, MenuItem, TextField } from "@mui/material";
import React from "react";
import { SelectInputProps } from "../../../interface/reuse/Input.interface";

export default function SelectInput({ data, setInput }: SelectInputProps) {
  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <Box>
      <TextField
        sx={{ width: "15vw" }}
        select
        size="small"
        onChange={onInputChangeHandler}
        defaultValue={data[0].value}
      >
        {data.map((option) => {
          return (
            <MenuItem key={option.photoboothId} value={option.value}>
              {option.value}
            </MenuItem>
          );
        })}
      </TextField>
    </Box>
  );
}
