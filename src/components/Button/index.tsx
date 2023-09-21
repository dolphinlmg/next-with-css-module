import style from './Button.module.scss';

interface ButtonProps {
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

export default function Button({ width, height, children }: ButtonProps) {
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
    >
      {children}
    </button>
  );
}
