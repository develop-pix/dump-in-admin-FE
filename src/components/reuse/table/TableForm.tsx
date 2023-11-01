import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { customColors } from "../../../styles/base/Variable.style";
import { TableProps } from "../../../interface/reuse/Table.interface";

export default function TableForm({
  columns,
  rows,
  page,
  setPage,
}: TableProps) {
  /* 페이지 전환 */
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    event?.preventDefault();
    setPage(newPage);
  };

  return (
    <Box
      sx={{
        width: "auto", // width를 "auto"로 설정
        display: "inline-block", // display 속성을 "inline-block"으로 설정
        overflow: "hidden",
        border: "2px solid",
        borderColor: `${customColors.sub_pink}`,
        borderRadius: "0px 10px 10px 10px",
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{ fontWeight: "700", fontSize: "16px" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * 10, page * 10 + 10).map((row) => {
              return (
                /* 이미지 배열 타입 때문에 key 값 예외처리 */
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={Array.isArray(row.id) ? row.id[0] : row.id}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.formatArray && Array.isArray(value) // 이미지가 배열일 경우
                          ? column.formatArray(value)
                          : column.format && typeof value === "string"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={rows.length}
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
      />
    </Box>
  );
}
