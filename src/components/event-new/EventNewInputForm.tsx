import { Box, Typography } from "@mui/material";
import { customColors } from "../../styles/base/Variable.style";
import TitleInput from "../reuse/input/TitleInput";
import { EventNewInputFormProps } from "../../interface/EventNew.interface";
import { SelectInputData } from "../../interface/reuse/Input.interface";
import SelectInput from "../reuse/input/SelectInput";
import { useEffect } from "react";
import EditorInput from "../reuse/input/EditorInput";
import DatePickerInput from "../reuse/input/DatePickerInput";
import EventHashTags from "../reuse/input/EventHashTags";
import MultiFileInput from "../reuse/input/MultiFileInput";

export default function EventNewInputForm({
  title,
  setTitle,
  photoboothName,
  setPhotoboothName,
  image,
  setImage,
  description,
  setDescription,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  hashtag,
  setHashtag,
}: EventNewInputFormProps) {
  /* API 생기면 서버에서 얻어옴, 동시에 PhotoboothName은 첫번째 값으로 초기화 */
  const tempPhotoboothData: SelectInputData[] = [
    { photoboothId: 0, value: "포토그레이" },
    { photoboothId: 1, value: "하루필름" },
  ];
  useEffect(() => {
    setPhotoboothName(tempPhotoboothData[0].value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        width: "auto", // width를 "auto"로 설정
        display: "inline-block", // display 속성을 "inline-block"으로 설정
        overflow: "hidden",
        border: "2px solid",
        borderColor: `${customColors.sub_pink}`,
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
          <TitleInput input={title} setInput={setTitle} />
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
          <SelectInput
            data={tempPhotoboothData}
            input={photoboothName}
            setInput={setPhotoboothName}
          />
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
          <MultiFileInput image={image} setImage={setImage} />
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
          <Box sx={{ display: "flex", gap: "20px" }}>
            <DatePickerInput
              date={startDate}
              setDate={setStartDate}
              name={"이벤트 시작 일"}
            />
            -
            <DatePickerInput
              date={endDate}
              setDate={setEndDate}
              name={"이벤트 종료 일"}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{ width: "130px" }}
            fontSize={18}
            fontWeight={600}
            display="flex"
            alignItems="center"
          >
            해시태그
          </Typography>
          <EventHashTags hashtag={hashtag} setHashtag={setHashtag} />
        </Box>
      </Box>
    </Box>
  );
}
