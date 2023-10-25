import { Box, Typography } from "@mui/material";
import { customColors } from "../../styles/base/Variable.style";
import TitleInput from "../reuse/input/TitleInput";
import { EventInputFormProps } from "../../interface/EventNew.interface";
import { SelectInputData } from "../../interface/reuse/Input.interface";
import SelectInput from "../reuse/input/SelectInput";
import { useEffect } from "react";
import FileInput from "../reuse/input/FileInput";
import EditorInput from "../reuse/input/EditorInput";

export default function EventInputForm({
  setTitle,
  setPhotoboothName,
  setRepresentativeImage,
  setImage,
  description,
  setDescription,
  setTerm,
  setHashtag,
}: EventInputFormProps) {
  /* API 생기면 서버에서 얻어옴 */

  /* */
  const tempPhotoboothData: SelectInputData[] = [
    { photoboothId: 0, value: "포토이즘" },
    { photoboothId: 1, value: "인생네컷" },
    { photoboothId: 2, value: "하루필름" },
    { photoboothId: 3, value: "포토매틱" },
  ];

  useEffect(() => {
    setPhotoboothName(tempPhotoboothData[0].value);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        border: "2px solid",
        borderColor: `${customColors.main}`,
        borderRadius: "0px 10px 10px 10px",
      }}
    >
      <Box
        sx={{
          margin: "50px 20px 50px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "70px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{ width: "130px" }}
            fontSize={18}
            fontWeight={600}
            display="flex"
            alignItems="center"
          >
            제목
          </Typography>
          <TitleInput setInput={setTitle} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{ width: "130px" }}
            fontSize={18}
            fontWeight={600}
            display="flex"
            alignItems="center"
          >
            포토부스명
          </Typography>
          <SelectInput data={tempPhotoboothData} setInput={setPhotoboothName} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{ width: "130px" }}
            fontSize={18}
            fontWeight={600}
            display="flex"
            alignItems="center"
          >
            이미지
          </Typography>
          <FileInput />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{ width: "130px" }}
            fontSize={18}
            fontWeight={600}
            display="flex"
            alignItems="center"
          >
            설명
          </Typography>
          <EditorInput input={description} setInput={setDescription} />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{ width: "130px" }}
            fontSize={18}
            fontWeight={600}
            display="flex"
            alignItems="center"
          >
            기간
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{ width: "130px" }}
            fontSize={18}
            fontWeight={600}
            display="flex"
            alignItems="center"
          >
            해쉬태그
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
