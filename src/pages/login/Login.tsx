import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInput } from "../../interface/reuse/Input.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { requiredLogin } from "../../components/reuse/schema/loginSchema";
import LoginForm from "../../components/login/LoginForm";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors: inputErrors },
  } = useForm<LoginInput>({
    mode: "onChange",
    resolver: zodResolver(requiredLogin),
  });

  /*로그인 버튼 입력시*/
  const onSubmitHandler: SubmitHandler<LoginInput> = async (
    data: LoginInput
  ) => {
    try {
      console.log(data);
      //catch 문안으로 들어가야하나 build시 에러 발생하여 임의로 추가, API 적용후 아래 삭제할것

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
    <>
      <LoginForm
        onSubmitHandler={onSubmitHandler}
        register={register}
        handleSubmit={handleSubmit}
        inputErrors={inputErrors}
      />
    </>
  );
}
