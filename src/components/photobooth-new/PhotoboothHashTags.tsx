import { Box, TextField, Typography } from "@mui/material";
import { PhotoboothHashTagProps } from "../../interface/PhotoboothNew.interface";

export default function PhotoboothHashTags({
  hashtag,
  setHashtag,
}: PhotoboothHashTagProps) {
  const handleHashTagChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    e.preventDefault();
    const updatedHashtags = [...hashtag];
    updatedHashtags[index] = e.target.value;
    setHashtag(updatedHashtags);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {[0, 1, 2, 3].map((index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="subtitle1"
              sx={{ margin: "0px 10px 0px 10px" }}
            >{`${index + 1}.`}</Typography>
            <TextField
              label={`해시태그`}
              variant="outlined"
              value={hashtag[index] ? hashtag[index] : ""}
              onChange={(e) => handleHashTagChange(e, index)}
            />
          </Box>
        ))}
      </Box>
    </>
  );
}
