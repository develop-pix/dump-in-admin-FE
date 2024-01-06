import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { SubmitHandler, UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInput } from "../../interface/reuse/Input.interface";
import { selectAuth, useUserAuthenticatedMutation } from "../../features";
import { requiredLogin, useAppSelector } from "../../hooks";

export const useLoginPage = (): [
  onSubmitHandler: (data: LoginInput) => void,
  register: UseFormReturn<LoginInput>["register"],
  handleSubmit: UseFormReturn<LoginInput>["handleSubmit"],
  inputErrors: UseFormReturn<LoginInput>["formState"]["errors"],
  loginError: FetchBaseQueryError | SerializedError | undefined
] => {
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

  /** 로그인 Form을 위한 Submit Handler  */
  const onSubmitHandler: SubmitHandler<LoginInput> = async (
    data: LoginInput
  ) => {
    userAuthenticate(data);
  };

  // Login시 Dashboard Page로 이동
  useRedirectDashboard();

  return [onSubmitHandler, register, handleSubmit, inputErrors, loginError];
};

const useRedirectDashboard = () => {
  const auth = useAppSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(auth).length !== 0) {
      navigate("/dashboard");
    }
  }, [auth, navigate]);
};
