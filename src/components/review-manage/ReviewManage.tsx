import { Box } from "@mui/material";
import Table from "../reuse/table/Table";
import { customColors } from "../../styles/base/Variable.style";
import { ReviewTableColumn } from "../../interface/ReviewManage.interface";
import { useState } from "react";
import SearchInput from "../reuse/input/SearchInput";
import DeleteButton from "../reuse/button/DeleteButton";

export default function EventManage() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  /* 표 제목 및 포맷 설정 */
  const tablecolumns: ReviewTableColumn[] = [
    { id: "nickname", label: "닉네임", minWidth: 120 },
    {
      id: "branch",
      label: "지점명",
      minWidth: 150,
    },
    {
      id: "comment",
      label: "댓글 내용",
      minWidth: 150,
    },
    {
      id: "image",
      label: "리뷰 사진",
      minWidth: 500,
      align: "center",
      // 이미지 배열 처리
      formatArray: (value: string[]) => {
        return (
          <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            {value.map((imgUrl, index) => (
              <Box key={index} sx={{ width: "15vh", height: "15vh" }}>
                <img src={imgUrl} width="100%" height="100%" />
              </Box>
            ))}
          </Box>
        );
      },
    },
    {
      id: "date",
      label: "작성일",
      minWidth: 150,
    },
    {
      id: "id",
      label: "편집",
      minWidth: 100,
      align: "center",

      // 이미지 배열 형식 때문에 추가
      format: (value: string) => {
        if (typeof value === "string") {
          return (
            <Box>
              <DeleteButton value={value} />
            </Box>
          );
        } else {
          return <></>; // 실제로 string만 들어오므로 의미 x
        }
      },
    },
  ];

  // 임의 데이터 100개
  const tablerows = Array.from({ length: 100 }, (_, index) => ({
    id: "1", // 수정, 삭제로 넘겨줄 데이터 id 값
    nickname: "덤핀",
    branch: `포토이즘 연남점${index + 1}`,
    comment: "오늘을 oo이랑 포토이즘에서 신상 프레임 찍었다ㅋㅋ",
    // 이미지 배열
    image: [
      "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
      "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
      "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
    ],
    date: "2023-10-25 13:00:00",
  }));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "40px 0px 40px 0px",
        minWidth: "30vw",
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
              backgroundColor: `${customColors.main}`,
              fontSize: "18px",
            }}
          >
            리뷰 관리
          </Box>
          <Box sx={{ display: "flex", gap: "50px" }}>
            <SearchInput search={search} setSearch={setSearch} />
          </Box>
        </Box>
        <Table
          columns={tablecolumns}
          rows={tablerows}
          page={page}
          setPage={setPage}
        />
      </Box>
    </Box>
  );
}
