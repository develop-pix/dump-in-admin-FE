import { IDashboards } from "./dto/Dto.interface";

export interface DashBoardData {
  date: string;
  user: number;
  review: number;
}

export interface DashBoardMonthData {
  user: number;
  review: number;
}

export interface DashBoardProps {
  data: IDashboards["data"] | undefined;
}
