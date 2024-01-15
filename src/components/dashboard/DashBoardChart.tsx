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
import Box from "@mui/material/Box";
import { DashBoardProps } from "../../interface/DashBoard.interface";

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
        <Typography variant="h6">회원가입 현황</Typography>
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
            dataKey="user"
            stroke={customColors.main_blue}
            name="회원가입 수"
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
