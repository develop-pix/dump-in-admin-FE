import {
  Box,
  Table,
  TableBody,
  TableContainer as Container,
  TablePagination,
} from "@mui/material";
import { customColors } from "../../../styles/base/Variable.style";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { IEvent } from "../../../interface/dto/Dto.interface";

interface IProps {
  dataAfterSearch: IEvent[];
  page: number;
  handlePageChange: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => void;
}

export default function TableContainer({
  dataAfterSearch,
  page,
  handlePageChange,
}: IProps) {
  /** 자를 페이지 단위 */
  const pageUnit = 10;

  /** 10개 단위로 자른 데이터  */
  const sliceTenPages =
    dataAfterSearch &&
    [...dataAfterSearch]?.slice(page * pageUnit, page * pageUnit + pageUnit);

  return (
    <Box
      sx={{
        width: "auto",
        display: "inline-block",
        overflow: "hidden",
        border: "2px solid",
        borderColor: `${customColors.sub_pink}`,
        borderRadius: "0px 10px 10px 10px",
      }}
    >
      <Container>
        <Table>
          <TableHeader />
          <TableBody>
            {sliceTenPages &&
              sliceTenPages.map((item: IEvent) => (
                <TableRow
                  key={item.id}
                  id={item.id}
                  src={item.mainThumbnailUrl}
                  name={item.brandName}
                  title={item.title}
                  description={item.content}
                  term={item.startDate}
                  hashtag={item.hashtags}
                />
              ))}
          </TableBody>
        </Table>
      </Container>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={dataAfterSearch?.length}
        rowsPerPage={9}
        page={page}
        onPageChange={handlePageChange}
      />
    </Box>
  );
}
