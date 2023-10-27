import SideBarListItem from "./SideBarListItem";
import { customColors } from "../../../styles/base/Variable.style";
import { useState, useEffect } from "react";
import { Drawer, List } from "@mui/material";
import { useLocation } from "react-router-dom";

// 사이드 바
export default function SideBar() {
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState("");

  // url이 변경될 때마다 /이후 첫번째 인자를 선택된 인덱스로 저장
  useEffect(() => {
    setSelectedIndex(location.pathname.split("/").filter((item) => item !== "")[0]);
  }, [location]);

  const handleListClick = (index: string) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 200,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 200,
          backgroundColor: customColors.main_pink,
          color: customColors.white,
        },
      }}
    >
      <List sx={{ marginTop: "100px" }}>
        <SideBarListItem
          url="/dashboard"
          text="대시보드"
          selectedIndex={selectedIndex}
          handleListClick={handleListClick}
        />
        <SideBarListItem
          url="/event"
          text="이벤트 관리"
          selectedIndex={selectedIndex}
          handleListClick={handleListClick}
        />
        <SideBarListItem
          url="/branch"
          text="지점 관리"
          selectedIndex={selectedIndex}
          handleListClick={handleListClick}
        />
        <SideBarListItem
          url="/review"
          text="리뷰 관리"
          selectedIndex={selectedIndex}
          handleListClick={handleListClick}
        />
        <SideBarListItem
          url="/user"
          text="사용자 관리"
          selectedIndex={selectedIndex}
          handleListClick={handleListClick}
        />
      </List>
    </Drawer>
  );
}
