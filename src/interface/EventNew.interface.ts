import { EditorState } from "draft-js";

export interface EventInputFormProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setPhotoboothName: React.Dispatch<React.SetStateAction<string>>;
  setRepresentativeImage: React.Dispatch<React.SetStateAction<string>>;
  setImage: React.Dispatch<React.SetStateAction<string[]>>;
  description: EditorState;
  setDescription: React.Dispatch<React.SetStateAction<EditorState>>;
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  endDate: Date;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
  hashtag: string[];
  setHashtag: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface EventHashTagProps {
  hashtag: string[];
  setHashtag: React.Dispatch<React.SetStateAction<string[]>>;
}
