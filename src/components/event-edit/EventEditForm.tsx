import { Box } from "@mui/material";
import SideBar from "../reuse/sidebar/SideBar";
import EventEdit from "./EventEdit";

export default function EventEditForm() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <EventEdit />
    </Box>
  );
}
