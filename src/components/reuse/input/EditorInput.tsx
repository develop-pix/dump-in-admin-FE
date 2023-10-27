import { Box } from "@mui/material";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { customColors } from "../../../styles/base/Variable.style";
import { EditorInputProps } from "../../../interface/reuse/Input.interface";

export default function EditorInput({ input, setInput }: EditorInputProps) {
  /* Editor상태에 대해서 분석 해야함 레코드? */
  const onEditorStateChange = (editorState: EditorState) => {
    setInput(editorState);
  };

  return (
    <Box
      sx={{
        border: `1px solid ${customColors.grey} `,
        borderRadius: "5px",
        padding: "30px",
        height: "300px",
      }}
    >
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor"
        toolbarClassName="toolbar-class"
        toolbar={{
          options: ["inline", "fontSize", "colorPicker", "list", "link"],
        }}
        placeholder="내용을 작성해주세요."
        localization={{
          locale: "ko",
        }}
        editorState={input}
        onEditorStateChange={onEditorStateChange}
      />
    </Box>
  );
}
