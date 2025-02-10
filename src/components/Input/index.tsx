import React, { InputHTMLAttributes, useState } from "react";
import { FieldError } from "react-hook-form";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  updateDefaultValue?: string;
  darkMode: boolean;
  error?: any;
}

const Input: React.FC<InputProps> = ({
  disabled = false,
  label,
  name,
  placeholder,
  updateDefaultValue,
  darkMode,
  error,
  ...rest
}) => {
  const [defaultValueState, setDefaultValueState] = useState("");

  return (
    <Container darkMode={darkMode} isErrored={!!error} isDisabled={disabled}>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        value={defaultValueState}
        onChange={(e) => setDefaultValueState(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") e.preventDefault();
        }}
        {...rest}
      />
      {label ? <label htmlFor={name}>{label}</label> : ""}
      <span style={{ color: "#c53030" }}>{error}</span>
    </Container>
  );
};

export default Input;
