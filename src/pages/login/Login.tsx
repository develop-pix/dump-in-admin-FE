import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInput } from "../../interface/reuse/Input.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { requiredLogin } from "../../components/reuse/schema/loginSchema";
import LoginForm from "../../components/login/LoginForm";
import { useUserAuthenticatedMutation } from "../../features";
import { useAppSelector } from "../../hooks";
import { selectAuth } from "../../features/auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const auth = useAppSelector(selectAuth);
  const [userAuthenticate, { error: loginError }] =
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
    userAuthenticate(data);
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) {
      navigate("/dashboard");
    }
  }, [auth, navigate]);

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
