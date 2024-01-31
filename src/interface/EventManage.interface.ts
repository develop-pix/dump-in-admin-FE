import { jsx } from "@emotion/react";
import { EventsState } from "../features";
import { IEvent } from "./dto/Dto.interface";

export interface EventTableColumn {
  id: "image" | "name" | "title" | "description" | "term" | "hashtag" | "id";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center" | "inherit" | "justify" | undefined;
  format?: (value: string) => jsx.JSX.Element;
}

export interface EventManageProps {
  data: EventsState[];
  page: number;
  dataAfterSearch: IEvent[];
  handlePageChange: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => void;
  handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface EventManageTableContainerProps {
  dataAfterSearch: IEvent[];
  page: number;
  handlePageChange: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => void;
}

export interface EventTableRowProps {
  id: number;
  src: string;
  name: string;
  title: string;
  description: string;
  term: string;
  hashtag: string[];
}
