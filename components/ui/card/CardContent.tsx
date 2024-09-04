type CardContentProps = {
  children?: React.ReactNode;
  className?: string;
};

const CardContent = ({ children, className }: CardContentProps) => {
  return <div className={className}>{children}</div>;
};

export default CardContent;
