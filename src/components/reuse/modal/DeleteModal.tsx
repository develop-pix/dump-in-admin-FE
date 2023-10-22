import { Box, Button, Modal, Typography } from "@mui/material";
import { DeleteModalProps } from "../../../interface/reuse/Modal.interface";
import { DeleteModalStyle } from "../../../styles/reuse/Modal.style";
import CloseIcon from "@mui/icons-material/Close";
import { customColors } from "../../../styles/base/Variable.style";
import { useLocation } from "react-router-dom";

export default function DeleteModal({
  modalOpen,
  setModalOpen,
  value,
}: DeleteModalProps) {
  const manage = useLocation().pathname.slice(1);

  /* Modal 닫기 */
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalOpen(false);
  };

  /* 글 삭제 API 호출 */
  const onClickDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // let delete_result = await 삭제API();
    console.log("삭제버튼 클릭 ID:" + manage + value);
    setModalOpen(false);
  };

  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <Box sx={DeleteModalStyle}>
        <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button
            variant="text"
            sx={{
              color: `${customColors.black}`,
              ":hover": {
                bgcolor: "transparent",
                color: `${customColors.black}`,
              },
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </Button>
        </Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          삭제하시겠습니까?
        </Typography>
        <Typography id="modal-modal-description">
          삭제한 내용은 다시 되돌릴수 없습니다.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            flexDirection: "row-reverse",
            marginTop: "20px",
          }}
        >
          <Button
            type="button"
            variant="contained"
            color="error"
            onClick={onClickDelete}
          >
            삭제
          </Button>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleClose}
          >
            취소
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
