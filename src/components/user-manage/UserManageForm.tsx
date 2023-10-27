import SideBar from "../reuse/sidebar/SideBar";
import Box from "@mui/material/Box";
import UserManage from "./UserManage";

// 유저 관리 페이지
export default function UserManageForm() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <UserManage />
    </Box>
  );
}
