export interface IUser {
  code: number;
  message: string;
  success: boolean;
  data: object;
}

export interface IDashboard {
  code: number;
  message: string;
  success: boolean;
  data: {
    date: string;
    user: number;
    review: number;
  };
}
