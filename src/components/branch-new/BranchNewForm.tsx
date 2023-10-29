import { Box } from "@mui/material";
import SideBar from "../reuse/sidebar/SideBar";
import BrnachNew from "./BranchNew";

export default function BrnachNewForm() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <BrnachNew />
    </Box>
  );
}
