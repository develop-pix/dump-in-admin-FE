import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Paper, Typography } from "@mui/material";
import { customColors } from "../../styles/base/Variable.style";
import { DashBoardProps } from "../../interface/DashBoard.interface";
import Box from "@mui/material/Box";

export default function DashBoardChart({ data }: DashBoardProps) {
  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        width: "35vw",
        margin: "40px 0px 40px 40px",
        border: `2px solid ${customColors.sub_pink}`,
      }}
    >
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="h6">회원가입 / 방문자 현황</Typography>
      </Box>

      <ResponsiveContainer width="100%" aspect={1.8}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={(date) => date.substring(5)} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="linear"
            dataKey="visitors"
            stroke={customColors.main_blue}
            name="방문자 수"
          />
          <Line
            type="linear"
            dataKey="signups"
            stroke={customColors.sub_blue}
            name="회원가입 수"
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
