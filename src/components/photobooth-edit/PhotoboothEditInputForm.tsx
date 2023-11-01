import { useEffect } from "react";
import { customColors } from "../../styles/base/Variable.style";
import { Box, Typography, TextField } from "@mui/material";
import MultiFileInput from "../reuse/input/MultiFileInput";
import PhotoboothHashTags from "../photobooth-new/PhotoboothHashTags";
import { PhotoboothEditInputFormProps } from "../../interface/PhotoboothEdit.interface";
import { useLocation } from "react-router-dom";

export default function PhotoboothEditInputForm({
  photoboothName,
  setPhotoboothName,
  image,
  setImage,
  hashtag,
  setHashtag,
}: PhotoboothEditInputFormProps) {
  const location = useLocation().pathname.split("/");

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
        hashtag: ["캐릭터", "연예인"],
      },
      {
        id: "2",
        representativeImage:
          "https://upload.wikimedia.org/wikipedia/ko/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png",
        image: [],
        photoboothName: "하루필름",
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
        hashtag: ["연예인"],
      },
    ];

    tempData.map((data) => {
      if (data.id === currentID) {
        setImage([data.representativeImage].concat(data.image));
        setPhotoboothName(data.photoboothName);
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
            포토부스명
          </Typography>
          <TextField
            variant="outlined"
            label="포토부스명"
            value={photoboothName}
            onChange={(e) => setPhotoboothName(e.target.value)}
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
            해시태그
          </Typography>
          <PhotoboothHashTags hashtag={hashtag} setHashtag={setHashtag} />
        </Box>
      </Box>
    </Box>
  );
}
