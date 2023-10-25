import SideBar from "../reuse/sidebar/SideBar";
import Box from "@mui/material/Box";
import BranchManage from "./BranchManage";

// 포토부스 관리 페이지
export default function BranchManageForm() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <BranchManage />
    </Box>
  );
}
