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
  hashtags: string[];
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

export interface ISingleEvent {
  code: number;
  message: string;
  success: boolean;
  data: {
    id: number;
    title: string;
    content: string;
    mainThumbnailUrl: string;
    brandName: string;
    hashtags: [string];
    startDate: Date;
    endDate: Date;
    viewCount: number;
    likesCount: number;
    isPublic: boolean;
    images: string[];
  };
}

export interface IUpdateEvent {
  code: number;
  message: string;
  success: boolean;
  data: object;
}
