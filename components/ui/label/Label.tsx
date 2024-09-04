type LabelProps = {
  children?: React.ReactNode;
  className?: string;
  htmlFor?: string;
};

const Label = ({ children, className, htmlFor }: LabelProps) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}{" "}
    </label>
  );
};

export default Label;
