type RadioGroupProps = {
  children?: React.ReactNode;
  className?: string;
  value?: string;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
};

const RadioGroup = ({ children, className }: RadioGroupProps) => {
  return <div className={className}>{children}</div>;
};

export default RadioGroup;
