export interface SidebarItemProps {
  url: string;
  text: string;
  selectedIndex: string;
  handleListClick: (index: string) => void;
}
