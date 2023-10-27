import SideBar from "../reuse/sidebar/SideBar";
import Box from "@mui/material/Box";
import ReviewManage from "./ReviewManage";

// 리뷰 관리 페이지
export default function ReviewManageForm() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <ReviewManage />
    </Box>
  );
}
