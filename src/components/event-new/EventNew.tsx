import { Box } from "@mui/material";
import { customColors } from "../../styles/base/Variable.style";
import EventInputForm from "./EventInputForm";
import { useState } from "react";
import { EditorState } from "draft-js";

export default function EventNew() {
  const [title, setTitle] = useState<string>("");
  const [photoboothName, setPhotoboothName] = useState<string>("");
  const [representativeImage, setRepresentativeImage] = useState<string>("");
  const [image, setImage] = useState<string[]>([]);
  const [description, setDescription] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [hashtag, setHashtag] = useState<string[]>([]);

  /* 등록하기 버튼 입력시 */
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(e);
      console.log(title);
      console.log(photoboothName);
      console.log(representativeImage);
      console.log(image);
      console.log(description);
      console.log(startDate);
      console.log(endDate);
      console.log(hashtag);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "40px 0px 40px 0px",
        minWidth: "75vw",
      }}
      component="form"
      onSubmit={onSubmitHandler}
    >
      <Box sx={{ width: "95%" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              fontWeight: "600",
              borderColor: `${customColors.color_border_gray}`,
              borderBottom: "none",
              padding: "13px 10px 5px 10px",
              borderRadius: "10px 10px 0 0",
              backgroundColor: `${customColors.main}`,
              fontSize: "18px",
            }}
          >
            이벤트 관리
          </Box>
          <Box sx={{ display: "flex", gap: "50px" }}></Box>
        </Box>
        <EventInputForm
          setTitle={setTitle}
          setPhotoboothName={setPhotoboothName}
          setRepresentativeImage={setRepresentativeImage}
          setImage={setImage}
          description={description}
          setDescription={setDescription}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          hashtag={hashtag}
          setHashtag={setHashtag}
        />
      </Box>
    </Box>
  );
}
