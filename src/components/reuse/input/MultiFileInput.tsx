import { Box, Button } from "@mui/material";
import { MultiFileInputProps } from "../../../interface/reuse/Input.interface";
import { VisuallyHiddenInput } from "../../../styles/reuse/Input.style";
import { customColors } from "../../../styles/base/Variable.style";

export default function FileInput({ image, setImage }: MultiFileInputProps) {
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    /* 업로드한 파일이 없거나 5개 이상일경우 return */
    if (!files) {
      return;
    }
    if (files.length > 5) {
      return alert("최대 5개 사진까지 첨부 할 수 있습니다.");
    }

    const readAndPreview = (file: File) => {
      const reader = new FileReader();

      reader.onload = () => {
        setImage((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    };

    if (files) {
      [].forEach.call(files, readAndPreview);
    }
  };

  const onClickDeleteFile = (
    e: React.MouseEvent<HTMLButtonElement>,
    url: string
  ) => {
    e.stopPropagation();
    e.preventDefault();
    const filterImage = image.filter((imageUrl) => imageUrl !== url);
    setImage(filterImage);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {image.map((url, index) => {
          return (
            <Button
              variant="outlined"
              color="error"
              key={index}
              sx={[
                {
                  border: `2px solid ${customColors.white}`,
                  width: "200px",
                  minHeight: "200px",
                  padding: "0",
                },
              ]}
              onClick={(e) => onClickDeleteFile(e, url)}
            >
              {index === 0 ? (
                <Box>
                  <Box
                    sx={{
                      position: "absolute",
                      right: "0",
                      backgroundColor: "red",
                      padding: "3px 10px 3px 10px",
                      color: `${customColors.white}`,
                    }}
                  >
                    대표
                  </Box>
                  <img width="100%" height="100%" src={url} />
                </Box>
              ) : (
                <img width="100%" height="100%" src={url} />
              )}
            </Button>
          );
        })}
      </Box>
      <Button component="label" variant="contained" sx={{ width: "200px" }}>
        이미지 업로드
        <VisuallyHiddenInput
          multiple
          type="file"
          accept="image/*"
          onChange={onChangeFile}
        />
      </Button>
    </Box>
  );
}
