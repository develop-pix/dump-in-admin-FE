import Box from "@mui/material/Box";
import DashBoardChart from "./DashBoardChart";
import DashBoardTable from "./DashBoardTable";
import { DashBoardData } from "../../interface/DashBoard.interface";

export default function DashBoard() {
  // 최근 일주일간의 데이터
  const data: DashBoardData[] = [
    { date: "2023-10-20", visitors: 100, signups: 25, reviews: 10 },
    { date: "2023-10-21", visitors: 150, signups: 30, reviews: 15 },
    { date: "2023-10-22", visitors: 120, signups: 20, reviews: 12 },
    { date: "2023-10-23", visitors: 200, signups: 50, reviews: 20 },
    { date: "2023-10-24", visitors: 180, signups: 40, reviews: 18 },
    { date: "2023-10-25", visitors: 220, signups: 60, reviews: 25 },
    { date: "2023-10-26", visitors: 250, signups: 70, reviews: 30 },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <DashBoardChart data={data} />
      <DashBoardTable data={data} />
    </Box>
  );
}
