import { TextField } from "@mui/material";
import { LongInputType } from "../../../interface/reuse/Input.interface";

export default function LongInput({
  label,
  type,
  placeholder,
  autocomplete,
  setInput,
}: LongInputType) {
  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.currentTarget.value);
  };
  return (
    <div>
      <TextField
        label={label}
        type={type}
        placeholder={placeholder}
        autoComplete={autocomplete}
        size="medium"
        margin="dense"
        fullWidth
        onChange={onInputChangeHandler}
      />
    </div>
  );
}
