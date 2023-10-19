import SideBar from "../reuse/sidebar/SideBar";
import Box from "@mui/material/Box";

// 이벤트 관리 페이지
export default function EventManageForm() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      이벤트 관리 페이지
    </Box>
  );
}
