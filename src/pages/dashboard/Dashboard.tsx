import { Box } from "@mui/material";
import { useGetDashboardQuery } from "../../features";
import SideBar from "../../components/reuse/sidebar/SideBar";
import DashBoardChart from "../../components/dashboard/DashBoardChart";
import DashBoardTable from "../../components/dashboard/DashBoardTable";
import { formatDate } from "../../utils";
import { useMemo } from "react";

// 지점 관리 페이지
export default function DashBoard() {
  const { data: dashboardData } = useGetDashboardQuery();

  // 변경된 날짜 형식을 가지고 있는 데이터
  const filteredDateData = useMemo(
    () =>
      dashboardData?.data.map((x) => {
        return {
          ...x,
          date: formatDate(x.date),
        };
      }),
    [dashboardData?.data]
  );
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box sx={{ display: "flex" }}>
        <DashBoardChart data={filteredDateData} />
        <DashBoardTable data={filteredDateData} />
      </Box>
    </Box>
  );
}
