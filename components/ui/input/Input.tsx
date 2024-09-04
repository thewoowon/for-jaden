import { InputHTMLAttributes } from "react";

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} />;
};

export default Input;
