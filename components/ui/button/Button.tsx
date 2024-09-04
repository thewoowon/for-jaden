import { ButtonHTMLAttributes } from "react";

const Button = ({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}></button>;
};

export default Button;
