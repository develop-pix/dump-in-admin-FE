import SideBar from "../reuse/sidebar/SideBar";
import Box from "@mui/material/Box";
import PhotoboothManage from "./PhotoboothManage";

// 포토부스 관리 페이지
export default function PhotoboothManageForm() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <PhotoboothManage />
    </Box>
  );
}
