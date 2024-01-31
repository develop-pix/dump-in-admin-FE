import { Box } from "@mui/material";
import SideBar from "../../components/reuse/sidebar/SideBar";
import EventNew from "../../components/event-new/EventNew";
import { useEventCreatedMutation } from "../../features";

export default function EventNewPage() {
  const [eventCreated] = useEventCreatedMutation();
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <EventNew eventCreated={eventCreated} />
    </Box>
  );
}
