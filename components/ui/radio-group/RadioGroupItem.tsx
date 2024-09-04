type RadioGroupItemProps = {
  children?: React.ReactNode;
  value: string;
  id: string;
};

const RadioGroupItem = ({ children, value, id }: RadioGroupItemProps) => {
  return <div id={id}>{children}</div>;
};

export default RadioGroupItem;
