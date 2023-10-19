export interface SideBarListItemType {
  url: string;
  text: string;
  selectedIndex: string;
  handleListClick: (index: string) => void;
}
