import SideBar from "../reuse/sidebar/SideBar";
import Box from "@mui/material/Box";
import PushMessage from "./PushMessage";

// 알림 전송 페이지
export default function PushMessageForm() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <PushMessage />
    </Box>
  );
}
