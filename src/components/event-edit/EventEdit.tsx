import { Box } from "@mui/material";
import { EditorState } from "draft-js";
import { useState } from "react";
import { customColors } from "../../styles/base/Variable.style";
import CancelButton from "../reuse/button/CancelButton";
import SubmitButton from "../reuse/button/SubmitButton";
import EventEditInputForm from "./EventEditInputForm";
import { stateToHTML } from "draft-js-export-html";
import { uploadFile } from "../../hooks";
import { base64ToBlob } from "../../utils";
import { EventEditProps } from "../../interface/EventEdit.interface";
import { useNavigate } from "react-router-dom";

export default function EventEdit({
  eventEditData,
  params,
  eventUpdated,
}: EventEditProps) {
  const [title, setTitle] = useState<string>("");
  const [photoboothName, setPhotoboothName] = useState<string>("");
  const [image, setImage] = useState<string[]>([""]);
  const [description, setDescription] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [hashtag, setHashtag] = useState<string[]>([""]);

  const navigate = useNavigate();

  /* 등록하기 버튼 입력시 */
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const blobImages = image.map((data) => base64ToBlob(data));
      const urlImages = await Promise.all(blobImages.map(uploadFile));

      const eventEditData = {
        title,
        content: stateToHTML(description.getCurrentContent()),
        brandName: photoboothName,
        startDate,
        endDate,
        images: urlImages,
        hashtags: hashtag,
        id: params,
        isPublic: true,
        mainThumbnailUrl: urlImages[0],
      };

      eventUpdated(eventEditData);

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
            <SubmitButton value={"수정"} />
          </Box>
        </Box>
        <EventEditInputForm
          title={title}
          data={eventEditData?.data}
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
