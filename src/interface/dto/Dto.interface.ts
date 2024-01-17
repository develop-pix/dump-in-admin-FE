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

export interface IEvent {
  id: number;
  title: "string";
  content: "string";
  mainThumbnailUrl: "string";
  brandName: "string";
  hashtags: ["string"];
  startDate: string;
  endDate: string;
}
export interface IEvents {
  code: number;
  message: string;
  success: boolean;
  data: {
    results: IEvent[];
    page: number;
    totalPage: number;
    queryCount: number;
    resultsLength: number;
  };
}
