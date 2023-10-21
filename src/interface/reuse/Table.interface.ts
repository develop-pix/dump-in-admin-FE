import { jsx } from "@emotion/react";

export interface TableProps {
  columns: Column[];
  // 사용하는 컴포넌트 추가할떄 마다 타입 추가 해야함
  // ex) rows: EventRow[] | UserRow[] | BranchRow[]
  rows: EventRow[];
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
