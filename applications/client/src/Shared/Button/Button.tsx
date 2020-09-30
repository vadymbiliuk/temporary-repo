import React from 'react';
import {EnumOf} from '../../Utils';
import {ButtonStyles as S} from './styles';

export type ButtonColor = 'primary' | 'secondary' | 'info';

export type ButtonSize = 'large' | 'normal' | 'small';

export const ButtonColors: EnumOf<ButtonColor> = {
  primary: 'primary', // Default
  secondary: 'secondary',
  info: 'info',
};

export const ButtonSizes: EnumOf<ButtonSize> = {
  large: 'large',
  normal: 'normal', // Default
  small: 'small',
};

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  size?: ButtonSize;
  block?: boolean;
  mr?: number;
  mb?: number;
}

const Button: React.FC<IButton> = ({
  onClick,
  color = ButtonColors.primary,
  size = ButtonSizes.normal,
  block = false,
  mr = 0,
  mb = 0,
  disabled,
  children,
  type = 'button',
}) => (
  <S.Button
    onClick={onClick}
    color={color}
    size={size}
    block={block}
    mr={mr}
    mb={mb}
    disabled={disabled}
    type={type}
  >
    {children}
  </S.Button>
);

export {Button};
