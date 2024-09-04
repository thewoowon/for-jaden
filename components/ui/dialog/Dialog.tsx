type DialogProps = {
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  children: React.ReactNode;
};

const Dialog = ({ onOpenChange, open, children }: DialogProps) => {
  return <div>{open && <div>{children}</div>}</div>;
};

export default Dialog;
