import { ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { SideBarListItemType } from "../../../interface/SideBar.interface";
import { customColors } from "../../../styles/base/Variable.style";

export default function SideBarListItem({
  url,
  text,
  selectedIndex,
  handleListClick,
}: SideBarListItemType) {
  return (
    <ListItemButton
      component={Link}
      to={url}
      selected={selectedIndex === url.slice(1)}
      onClick={() => handleListClick(url.slice(1))}
      sx={{
        "&.Mui-selected": {
          backgroundColor: customColors.white,
          color: customColors.black,
          "&:hover": {
            backgroundColor: customColors.white,
            color: customColors.black,
          },
        },
      }}
    >
      <ListItemText primary={text} />
    </ListItemButton>
  );
}
