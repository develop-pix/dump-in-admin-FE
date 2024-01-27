import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import {
  Dashboard,
  EventEditPage,
  EventManagePage,
  EventNew,
  Login,
  NotFound,
  PhotoboothEdit,
  PhotoboothManage,
  PhotoboothNew,
  PushMessage,
  ReviewManage,
  UserManage,
} from "./pages";
import RequireAuth from "./components/auth/RequireAuth";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans KR, Roboto, sans-serif",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/event" element={<EventManagePage />}></Route>
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/event/new" element={<EventNew />}></Route>
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/event/edit/:id" element={<EventEditPage />}></Route>
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/branch/new" element={<PhotoboothNew />}></Route>
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/branch/edit/:id" element={<PhotoboothEdit />}></Route>
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/branch" element={<PhotoboothManage />}></Route>
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/user" element={<UserManage />}></Route>
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/pushmessage" element={<PushMessage />}></Route>
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/review" element={<ReviewManage />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
