import { Box, Typography, TextField } from "@mui/material";
import { customColors } from "../../styles/base/Variable.style";
import { BranchInputFormProps } from "../../interface/BranchNew.interface";
import BranchHashTags from "./BranchHashTags";
import MultiFileInput from "../reuse/input/MultiFileInput";

export default function BranchInputForm({
  photoboothName,
  setPhotoboothName,
  image,
  setImage,
  hashtag,
  setHashtag,
}: BranchInputFormProps) {
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
          <BranchHashTags hashtag={hashtag} setHashtag={setHashtag} />
        </Box>
      </Box>
    </Box>
  );
}
