import { TableCell, TableRow as Row, Box } from "@mui/material";
import EditButton from "../../reuse/button/EditButton";
import DeleteButton from "../../reuse/button/DeleteButton";
import { formatDate } from "../../../utils";

interface IProps {
  id: number;
  src: string;
  name: string;
  title: string;
  description: string;
  term: string;
  hashtag: [string];
}
export default function TableRow({
  id,
  src,
  name,
  title,
  description,
  term,
  hashtag,
}: IProps) {
  /** 2023-02-02와 같은 형식의 Date */
  const filteredDate = term && formatDate(term);

  /** ex: [tag, tag1, tag2] => "tag, tag1, tag2" */
  const hasTags = hashtag?.join("");

  return (
    <Row hover role="checkbox" tabIndex={-1}>
      <TableCell
        align="center"
        sx={{ fontWeight: "700", fontSize: "16px", minWidth: 150 }}
      >
        <Box sx={{ width: "15vh", height: "15vh" }}>
          <img src={src} width="100%" height="100%" alt="event-manage-image" />
        </Box>
      </TableCell>
      <TableCell sx={{ fontSize: "16px", minWidth: 120 }}>{name}</TableCell>
      <TableCell sx={{ fontSize: "16px", minWidth: 150 }}>{title}</TableCell>
      <TableCell sx={{ fontSize: "16px", minWidth: 470 }}>
        {description}
      </TableCell>
      <TableCell sx={{ fontSize: "16px", minWidth: 120 }}>
        {filteredDate}
      </TableCell>
      <TableCell sx={{ fontSize: "16px", minWidth: 130 }}>{hasTags}</TableCell>
      <TableCell sx={{ fontSize: "16px", minWidth: 100 }}>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <EditButton value={id} />
          <DeleteButton value={id} />
        </Box>
      </TableCell>
    </Row>
  );
}
