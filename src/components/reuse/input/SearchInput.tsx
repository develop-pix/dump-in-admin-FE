import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { SearchInputProps } from "../../../interface/reuse/Input.interface";

export default function SearchInput({ search, setSearch }: SearchInputProps) {
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.currentTarget.value);
  };

  const onClickSearchButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: 300,
        margin: "0px 0px 5px 0px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="검색하기"
        inputProps={{ "aria-label": "검색" }}
        onChange={onSearchChange}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={onClickSearchButton}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
