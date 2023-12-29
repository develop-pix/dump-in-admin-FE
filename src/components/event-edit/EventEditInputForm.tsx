import { useEffect } from "react";
import { customColors } from "../../styles/base/Variable.style";
import { Box, Typography } from "@mui/material";
import TitleInput from "../reuse/input/TitleInput";
import SelectInput from "../reuse/input/SelectInput";
import MultiFileInput from "../reuse/input/MultiFileInput";
import EditorInput from "../reuse/input/EditorInput";
import DatePickerInput from "../reuse/input/DatePickerInput";
import EventHashTags from "../reuse/input/EventHashTags";
import { EventEditInputFormProps } from "../../interface/EventEdit.interface";
import { SelectInputData } from "../../interface/reuse/Input.interface";
import { useLocation } from "react-router-dom";
import { ContentState, EditorState, convertFromHTML } from "draft-js";
import { tempData } from "./TempTableData";

export default function EventEditInputForm({
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
}: EventEditInputFormProps) {
  const location = useLocation().pathname.split("/");

  /* API 생기면 서버에서 얻어옴, 동시에 PhotoboothName은 첫번째 값으로 초기화 */
  const tempPhotoboothData: SelectInputData[] = [
    { photoboothId: 0, value: "포토이즘" },
    { photoboothId: 1, value: "인생네컷" },
    { photoboothId: 2, value: "하루필름" },
    { photoboothId: 3, value: "포토매틱" },
  ];

  const GetEditData = (currentID: string) => {
    /* 표 데이터 ( Test용 나중에 API로 데이터 GET) */
    tempData.map((data) => {
      if (data.id === currentID) {
        const contentblocks = convertFromHTML(data.description);
        const contentState = ContentState.createFromBlockArray(
          contentblocks.contentBlocks,
          contentblocks.entityMap
        );

        setTitle(data.title);
        setImage([data.representativeImage].concat(data.image));
        setPhotoboothName(data.photoboothName);
        setDescription(EditorState.createWithContent(contentState));
        setStartDate(data.startDate);
        setEndDate(data.endDate);
        setHashtag(data.hashtag);
      }
    });
  };

  useEffect(() => {
    GetEditData(location[location.length - 1]);
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
