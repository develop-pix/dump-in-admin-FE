import { jsx } from "@emotion/react";

export interface UserTableColumn {
  id: "nickname" | "account" | "join_date" | "review" | "withdrawal_date";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center" | "inherit" | "justify" | undefined;
  format?: (value: string) => jsx.JSX.Element;
}
