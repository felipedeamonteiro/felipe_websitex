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
      <a className={buttonColorHex} href={href}>
        <span className={buttonColorHex}></span>
        <span className={buttonColorHex}></span>
        <span className={buttonColorHex}></span>
        <span className={buttonColorHex}></span>
        {children}
      </a>
    </div>
  );
};

export default NeonButtonReal;
