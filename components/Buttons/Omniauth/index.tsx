type Props = {
  className?: string;
  text?: string;
  children?: React.ReactNode;
};

const index = ({ className, children, text }: Props) => {
  return (
    <button
      className={`flex justify-center items-center border text-13 font-400 w-316 h-37.78
      rounded-md ${className}`}
    >
      {children}
      &nbsp;
      {text}
    </button>
  );
};

export default index;
