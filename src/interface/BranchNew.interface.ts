export interface BranchInputFormProps {
  photoboothName: string;
  setPhotoboothName: React.Dispatch<React.SetStateAction<string>>;
  image: string[];
  setImage: React.Dispatch<React.SetStateAction<string[]>>;

  hashtag: string[];
  setHashtag: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface BranchHashTagProps {
  hashtag: string[];
  setHashtag: React.Dispatch<React.SetStateAction<string[]>>;
}
