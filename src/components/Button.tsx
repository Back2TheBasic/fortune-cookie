interface IButton {
  name: string;
}

const Button = ({ name }: IButton) => {
  return <button type="button">{name}</button>;
};

export default Button;
