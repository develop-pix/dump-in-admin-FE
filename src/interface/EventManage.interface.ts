import { jsx } from "@emotion/react";

export interface EventTableColumn {
  id: "image" | "name" | "title" | "description" | "term" | "hashtag" | "id";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center" | "inherit" | "justify" | undefined;
  format?: (value: string) => jsx.JSX.Element;
}
