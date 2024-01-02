import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInput } from "../../interface/reuse/Input.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { requiredLogin } from "../../components/reuse/schema/loginSchema";
import LoginForm from "../../components/login/LoginForm";
import { useUserAuthenticatedMutation } from "../../features";

export default function Login() {
  const [usreAuthenticate, { error: loginError }] =
    useUserAuthenticatedMutation();

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
    usreAuthenticate({ data });
  };

  return (
    <>
      <LoginForm
        onSubmitHandler={onSubmitHandler}
        register={register}
        handleSubmit={handleSubmit}
        inputErrors={inputErrors}
        loginError={loginError}
      />
    </>
  );
}
