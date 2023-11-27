interface ITitle {
  title: string;
}

const Title = ({ title }: ITitle) => {
  return <h1>{title}</h1>;
};

export default Title;
