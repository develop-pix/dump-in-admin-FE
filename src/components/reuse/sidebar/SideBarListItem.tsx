import { ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { SideBarListItemType } from "../../../interface/SideBarListItem.interface";

export default function SideBarListItem({
  url,
  text,
  selectedIndex,
  handleListClick,
}: SideBarListItemType) {
  return (
    <ListItem
      button
      component={Link}
      to={url}
      selected={selectedIndex === url.slice(1)}
      onClick={() => handleListClick(url.slice(1))}
      sx={{
        "&.Mui-selected": {
          backgroundColor: "#fff",
          color: "#000",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#000",
          },
        },
      }}
    >
      <ListItemText primary={text} />
    </ListItem>
  );
}
