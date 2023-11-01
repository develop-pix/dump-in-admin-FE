import { Box } from "@mui/material";
import { customColors } from "../../styles/base/Variable.style";
import PhotoboothInputForm from "./PhotoboothInputForm";
import { useState } from "react";
import CancelButton from "../reuse/button/CancelButton";
import SubmitButton from "../reuse/button/SubmitButton";
import { useNavigate } from "react-router-dom";

export default function PhotoboothNew() {
  const [photoboothName, setPhotoboothName] = useState<string>("");
  const [image, setImage] = useState<string[]>([]);
  const [hashtag, setHashtag] = useState<string[]>([]);

  const navigate = useNavigate();

  /* 등록하기 버튼 입력시 */
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      /* API 나오면 필수 값 검증 해야함. */
      console.log(photoboothName);
      /* image[0]은 대표사진, 나머지는 일반 사진으로 변수 변경 하여 전송 */
      console.log(image);
      console.log(hashtag);
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
      <Box
        sx={{
          width: "95%",
        }}
      >
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
            포토부스 관리
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <CancelButton />
            <SubmitButton value="등록" />
          </Box>
        </Box>
        <PhotoboothInputForm
          photoboothName={photoboothName}
          setPhotoboothName={setPhotoboothName}
          image={image}
          setImage={setImage}
          hashtag={hashtag}
          setHashtag={setHashtag}
        />
      </Box>
    </Box>
  );
}
