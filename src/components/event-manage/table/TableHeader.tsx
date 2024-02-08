import { TableCell, TableHead, TableRow } from "@mui/material";

export default function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell
          align="center"
          sx={{ fontWeight: "700", fontSize: "16px", minWidth: "150" }}
        >
          대표사진
        </TableCell>
        <TableCell
          sx={{ fontWeight: "700", fontSize: "16px", minWidth: "120" }}
        >
          포토부스명
        </TableCell>
        <TableCell
          sx={{ fontWeight: "700", fontSize: "16px", minWidth: "150" }}
        >
          제목
        </TableCell>
        <TableCell
          sx={{ fontWeight: "700", fontSize: "16px", minWidth: "470" }}
        >
          설명
        </TableCell>
        <TableCell
          sx={{ fontWeight: "700", fontSize: "16px", minWidth: "120" }}
        >
          기간
        </TableCell>
        <TableCell
          sx={{ fontWeight: "700", fontSize: "16px", minWidth: "130" }}
        >
          해시태그
        </TableCell>
        <TableCell
          sx={{ fontWeight: "700", fontSize: "16px", minWidth: "100" }}
        >
          편집
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
