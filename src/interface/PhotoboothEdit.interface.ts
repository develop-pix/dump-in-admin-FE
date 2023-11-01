export interface PhotoboothEditInputFormProps {
  photoboothName: string;
  setPhotoboothName: React.Dispatch<React.SetStateAction<string>>;
  image: string[];
  setImage: React.Dispatch<React.SetStateAction<string[]>>;
  hashtag: string[];
  setHashtag: React.Dispatch<React.SetStateAction<string[]>>;
}
