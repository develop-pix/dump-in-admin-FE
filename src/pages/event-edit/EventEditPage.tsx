import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

import SideBar from "../../components/reuse/sidebar/SideBar";
import EventEdit from "../../components/event-edit/EventEdit";
import { useEventUpdatedMutation, useGetEventQuery } from "../../features";

export default function EventEditPage() {
  const params = Number(useLocation().pathname.split("/").pop() as string);

  const { data: eventEditData } = useGetEventQuery({ id: params });

  const [eventUpdated] = useEventUpdatedMutation();

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <EventEdit
        eventEditData={eventEditData}
        eventUpdated={eventUpdated}
        params={params}
      />
    </Box>
  );
}
