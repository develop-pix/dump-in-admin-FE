import LongInput from "../reuse/input/LongInput";
import LoginButton from "../reuse/button/LoginButton";
import { useState } from "react";
import { Box } from "@mui/material";
import { customColors } from "../../styles/base/Variable.style";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalid, setInvalid] = useState<boolean>(false);

  /*로그인 버튼 입력시*/
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(e);
      console.log(email);
      console.log(password);

      //catch 문안으로 들어가야하나 build시 에러 발생하여 임의로 추가, API 적용후 아래 삭제할것
      setInvalid(true);
      //if 문안으로 들어가야하나 build시 에러 발생하여 임의로 추가, API 적용후 아래 삭제할것
      navigate("/dashboard");

      /*
      로그인 API 연동
      let login_result = await 로그인시도(email, password);

      if (login_result.결과코드 === 200) {
        대쉬보드 페이지로 이동?
      }else{
        setInvalid(true);
      }
      */
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 500,
        }}
      >
        <form onSubmit={onSubmitHandler}>
          <LongInput
            label="ID"
            type="email"
            placeholder="ID를 입력해주세요"
            autocomplete="email"
            setInput={setEmail}
          />
          <LongInput
            label="Password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            autocomplete="current-password"
            setInput={setPassword}
          />
          <LoginButton />
        </form>
        {invalid ? (
          <Box marginTop="10px" color={customColors.color_invalid}>
            로그인 정보가 올바르지 않습니다.
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
