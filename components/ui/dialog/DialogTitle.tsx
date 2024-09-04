type DialogTitleProps = {
  children?: React.ReactNode;
  className?: string;
};

const DialogTitle = ({ children, className }: DialogTitleProps) => {
  return <div className={className}>{children}</div>;
};

export default DialogTitle;
