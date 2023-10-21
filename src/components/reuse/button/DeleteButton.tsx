import { Button } from "@mui/material";
import { DeleteButtonProps } from "../../../interface/reuse/Button.interface";
import DeleteModal from "../modal/DeleteModal";
import { useState } from "react";

export default function DeleteButton({ value }: DeleteButtonProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  /* 삭제 버튼 클릭시 Modal Open */
  const onClickDeleteButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <>
      <Button
        size="small"
        variant="contained"
        onClick={onClickDeleteButton}
        color="error"
      >
        삭제
      </Button>
      <DeleteModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        value={value}
      />
    </>
  );
}
