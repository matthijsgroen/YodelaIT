export const stringToBase64 = (string) => {
  const bytes = new TextEncoder().encode(string);
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte)
  ).join("");
  return btoa(binString);
};

export const base64ToString = (base64) => {
  const binString = atob(base64);
  return new TextDecoder().decode(
    Uint8Array.from(binString, (m) => m.codePointAt(0))
  );
};

export const urlToEditor = (codeSample: string): URL => {
  const contents = stringToBase64(codeSample);
  const url = new URL(document.location.href);
  url.pathname = "/probeer-het";
  url.hash = `code/${contents}`;

  return url;
};
