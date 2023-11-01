import { Box } from "@mui/material";
import TableForm from "../reuse/table/TableForm";
import { customColors } from "../../styles/base/Variable.style";
import { PhotoboothTableColumn } from "../../interface/PhotoboothManage.interface";
import { useState } from "react";
import SearchInput from "../reuse/input/SearchInput";
import AddButton from "../reuse/button/AddButton";
import EditButton from "../reuse/button/EditButton";
import DeleteButton from "../reuse/button/DeleteButton";

export default function PhotoboothManage() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  /* 표 제목 및 포맷 설정 */
  const tablecolumns: PhotoboothTableColumn[] = [
    { id: "name", label: "포토부스명", minWidth: 120 },
    {
      id: "image",
      label: "대표사진",
      minWidth: 150,
      align: "center",
      format: (value: string) => {
        return (
          <Box sx={{ width: "15vh", height: "15vh" }}>
            <img src={value} width="100%" height="100%" />
          </Box>
        );
      },
    },
    {
      id: "hashtag",
      label: "해시태그",
      minWidth: 100,
    },
    {
      id: "id",
      label: "편집",
      minWidth: 100,
      align: "center",
      format: (value: string) => {
        return (
          <Box sx={{ display: "flex", gap: "10px" }}>
            <EditButton value={value} />
            <DeleteButton value={value} />
          </Box>
        );
      },
    },
  ];

  // 임의 데이터 100개
  const tablerows = Array.from({ length: 100 }, (_, index) => ({
    id: (index + 1).toString(), // 수정, 삭제로 넘겨줄 데이터 id 값
    name: "인생네컷",
    image:
      "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
    hashtag: `hashtag1, 포토이즘, 인생네컷, hashtag${index + 1}`,
  }));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "40px 0px 40px 0px",
        minWidth: "20vw",
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
              borderColor: `${customColors.color_border_gray}`,
              borderBottom: "none",
              padding: "13px 10px 5px 10px",
              borderRadius: "10px 10px 0 0",
              backgroundColor: `${customColors.sub_pink}`,
              fontSize: "18px",
            }}
          >
            포토부스 관리
          </Box>
          <Box sx={{ display: "flex", gap: "50px" }}>
            <SearchInput search={search} setSearch={setSearch} />
            <AddButton />
          </Box>
        </Box>
        <TableForm
          columns={tablecolumns}
          rows={tablerows}
          page={page}
          setPage={setPage}
        />
      </Box>
    </Box>
  );
}
