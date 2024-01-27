/**
 * Base64 인코딩 된 문자열을 Blob object로 변환
 *
 * @param base64 - 변환할 Base64로 인코딩 된 문자열
 * @param mimeType - Blob의 MIME 타입, 디폴트 값은 'image/png'.
 * @returns 디코딩 된 Base64 데이터를 대표하는 Blob object
 * @throws 주어진 문자열이 Base64 형식이 아닐때 에러
 */
export function base64ToBlob(base64: string, mimeType = "image/png"): Blob {
  if (!isBase64(base64)) throw new Error("Invalid base64 format");

  const byteCharacters = atob(base64.split(",")[1]);
  const byteArrays: Uint8Array[] = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: mimeType });
}

/**
 * 문자열이 올바른 Base64 인코딩 문자열인지 확인
 *
 * @param str - 테스트 할 문자열
 * @returns 문자열이 올바른 Base64 인코딩 문자열이면 true, 아닐시 false
 */
function isBase64(str: string) {
  const base64Regex =
    /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
  return base64Regex.test(str);
}
