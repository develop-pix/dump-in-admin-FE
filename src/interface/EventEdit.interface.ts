import { EditorState } from "draft-js";
import { ISingleEvent } from "./dto/Dto.interface";
import { useEventUpdatedMutation } from "../features";

export interface EventEditInputFormProps {
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
  data?: ISingleEvent["data"];
}

export interface EventEditProps {
  eventEditData: ISingleEvent | undefined;
  eventUpdated: ReturnType<typeof useEventUpdatedMutation>[0];
  params: number;
}
