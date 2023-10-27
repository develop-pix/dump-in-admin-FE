import { jsx } from "@emotion/react";

export interface TableProps {
  columns: Column[];
  // 이벤트, 지점, 리뷰, 사용자 관리 페이지 타입
  rows: EventRow[] | BranchRow[] | ReviewRow[] | UserRow[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

/* 표 제목, 포맷 설정 타입 */
interface Column {
  id: string;
  label: string;
  align?: "right" | "left" | "center" | "inherit" | "justify" | undefined;
  minWidth?: number;
  format?: (value: string) => jsx.JSX.Element;
  formatArray?: (value: string[]) => jsx.JSX.Element;
}

/* EventManage 표 데이터 */
interface EventRow {
  [id: string]: string | number;
  image: string;
  name: string;
  title: string;
  description: string;
  term: string;
  hashtag: string;
}

/* BranchManage 표 데이터 */
interface BranchRow {
  [id: string]: string | number;
  name: string;
  image: string;
  hashtag: string;
}

/* ReviewManage 표 데이터 */
interface ReviewRow {
  [id: string]: string | number | string[]; // 이미지 배열을 처리하기 위해 string[] 타입 추가
  nickname: string;
  branch: string;
  comment: string;
  image: string[];
  date: string;
}

/* UserManage 표 데이터 */
interface UserRow {
  [id: string]: string | number;
  nickname: string;
  account: string;
  join_date: string;
  review: string;
  withdrawal_date: string;
}
