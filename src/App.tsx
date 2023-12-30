import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import {
  Dashboard,
  EventEdit,
  EventManage,
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
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/event" element={<EventManage />}></Route>
          <Route path="/event/new" element={<EventNew />}></Route>
          <Route path="/event/edit/:id" element={<EventEdit />}></Route>
          <Route path="/branch/new" element={<PhotoboothNew />}></Route>
          <Route path="/branch/edit/:id" element={<PhotoboothEdit />}></Route>
          <Route path="/branch" element={<PhotoboothManage />}></Route>
          <Route path="/user" element={<UserManage />}></Route>
          <Route path="/pushmessage" element={<PushMessage />}></Route>
          <Route path="/review" element={<ReviewManage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
