import SideBar from "../reuse/sidebar/SideBar";
import UserManageTable from "./UserManageTable";
import Box from "@mui/material/Box";

// 유저 관리 페이지
export default function UserManageForm() {
  // 임의의 100개의 사용자 데이터 배열 생성
  const userData = Array.from({ length: 100 }, () => ({
    nickname: "C02",
    email: "jsee53@gmail.com",
    join_date: "2023/10/21",
    review: "1",
    branch: "2",
    event: "3",
    withdrawal_date: "9999/99/99",
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <UserManageTable data={userData} />
    </Box>
  );
}
