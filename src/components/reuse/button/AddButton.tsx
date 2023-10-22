import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddButton() {
  const navigate = useNavigate();

  /*추가 버튼 클릭시 new 페이지로 이동 */
  const onClickAddButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("./new");
  };

  return (
    <Button
      sx={{ margin: "0px 10px 5px 0px" }}
      color="primary"
      variant="contained"
      type="button"
      onClick={onClickAddButton}
    >
      추가
    </Button>
  );
}
