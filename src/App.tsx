import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import DashBoard from "./pages/Dashboard";
import EventManage from "./pages/EventManage";
import BranchManage from "./pages/BranchManage";
import ReviewManage from "./pages/ReviewManage";
import UserManage from "./pages/UserManage";
import { ThemeProvider, createTheme } from "@mui/material";
import EventNew from "./pages/EventNew";
import EventEdit from "./pages/EventEdit";
import BrnachNew from "./pages/BranchNew";
import BranchEdit from "./pages/BranchEdit";

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
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/event" element={<EventManage />}></Route>
          <Route path="/event/new" element={<EventNew />}></Route>
          <Route path="/event/edit/:id" element={<EventEdit />}></Route>
          <Route path="/branch/new" element={<BrnachNew />}></Route>
          <Route path="/branch/edit/:id" element={<BranchEdit />}></Route>
          <Route path="/branch" element={<BranchManage />}></Route>
          <Route path="/user" element={<UserManage />}></Route>
          <Route path="/review" element={<ReviewManage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
