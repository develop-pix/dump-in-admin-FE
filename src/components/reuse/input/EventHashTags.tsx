import { Box } from "@mui/material";
import CheckBox from "./CheckBox";
import { EventHashTagProps } from "../../../interface/reuse/Input.interface";

export default function EventHashTags({
  hashtag,
  setHashtag,
}: EventHashTagProps) {
  /* Event Hashtag는 5개 고정 */
  const hashtagInfo = [
    { id: 0, tag: "캐릭터", value: "캐릭터" },
    { id: 1, tag: "콜라보", value: "콜라보" },
    { id: 2, tag: "연예인", value: "연예인" },
    { id: 3, tag: "계절", value: "계절" },
    { id: 4, tag: "이달의프레임", value: "이달의 프레임" },
  ];

  return (
    <>
      <Box sx={{ display: "flex", gap: "15px" }}>
        {hashtagInfo.map((data) => {
          return (
            <CheckBox
              hashtagData={data}
              hashtag={hashtag}
              setHashtag={setHashtag}
              key={data.id}
            />
          );
        })}
      </Box>
    </>
  );
}
