interface ITitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: ITitleProps) => {
  return <h1>{children}</h1>;
};

export default Title;
