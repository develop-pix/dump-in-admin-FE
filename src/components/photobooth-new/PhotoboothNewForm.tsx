import { Box } from "@mui/material";
import SideBar from "../reuse/sidebar/SideBar";
import PhotoboothNew from "./PhotoboothNew";

export default function PhotoboothNewForm() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <PhotoboothNew />
    </Box>
  );
}
