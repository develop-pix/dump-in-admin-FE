import LoginForm from "../../components/login/LoginForm";
import { useLoginPage } from "./LoginPage.hook";

export default function Login() {
  const [onSubmitHandler, register, handleSubmit, inputErrors, loginError] =
    useLoginPage();

  return (
    <LoginForm
      onSubmitHandler={onSubmitHandler}
      register={register}
      handleSubmit={handleSubmit}
      inputErrors={inputErrors}
      loginError={loginError}
    />
  );
}
