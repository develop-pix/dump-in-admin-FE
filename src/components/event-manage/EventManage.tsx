import { Box, IconButton, InputBase, Paper } from "@mui/material";
import { customColors } from "../../styles/base/Variable.style";
import SearchIcon from "@mui/icons-material/Search";
import AddButton from "../reuse/button/AddButton";
import TableContainer from "./table/TableContainer";
import { EventsState } from "../../features";
import { IEvent } from "../../interface/dto/Dto.interface";

interface IProps {
  data: EventsState[];
  page: number;
  dataAfterSearch: IEvent[];
  handlePageChange: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => void;
  handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EventManage({
  dataAfterSearch,
  page,
  handlePageChange,
  handleSearchInput,
}: IProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "40px 0px 40px 0px",
        minWidth: "90vw",
      }}
    >
      <Box sx={{ width: "95%" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              fontWeight: "600",
              borderColor: `${customColors?.color_border_gray}`,
              borderBottom: "none",
              padding: "13px 10px 5px 10px",
              borderRadius: "10px 10px 0 0",
              backgroundColor: `${customColors?.sub_pink}`,
              fontSize: "18px",
            }}
          >
            이벤트 관리
          </Box>
          <Box sx={{ display: "flex", gap: "50px" }}>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: 300,
                margin: "0px 0px 5px 0px",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="검색하기"
                inputProps={{ "aria-label": "검색" }}
                onChange={handleSearchInput}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <AddButton />
          </Box>
        </Box>
        <TableContainer
          dataAfterSearch={dataAfterSearch}
          page={page}
          handlePageChange={handlePageChange}
        />
      </Box>
    </Box>
  );
}
