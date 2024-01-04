import { selectAuth } from "../../features/auth/authSlice";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks";

export default function RequireAuth() {
  const auth = useAppSelector(selectAuth);
  const location = useLocation();

  return (
    <>
      {Object.keys(auth).length !== 0 ? (
        <Outlet />
      ) : (
        <Navigate to="/" state={{ from: location }} replace />
      )}
    </>
  );
}
