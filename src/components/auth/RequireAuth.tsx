import { selectAuth } from "../../features/auth/authSlice";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks";

export default function RequireAuth() {
  const auth = useAppSelector(selectAuth);
  const location = useLocation();

  const checkAuthentication = (
    auth:
      | {
          code: number;
          message: string;
          success: boolean;
          data: object;
        }
      | object
  ) => Object.keys(auth).length !== 0;

  const isAuthenticated = checkAuthentication(auth);

  return (
    <>
      {isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to="/" state={{ from: location }} replace />
      )}
    </>
  );
}
