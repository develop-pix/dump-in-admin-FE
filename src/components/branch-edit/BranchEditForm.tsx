import { Box } from "@mui/material";
import SideBar from "../reuse/sidebar/SideBar";
import BranchEdit from "./BranchEdit";

export default function BranchEditForm() {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <BranchEdit />
    </Box>
  );
}
