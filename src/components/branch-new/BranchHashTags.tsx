import { Box, TextField, Typography } from "@mui/material";
import { BranchHashTagProps } from "../../interface/BranchNew.interface";

export default function BranchHashTags({
  hashtag,
  setHashtag,
}: BranchHashTagProps) {
  const handleHashTagChange = (index: number, value: string) => {
    const updatedHashtags = [...hashtag];
    updatedHashtags[index] = value;
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
              value={hashtag[index]}
              onChange={(e) => handleHashTagChange(index, e.target.value)}
            />
          </Box>
        ))}
      </Box>
    </>
  );
}
