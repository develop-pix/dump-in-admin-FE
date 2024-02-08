import { EditorState } from "draft-js";
import { useEventCreatedMutation } from "../features";

export interface EventNewInputFormProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  photoboothName: string;
  setPhotoboothName: React.Dispatch<React.SetStateAction<string>>;
  image: string[];
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

export interface EventNewProps {
  eventCreated: ReturnType<typeof useEventCreatedMutation>[0];
}
