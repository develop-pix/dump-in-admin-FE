import { UseFormReturn } from "react-hook-form";
import { LoginInput } from "./reuse/Input.interface";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

export interface LoginFormIProps {
  onSubmitHandler: (data: LoginInput) => void;
  register: UseFormReturn<LoginInput>["register"];
  handleSubmit: UseFormReturn<LoginInput>["handleSubmit"];
  inputErrors: UseFormReturn<LoginInput>["formState"]["errors"];
  loginError: FetchBaseQueryError | SerializedError | undefined;
}
