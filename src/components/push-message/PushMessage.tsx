import { Box } from "@mui/material";
import { customColors } from "../../styles/base/Variable.style";
import PushInputForm from "./PushInputForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SubmitButton from "../reuse/button/SubmitButton";

export default function PushMessage() {
  const isUserPage = location.pathname === "/user";

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [screenData, setScreenData] = useState<string>("");
  const [reservationDate, setReservationDate] = useState<Date>(new Date());

  /* 전송 버튼 입력시 */
  const onClickSubmitButton = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(title);
      console.log(description);
      console.log(screenData);
      console.log(reservationDate);

      const modifiedReservationDate =
        reservationDate <= new Date() ? null : reservationDate;
      if (modifiedReservationDate == null) {
        alert("알림을 지금 전송하였습니다.");
        // reservationDate가 현재 시간과 같다면 null을 서버로 보냄
      } else {
        alert("알림 예약이 완료되었습니다.");
      }

      // 알림이 성공적으로 전송되면 변수 초기화
      setTitle("");
      setDescription("");
      setScreenData("");
      setReservationDate(new Date());
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const onClickUserManageButton = () => {
    navigate("/user"); // 클릭 시 /user로 이동
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "40px 0px 40px 0px",
        minWidth: "20vw",
      }}
      component="form"
      onSubmit={onClickSubmitButton}
    >
      <Box sx={{ width: "95%", marginLeft: "20px" }}>
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
                padding: "15px 10px 15px 10px",
                borderRadius: "10px 10px 0 0",
                border: `2px solid ${customColors.sub_pink}`,
                borderBottom: "none",
                backgroundColor: isUserPage
                  ? `${customColors.sub_pink}`
                  : `${customColors.white}`,
                fontSize: "18px",
                cursor: "pointer",
              }}
              onClick={onClickUserManageButton}
            >
              사용자 관리
            </Box>
            <Box
              sx={{
                fontWeight: "600",
                borderRadius: "10px 10px 0 0",
                border: `2px solid ${customColors.sub_pink}`,
                borderBottom: "none",
                padding: "15px 10px 15px 10px",
                backgroundColor: isUserPage
                  ? `${customColors.white}`
                  : `${customColors.sub_pink}`,
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              알림 전송
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: "50px" }}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <SubmitButton value="전송" />
            </Box>
          </Box>
        </Box>
        <PushInputForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          screenData={screenData}
          setScreenData={setScreenData}
          reservationDate={reservationDate}
          setReservationDate={setReservationDate}
        />
      </Box>
    </Box>
  );
}
