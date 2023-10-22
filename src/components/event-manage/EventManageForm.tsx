import SideBar from "../reuse/sidebar/SideBar";
import Box from "@mui/material/Box";
import EventManage from "./EventManage";

export default function EventManageForm() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <EventManage />
    </Box>
  );
}
