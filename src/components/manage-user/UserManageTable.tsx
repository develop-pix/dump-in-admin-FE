import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination"; // 페이지네이션 추가
import { useState } from "react";

import { UserManageTableType } from "../../interface/UserManage.interface";

export default function UserManageTable({
  data,
}: {
  data: UserManageTableType[];
}) {
  // 페이지네이션 상태
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // 한 페이지에 보여줄 데이터 수

  // 페이지 변경 시 호출
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // 한 페이지에 보여줄 데이터 수 변경 시 호출
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // 페이지네이션을 다시 0 페이지로 리셋
  };

  return (
    <Box sx={{ marginTop: 0, marginLeft: 10 }}>
      <Paper
        sx={{
          borderRadius: 2,
          border: "1px solid red",
          padding: 2,
          width: 800,
        }}
      >
        <Table sx={{ borderSpacing: 5 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F1F1F1", color: "white" }}>
              <TableCell>인덱스</TableCell>
              <TableCell>닉네임</TableCell>
              <TableCell>계정</TableCell>
              <TableCell>가입일</TableCell>
              <TableCell>리뷰 / 지점 / 이벤트</TableCell>
              <TableCell>탈퇴일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: "#F1F1F1",
                    color: "white",
                    borderRadius: 10,
                    marginBottom: 10,
                  }}
                >
                  <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                  <TableCell>{user.nickname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.join_date}</TableCell>
                  <TableCell>
                    {user.review} / {user.branch} / {user.event}
                  </TableCell>
                  <TableCell>{user.withdrawal_date}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={data.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
