const NON_BREAKING_SPACE = "\u00A0";

const createSpanElement = (char: string, index: number) => (
  <span key={index} className="inline-block">
    {char || NON_BREAKING_SPACE}
  </span>
);

export const splitTextIntoSpans = (text: string) => {
  return text.split("").map(createSpanElement);
};
