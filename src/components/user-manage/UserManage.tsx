import { Box } from "@mui/material";
import TableForm from "../reuse/table/TableForm";
import { customColors } from "../../styles/base/Variable.style";
import { UserTableColumn } from "../../interface/UserManage.interface";
import { useState } from "react";
import SearchInput from "../reuse/input/SearchInput";
import { useNavigate } from "react-router-dom";

export default function UserManage() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const rowCount = 100; // 데이터 개수 = 총 회원가입자 수

  const navigate = useNavigate();

  const onClickPushMessageButton = () => {
    navigate("/pushmessage"); // 클릭 시 /pushmessage로 이동
  };

  /* 표 제목 및 포맷 설정 */
  const tablecolumns: UserTableColumn[] = [
    {
      id: "nickname",
      label: "닉네임",
      minWidth: 150,
      align: "center",
    },
    { id: "account", label: "계정", minWidth: 120 },
    {
      id: "join_date",
      label: "제목",
      minWidth: 150,
    },
    {
      id: "review",
      label: "리뷰 / 지점 / 이벤트",
      minWidth: 150,
      align: "center",
    },
    {
      id: "withdrawal_date",
      label: "탈퇴일",
      minWidth: 120,
    },
  ];

  // 임의 데이터 100개
  const tablerows = Array.from({ length: 100 }, (_, index) => ({
    id:index,
    nickname: "C02",
    account: "jsee53@gmail.com",
    join_date: "2023/10/21",
    review: `${index + 1} / ${index + 2} / ${index + 3}`,
    withdrawal_date: "9999/99/99",
  }));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "40px 0px 40px 0px",
      }}
    >
      <Box sx={{ width: "80%", marginLeft: "20px" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                fontWeight: "600",
                borderBottom: "none",
                padding: "13px 10px 5px 10px",
                borderRadius: "10px 10px 0 0",
                backgroundColor: `${customColors.sub_pink}`,
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              사용자 관리
            </Box>
            <Box
              sx={{
                fontWeight: "600",
                padding: "13px 10px 5px 10px",
                borderRadius: "10px 10px 0 0",
                border: `2px solid ${customColors.sub_pink}`,
                borderBottom: "none",
                backgroundColor: `${customColors.white}`,
                fontSize: "18px",
                cursor: "pointer",
              }}
              onClick={onClickPushMessageButton}
            >
              알림 전송
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: "50px" }}>
            <SearchInput search={search} setSearch={setSearch} />
          </Box>
        </Box>
        <TableForm
          columns={tablecolumns}
          rows={tablerows}
          page={page}
          setPage={setPage}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "50px 40px 0 40px",
          border: "2px solid",
          borderColor: `${customColors.sub_pink}`,
          borderRadius: "10px",
          padding: "10px",
          alignItems: "center",
          height: "40px",
          fontSize: "18px",
        }}
      >
        <Box>총 회원가입자 수 : {rowCount}</Box>
      </Box>
    </Box>
  );
}
