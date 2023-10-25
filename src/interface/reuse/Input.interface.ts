import { EditorState } from "draft-js";

export interface LongInputType {
  label: string;
  type: string;
  placeholder: string;
  autocomplete: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export interface SearchInputProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export interface TitleInputProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export interface SelectInputData {
  photoboothId: number;
  value: string;
}

export interface SelectInputProps {
  data: SelectInputData[];
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

export interface EditorInputProps {
  input: EditorState;
  setInput: React.Dispatch<React.SetStateAction<EditorState>>;
}
