import { Box, Typography, TextField } from "@mui/material";
import { RowFieldInputType } from "../../../interface/reuse/Input.interface";

export default function RowFieldInput({
  label,
  value,
  width,
  row,
  maxLength,
  setInput,
}: RowFieldInputType) {
  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.currentTarget.value);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Typography
        sx={{ width: "130px" }}
        fontSize={18}
        fontWeight={600}
        display="flex"
        alignItems="center"
      >
        {label}
      </Typography>
      <TextField
        sx={{ width: { width } }}
        variant="outlined"
        label={label}
        value={value}
        onChange={onInputChangeHandler}
        multiline
        rows={row}
        inputProps={{ maxLength }}
      />
      {maxLength && (
        <Typography sx={{ marginLeft: "10px" }} variant="body2">
          {value.length}/{maxLength}
        </Typography>
      )}
    </Box>
  );
}
