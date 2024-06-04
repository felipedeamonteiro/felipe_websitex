import React, { type ButtonHTMLAttributes } from 'react';
import style from './NeonButtonReal.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface NeonButtonProps extends ButtonProps {
  children: string;
  buttonColorHex: string;
  href: string;
}

const NeonButtonReal: React.FC<NeonButtonProps> = ({
  children,
  buttonColorHex,
  href,
}) => {
  return (
    <div className={style.buttonContainer}>
      <a className={style[buttonColorHex]} href={href}>
        <span className={style[buttonColorHex]}></span>
        <span className={style[buttonColorHex]}></span>
        <span className={style[buttonColorHex]}></span>
        <span className={style[buttonColorHex]}></span>
        {children}
      </a>
    </div>
  );
};

export default NeonButtonReal;
