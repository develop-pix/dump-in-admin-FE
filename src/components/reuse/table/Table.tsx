import {
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { customColors } from "../../../styles/base/Variable.style";
import { TableProps } from "../../../interface/reuse/Table.interface";

export default function Table({ columns, rows, page, setPage }: TableProps) {
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
        width: "100%",
        overflow: "hidden",
        border: "2px solid",
        borderColor: `${customColors.main}`,
        borderRadius: "0px 10px 10px 10px",
      }}
    >
      <TableContainer>
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
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === "string"
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
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
