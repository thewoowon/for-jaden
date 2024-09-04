type DialogContentProps = {
  children?: React.ReactNode;
  className?: string;
};

const DialogContent = ({ children, className }: DialogContentProps) => {
  return <div className={className}>{children}</div>;
};

export default DialogContent;
