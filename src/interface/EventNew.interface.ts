import { EditorState } from "draft-js";

export interface EventInputFormProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setPhotoboothName: React.Dispatch<React.SetStateAction<string>>;
  setRepresentativeImage: React.Dispatch<React.SetStateAction<string>>;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  description: EditorState;
  setDescription: React.Dispatch<React.SetStateAction<EditorState>>;
  setTerm: React.Dispatch<React.SetStateAction<Date>>;
  setHashtag: React.Dispatch<React.SetStateAction<string[]>>;
}
