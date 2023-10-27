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

export interface FileInputProps {
  setRepresentativeImage?: React.Dispatch<React.SetStateAction<string>>;
  setImage?: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface EditorInputProps {
  input: EditorState;
  setInput: React.Dispatch<React.SetStateAction<EditorState>>;
}

export interface DatePickerInputProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  name: string;
}

export interface HashTagData {
  id: number;
  tag: string;
  value: string;
}

export interface CheckBoxProps {
  hashtagData: HashTagData;
  hashtag: string[];
  setHashtag: React.Dispatch<React.SetStateAction<string[]>>;
}
