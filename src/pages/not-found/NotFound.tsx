import { css } from "@emotion/react";

const NotFoundAlert = css`
  color: black;
  font-size: 50px;
  margin: 10px;
`;

export default function NotFound() {
  return (
    <div css={NotFoundAlert}>
      NotFound 경로 오류!! 배포시 해당 경로 파일 삭제!!
    </div>
  );
}
