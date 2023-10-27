import { Box } from "@mui/material";
import Table from "../reuse/table/Table";
import { customColors } from "../../styles/base/Variable.style";
import { EventTableColumn } from "../../interface/EventManage.interface";
import { useState } from "react";
import SearchInput from "../reuse/input/SearchInput";
import AddButton from "../reuse/button/AddButton";
import EditButton from "../reuse/button/EditButton";
import DeleteButton from "../reuse/button/DeleteButton";

export default function EventManage() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  /* 표 제목 및 포맷 설정 */
  const tablecolumns: EventTableColumn[] = [
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
    { id: "name", label: "포토부스명", minWidth: 120 },
    {
      id: "title",
      label: "제목",
      minWidth: 150,
    },
    {
      id: "description",
      label: "설명",
      minWidth: 470,
    },
    {
      id: "term",
      label: "기간",
      minWidth: 120,
    },
    {
      id: "hashtag",
      label: "해시태그",
      minWidth: 130,
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

  /* 표 데이터 ( Test용 나중에 API로 데이터 GET) */
  const tablerows = [
    {
      id: "1",
      image:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
      name: "인생네컷",
      title: "대충30글자대충30글자대충30글자대충30글자대충30글자",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi adipisci ullam pariatur dignissimos expedita minus, tempora, culpa voluptate eaque asperiores facilis velit impedit quidem quis eos libero veritatis nulla voluptatem?",
      term: "term1",
      hashtag: "hashtag1, 포토이즘, 인생네컷",
    },
    {
      id: "2",
      image:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
      name: "홍대포토스",
      title: "제목제목제목",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum assumenda, hic pariatur consequuntur excepturi eaque perferendis architecto praesentium mollitia quod modi quaerat id eos quisquam adipisci delectus earum deserunt?",
      term: "term2",
      hashtag: "hashtag2",
    },
    {
      id: "3",
      image:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
      name: "포토그레이",
      title: "TestTest",
      description: "짧은글",
      term: "term3",
      hashtag: "hashtag3",
    },
    {
      id: "4",
      image:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
      name: "셀프사진관 예뻐서, 봄",
      title: "다음주까지 50% 할인",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ex atque blanditiis aut neque error dignissimos adipisci incidunt nobis. Veniam ut nemo quos nam a officiis necessitatibus dolorem ratione sed.",
      term: "term4",
      hashtag: "hashtag4",
    },
    {
      id: "5",
      image:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
      name: "포토이즘박스",
      title: "내일까지 오면 1+1",
      description:
        "300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시끝",
      term: "term5",
      hashtag: "hashtag5",
    },
    {
      id: "6",
      image:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
      name: "포토이즘박스",
      title: "강아지와 함께하면 90% 할인",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas recusandae eius amet, qui unde labore omnis aliquid facilis delectus nam voluptas esse at laborum, error rem ipsum! Omnis, nesciunt!",
      term: "term6",
      hashtag: "hashtag6",
    },
    {
      id: "7",
      image:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
      name: "비룸스튜디오",
      title: "신규 오픈 5% 할인",
      description: "할인할인",
      term: "term7",
      hashtag: "hashtag7",
    },
    {
      id: "8",
      image:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
      name: "인생네컷",
      title: "회원가입하면 4컷 무료",
      description:
        "긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더",
      term: "term8",
      hashtag: "hashtag8",
    },
    {
      id: "9",
      image:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
      name: "폴라스튜디오",
      title: "짧",
      description: "Test",
      term: "term9",
      hashtag: "hashtag9",
    },
    {
      id: "10",
      image:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
      name: "포토베어 ",
      title: "제목",
      description: "description10",
      term: "term10",
      hashtag: "hashtag10",
    },
    {
      id: "11",
      image:
        "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
      name: "낭만출력소",
      title: "test123",
      description: "testtestetstewststse",
      term: "term11",
      hashtag: "hashtag11",
    },
  ];

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
              borderColor: `${customColors.color_border_gray}`,
              borderBottom: "none",
              padding: "13px 10px 5px 10px",
              borderRadius: "10px 10px 0 0",
              backgroundColor: `${customColors.sub_pink}`,
              fontSize: "18px",
            }}
          >
            이벤트 관리
          </Box>
          <Box sx={{ display: "flex", gap: "50px" }}>
            <SearchInput search={search} setSearch={setSearch} />
            <AddButton />
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
