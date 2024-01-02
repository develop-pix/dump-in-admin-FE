import { Box, Button, TextField } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { LoginInput } from "../../interface/reuse/Input.interface";
import { customColors } from "../../styles/base/Variable.style";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

interface IProps {
  onSubmitHandler: (data: LoginInput) => void;
  register: UseFormReturn<LoginInput>["register"];
  handleSubmit: UseFormReturn<LoginInput>["handleSubmit"];
  inputErrors: UseFormReturn<LoginInput>["formState"]["errors"];
  loginError: FetchBaseQueryError | SerializedError | undefined;
}
export default function LoginForm({
  onSubmitHandler,
  register,
  handleSubmit,
  inputErrors,
  loginError,
}: IProps) {
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
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div>
            <TextField
              {...register("username")}
              label="ID"
              type="text"
              id="username"
              name="username"
              placeholder="ID를 입력해주세요"
              autoComplete="email"
              margin="dense"
              fullWidth
            />
          </div>
          {inputErrors?.["username"] && (
            <Box marginTop="10px" color={customColors.color_invalid}>
              {inputErrors?.["username"].message}
            </Box>
          )}

          <div>
            <TextField
              {...register("userPassword")}
              label="Password"
              type="password"
              id="userPassword"
              name="userPassword"
              placeholder="비밀번호를 입력해주세요"
              autoComplete="current-password"
              margin="dense"
              fullWidth
            />

            {inputErrors?.["userPassword"] && (
              <Box marginTop="10px" color={customColors.color_invalid}>
                {inputErrors?.["userPassword"].message}
              </Box>
            )}
          </div>
          <Button variant="contained" fullWidth type="submit">
            로그인
          </Button>
          {loginError && "message" in loginError && (
            <Box marginTop="10px" color={customColors.color_invalid}>
              {loginError.message}
            </Box>
          )}
        </form>
      </Box>
    </Box>
  );
}
