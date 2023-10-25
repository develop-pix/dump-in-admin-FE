import { jsx } from "@emotion/react";

export interface ReviewTableColumn {
  id: "nickname" | "branch" | "comment" | "image" | "date" | "id";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center" | "inherit" | "justify" | undefined;
  format?: (value: string) => jsx.JSX.Element;
  formatArray?: (value: string[]) => jsx.JSX.Element;
}
