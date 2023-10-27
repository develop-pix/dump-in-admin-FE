export interface DashBoardProps {
  data: DashBoardData[];
}

export interface DashBoardData {
  date: string;
  visitors: number;
  signups: number;
  reviews: number;
}

export interface DashBoardMonthData {
  visitors: number;
  signups: number;
  reviews: number;
}
