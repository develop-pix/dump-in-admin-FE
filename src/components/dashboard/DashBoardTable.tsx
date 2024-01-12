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
import Box from "@mui/material/Box";
import { DashBoardProps } from "../../interface/DashBoard.interface";
import { useMemo } from "react";

export default function DashBoardTable({ data }: DashBoardProps) {
  // 주 리뷰 수, 회원 가입자 수
  const weekData = useMemo(
    () => data && [...data].slice(data.length - 7, data.length),
    [data]
  );
  // 주 회원가입자 수
  const weekUsers = useMemo(
    () =>
      weekData?.reduce(
        (accumulator, currentValue) => accumulator + currentValue.user,
        0
      ),
    [weekData]
  );

  // 주 리뷰 수
  const weekReviews = useMemo(
    () =>
      weekData?.reduce(
        (accumulator, currentValue) => accumulator + currentValue.review,
        0
      ),
    [weekData]
  );

  // 달 리뷰 수, 회원 가입자 수
  const monthData = useMemo(
    () => data && [...data].slice(data.length - 28, data.length),
    [data]
  );

  // 달 회원 가입자 수
  const monthUsers = useMemo(
    () =>
      monthData?.reduce(
        (accumulator, currentValue) => accumulator + currentValue.user,
        0
      ),
    [monthData]
  );
  // 달 리뷰 수
  const monthReviews = useMemo(
    () =>
      monthData?.reduce(
        (accumulator, currentValue) => accumulator + currentValue.review,
        0
      ),
    [monthData]
  );

  // 월간 합계 데이터
  const thisMonthData = {
    date: "이번 달 합계",
    user: monthUsers,
    review: monthReviews,
  };

  // 주간 합계 데이터
  const thisWeekData = {
    date: "최근 7일 합계",
    user: weekUsers,
    review: weekReviews,
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
              <TableCell>가입자</TableCell>
              <TableCell>리뷰</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item) => (
              <TableRow key={item.date}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.user}</TableCell>
                <TableCell>{item.review}</TableCell>
              </TableRow>
            ))}

            <TableRow key={thisWeekData.date}>
              <TableCell>{thisWeekData.date}</TableCell>
              <TableCell>{thisWeekData.user}</TableCell>
              <TableCell>{thisWeekData.review}</TableCell>
            </TableRow>
            <TableRow key={thisMonthData.date}>
              <TableCell>{thisMonthData.date}</TableCell>
              <TableCell>{thisMonthData.user}</TableCell>
              <TableCell>{thisMonthData.review}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
