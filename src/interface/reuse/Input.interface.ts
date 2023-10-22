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
