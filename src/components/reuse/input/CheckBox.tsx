import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { CheckBoxProps } from "../../../interface/reuse/Input.interface";
import { useState } from "react";

export default function CheckBox({
  hashtagData,
  hashtag,
  setHashtag,
}: CheckBoxProps) {
  const [check, setCheck] = useState<boolean>(false);

  /* HashTag 배열에 추가 or 삭제, 3개이상 선택시 Alert */
  const onCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      if (hashtag.length >= 3) {
        return alert("해시태그는 3개까지 선택 가능합니다.");
      }
      setCheck(!check);
      setHashtag((prev) => [...prev, hashtagData.tag]);
      return;
    }

    if (!e.target.checked && hashtag.includes(hashtagData.tag)) {
      setCheck(!check);
      setHashtag(hashtag.filter((item) => item !== hashtagData.tag));
      return;
    }
    return;
  };

  return (
    <FormControlLabel
      label={hashtagData.value}
      control={<Checkbox checked={check} onChange={onCheckHandler} />}
    />
  );
}
