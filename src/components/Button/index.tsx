import style from './Button.module.scss';

interface ButtonProps {
  width?: number;
  height?: number;
  children?: React.ReactNode;
  onClick?: VoidFunction;
}

export default function Button({
  width,
  height,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={style.container}
      style={
        !!width && !!height
          ? {
              width: `${width}px`,
              height: `${height}px`,
            }
          : {}
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
