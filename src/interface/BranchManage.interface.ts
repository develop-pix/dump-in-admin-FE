import { jsx } from "@emotion/react";

export interface BranchTableColumn {
  id: "name" | "image" | "hashtag" | "id";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center" | "inherit" | "justify" | undefined;
  format?: (value: string) => jsx.JSX.Element;
}
