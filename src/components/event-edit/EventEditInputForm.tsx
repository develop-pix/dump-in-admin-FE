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
    const tempData = [
      {
        id: "1",
        representativeImage:
          "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
        image: [
          "https://upload.wikimedia.org/wikipedia/ko/a/a6/Pok%C3%A9mon_Pikachu_art.png",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BTS_during_a_White_House_press_conference_May_31%2C_2022_%28cropped%29.jpg/500px-BTS_during_a_White_House_press_conference_May_31%2C_2022_%28cropped%29.jpg",
        ],
        photoboothName: "인생네컷",
        title: "대충30글자대충30글자대충30글자대충30글자대충30글자",
        description:
          "1번 글Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi adipisci ullam pariatur dignissimos expedita minus, tempora, culpa voluptate eaque asperiores facilis velit impedit quidem quis eos libero veritatis nulla voluptatem?",
        startDate: new Date("2022,10,16"),
        endDate: new Date("2023,11,23"),
        hashtag: ["캐릭터", "연예인"],
      },
      {
        id: "2",
        representativeImage:
          "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
        image: [],
        photoboothName: "하루필름",
        title: "제목제목제목",
        description:
          "2번 글Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum assumenda, hic pariatur consequuntur excepturi eaque perferendis architecto praesentium mollitia quod modi quaerat id eos quisquam adipisci delectus earum deserunt?",
        startDate: new Date("2022,9,16"),
        endDate: new Date("2023,11,25"),
        hashtag: ["콜라보"],
      },
      {
        id: "3",
        representativeImage:
          "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
        image: [
          "https://upload.wikimedia.org/wikipedia/ko/a/a6/Pok%C3%A9mon_Pikachu_art.png",
        ],
        photoboothName: "포토이즘",
        title: "TestTest",
        description: "3번 짧은글",
        startDate: new Date("2023,07,16"),
        endDate: new Date("2024,11,23"),
        hashtag: ["계절", "이달의프레임"],
      },
      {
        id: "4",
        representativeImage:
          "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
        image: [
          "https://upload.wikimedia.org/wikipedia/ko/a/a6/Pok%C3%A9mon_Pikachu_art.png",
        ],
        photoboothName: "포토매틱",
        title: "다음주까지 50% 할인",
        description:
          "4번 글Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ex atque blanditiis aut neque error dignissimos adipisci incidunt nobis. Veniam ut nemo quos nam a officiis necessitatibus dolorem ratione sed.",
        startDate: new Date("2023,12,11"),
        endDate: new Date("2024,1,12"),
        hashtag: ["캐릭터", "계절", "이달의프레임"],
      },
      {
        id: "5",
        representativeImage:
          "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
        image: [
          "https://upload.wikimedia.org/wikipedia/ko/a/a6/Pok%C3%A9mon_Pikachu_art.png",
        ],
        photoboothName: "포토매틱",
        title: "내일까지 오면 1+1",
        description:
          "5번 글 채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시다300글자채워봅시끝",
        startDate: new Date("2021,09,16"),
        endDate: new Date("2022,1,5"),
        hashtag: ["콜라보", "연예인"],
      },
      {
        id: "6",
        representativeImage:
          "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
        image: [
          "https://upload.wikimedia.org/wikipedia/ko/a/a6/Pok%C3%A9mon_Pikachu_art.png",
        ],
        photoboothName: "포토매틱",
        title: "강아지와 함께하면 90% 할인",
        description:
          "6번글Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas recusandae eius amet, qui unde labore omnis aliquid facilis delectus nam voluptas esse at laborum, error rem ipsum! Omnis, nesciunt!",
        startDate: new Date("2023,01,22"),
        endDate: new Date("2023,11,23"),
        hashtag: [],
      },
      {
        id: "7",
        representativeImage:
          "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
        image: [
          "https://upload.wikimedia.org/wikipedia/ko/a/a6/Pok%C3%A9mon_Pikachu_art.png",
        ],
        photoboothName: "인생네컷",
        title: "신규 오픈 5% 할인",
        description: "7번글 할인할인",
        startDate: new Date("2022,10,16"),
        endDate: new Date("2023,11,23"),
        hashtag: ["계절"],
      },
      {
        id: "8",
        representativeImage:
          "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
        image: [
          "https://upload.wikimedia.org/wikipedia/ko/a/a6/Pok%C3%A9mon_Pikachu_art.png",
        ],
        photoboothName: "인생네컷",
        title: "회원가입하면 4컷 무료",
        description:
          "8번글번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더긴글한번더",
        startDate: new Date("2023,11,16"),
        endDate: new Date("2023,11,23"),
        hashtag: ["캐릭터", "연예인"],
      },
      {
        id: "9",
        representativeImage:
          "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
        image: [
          "https://upload.wikimedia.org/wikipedia/ko/a/a6/Pok%C3%A9mon_Pikachu_art.png",
        ],
        photoboothName: "인생네컷",
        title: "짧",
        description: "9번글",
        startDate: new Date("2020,08,11"),
        endDate: new Date("2021,02,25"),
        hashtag: [],
      },
      {
        id: "10",
        representativeImage:
          "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
        image: [
          "https://upload.wikimedia.org/wikipedia/ko/a/a6/Pok%C3%A9mon_Pikachu_art.png",
        ],
        photoboothName: "하루필름",
        title: "제목",
        description: "10번글description10",
        startDate: new Date("2023,01,16"),
        endDate: new Date("2024,11,23"),
        hashtag: ["콜라보", "이달의프레임"],
      },
      {
        id: "11",
        representativeImage:
          "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
        image: [
          "https://upload.wikimedia.org/wikipedia/ko/a/a6/Pok%C3%A9mon_Pikachu_art.png",
        ],
        photoboothName: "하루필름",
        title: "test123",
        description: "testtestetstewststse",
        startDate: new Date("2022,10,11"),
        endDate: new Date("2023,10,11"),
        hashtag: ["연예인"],
      },
    ];

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
