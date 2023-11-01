import { Box } from "@mui/material";
import SideBar from "../reuse/sidebar/SideBar";
import PhotoboothhEdit from "./PhotoboothEdit";

export default function PhotoboothEditForm() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <PhotoboothhEdit />
    </Box>
  );
}
