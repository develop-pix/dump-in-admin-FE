import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { EditButtonProps } from "../../../interface/reuse/Button.interface";

export default function EditButton({ value }: EditButtonProps) {
  const navigate = useNavigate();

  /* 편집 버튼 클릭시 edit/:id 페이지로 이동 */
  const onClickEditButton = (
    e: React.MouseEvent<HTMLButtonElement>,
    value: string
  ) => {
    e.preventDefault();
    navigate(`./edit/${value}`);
  };

  return (
    <Button
      size="small"
      variant="contained"
      onClick={(e) => onClickEditButton(e, value)}
      color="success"
    >
      편집
    </Button>
  );
}
