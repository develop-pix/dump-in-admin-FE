import { Button } from "@mui/material";
import { SubmitButtonProps } from "../../../interface/reuse/Button.interface";

export default function SubmitButton({ value }: SubmitButtonProps) {
  return (
    <Button
      sx={{ margin: "0px 10px 5px 0px" }}
      color="primary"
      variant="contained"
      type="submit"
    >
      {value}
    </Button>
  );
}
