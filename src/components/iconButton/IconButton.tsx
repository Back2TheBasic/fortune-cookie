import Image, { StaticImageData } from 'next/image';
import style from './IconButton.module.scss';

interface IIconButtonProps {
  src: StaticImageData;
  onClick?: () => void;
  shape?: string;
  alt?: string;
}

const IconButton = ({ src, alt, shape, onClick }: IIconButtonProps) => {
  return (
    <button
      type="button"
      className={`${style.button} ${style[`button--${shape}`]}`}
      onClick={onClick}
    >
      <div className={style.imageContainer}>
        <Image src={src} alt={alt || 'Icon'} layout="fill" />
      </div>
    </button>
  );
};

IconButton.defaultProps = {
  onClick: () => {},
  shape: 'default',
  alt: 'Icon',
};

export default IconButton;
