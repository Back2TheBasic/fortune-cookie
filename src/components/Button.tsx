interface IButton {
  name: string;
  onClick: () => void;
}

const Button = ({ name, onClick }: IButton) => {
  return (
    <button type="button" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
