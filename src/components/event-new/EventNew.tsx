import { Box } from "@mui/material";
import { customColors } from "../../styles/base/Variable.style";
import EventNewInputForm from "./EventNewInputForm";
import { useState } from "react";
import { EditorState } from "draft-js";
import CancelButton from "../reuse/button/CancelButton";
import SubmitButton from "../reuse/button/SubmitButton";
import { useNavigate } from "react-router-dom";
import { base64ToBlob } from "../../utils";
import { uploadFile } from "../../hooks";
import { stateToHTML } from "draft-js-export-html";
import { EventNewProps } from "../../interface/EventNew.interface";

export default function EventNew({ eventCreated }: EventNewProps) {
  const [title, setTitle] = useState<string>("");
  const [photoboothName, setPhotoboothName] = useState<string>("");
  const [image, setImage] = useState<string[]>([]);
  const [description, setDescription] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [hashtag, setHashtag] = useState<string[]>([]);

  const navigate = useNavigate();

  /* 등록하기 버튼 입력시 */
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const blobImages = image.map((data) => base64ToBlob(data));
      const urlImages = await Promise.all(blobImages.map(uploadFile));

      const eventCreateData = {
        title,
        content: stateToHTML(description.getCurrentContent()),
        brandName: photoboothName,
        startDate,
        endDate,
        images: urlImages,
        hashtags: hashtag,
        isPublic: true,
        mainThumbnailUrl: urlImages[0],
      };

      eventCreated(eventCreateData);

      navigate(-1);
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
        minWidth: "20vw",
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
              backgroundColor: `${customColors.sub_pink}`,
              fontSize: "18px",
            }}
          >
            이벤트 관리
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <CancelButton />
            <SubmitButton value="등록" />
          </Box>
        </Box>
        <EventNewInputForm
          title={title}
          setTitle={setTitle}
          photoboothName={photoboothName}
          setPhotoboothName={setPhotoboothName}
          image={image}
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
