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

  const onCheckHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: string
  ) => {
    e.preventDefault();
    setCheck(!check);
    CheckedItemHandler(data, e.target.checked);
  };

  const CheckedItemHandler = (data: string, checked: boolean) => {
    if (checked) {
      setHashtag((prev) => [...prev, data]);
      return;
    }

    if (!checked && hashtag.includes(data)) {
      setHashtag(hashtag.filter((item) => item !== data));

      return;
    }
    return;
  };

  return (
    <FormControlLabel
      label={hashtagData.value}
      control={
        <Checkbox
          checked={check}
          onChange={(e) => onCheckHandler(e, hashtagData.tag)}
        />
      }
    />
  );
}
