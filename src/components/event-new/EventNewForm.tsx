import { Box } from "@mui/material";
import SideBar from "../reuse/sidebar/SideBar";
import EventNew from "./EventNew";

export default function EventNewForm() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <EventNew />
    </Box>
  );
}
