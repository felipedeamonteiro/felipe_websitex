import React, { TextareaHTMLAttributes } from "react";

import { Container } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  darkMode: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  darkMode,
  ...props
}) => {
  return (
    <Container darkMode={darkMode}>
      <textarea name={name} {...props} />
      {label ? <label htmlFor={name}>{label}</label> : ""}
    </Container>
  );
};

export default TextArea;
