export interface IUser {
  code: number;
  message: string;
  success: boolean;
  data: object;
}

export interface IDashboard {
  date: string;
  user: number;
  review: number;
}

export interface IDashboards {
  code: number;
  message: string;
  success: boolean;
  data: IDashboard[];
}
