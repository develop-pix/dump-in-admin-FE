import SideBar from "../reuse/sidebar/SideBar";
import Box from "@mui/material/Box";

// 대시보드 페이지
export default function DashBoardForm() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      대시보드 페이지
    </Box>
  );
}
