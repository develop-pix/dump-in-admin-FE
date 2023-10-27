import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { customColors } from "../../styles/base/Variable.style";
import {
  DashBoardProps,
  DashBoardMonthData,
} from "../../interface/DashBoard.interface";

import Box from "@mui/material/Box";

export default function DashBoardTable({ data }: DashBoardProps) {
  // 이번달 합계 데이터
  const sum_data: DashBoardMonthData = {
    visitors: 10000,
    signups: 400,
    reviews: 3000,
  };

  // 주간 방문자 수, 회원가입 수, 리뷰 수
  const weekVisitors = data.reduce((total, item) => total + item.visitors, 0);
  const weekSignups = data.reduce((total, item) => total + item.signups, 0);
  const weekReviews = data.reduce((total, item) => total + item.reviews, 0);

  // 월간 합계 데이터
  const thisMonthData = {
    date: "이번 달 합계",
    visitors: sum_data ? sum_data.visitors : 0,
    signups: sum_data ? sum_data.signups : 0,
    reviews: sum_data ? sum_data.reviews : 0,
  };

  // 주간 합계 데이터
  const thisWeekData = {
    date: "최근 7일 합계",
    visitors: weekVisitors,
    signups: weekSignups,
    reviews: weekReviews,
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        width: "35vw",
        margin: "40px 0px 40px 40px",
        border: `2px solid ${customColors.sub_pink}`,
      }}
    >
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="h6">일자별 요약</Typography>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>일자</TableCell>
              <TableCell>방문자</TableCell>
              <TableCell>가입자</TableCell>
              <TableCell>리뷰</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.date}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.visitors}</TableCell>
                <TableCell>{item.signups}</TableCell>
                <TableCell>{item.reviews}</TableCell>
              </TableRow>
            ))}

            <TableRow key={thisWeekData.date}>
              <TableCell>{thisWeekData.date}</TableCell>
              <TableCell>{thisWeekData.visitors}</TableCell>
              <TableCell>{thisWeekData.signups}</TableCell>
              <TableCell>{thisWeekData.reviews}</TableCell>
            </TableRow>
            <TableRow key={thisMonthData.date}>
              <TableCell>{thisMonthData.date}</TableCell>
              <TableCell>{thisMonthData.visitors}</TableCell>
              <TableCell>{thisMonthData.signups}</TableCell>
              <TableCell>{thisMonthData.reviews}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
