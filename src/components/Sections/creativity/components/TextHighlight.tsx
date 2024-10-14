import React, { PropsWithChildren } from "react";

type TextHighlightProps = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

function TextHighlight({
  children,
  ...props
}: PropsWithChildren<TextHighlightProps>) {
  return (
    <span className="font-bold" {...props}>
      {" "}
      {children}
    </span>
  );
}

export default TextHighlight;
