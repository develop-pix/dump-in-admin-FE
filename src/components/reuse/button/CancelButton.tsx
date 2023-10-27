import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CancelButton() {
  const navigate = useNavigate();

  /* 취소 버튼 클릭시  페이지로 이동 */
  const onClickEditButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <Button
      sx={{ margin: "0px 10px 5px 0px" }}
      size="small"
      variant="contained"
      onClick={onClickEditButton}
      color="error"
    >
      취소
    </Button>
  );
}
