import styled from '@emotion/styled';
import {darkColors, lightColors} from '../../Theme/Colors';
import {ButtonColor, ButtonColors, ButtonSize, ButtonSizes} from './Button';

const handleBackgroundColor = (color: ButtonColor) => {
  if (color === ButtonColors.secondary) return darkColors.aswadBlack;
  if (color === ButtonColors.info) return darkColors.sorxRed;

  return darkColors.blueEtUneNuit;
};

const handlePadding = (size: ButtonSize) => {
  if (size === ButtonSizes.large) return '.75rem 1.75rem';
  if (size === ButtonSizes.small) return '.35rem 1rem';

  return '0.75rem 1.25rem';
};

const handleFontSize = (size: ButtonSize) => {
  if (size === ButtonSizes.large) return '1.125rem';
  if (size === ButtonSizes.small) return '.75rem';

  return '0.875rem';
};

const handleLineHeight = (size: ButtonSize) => {
  if (size === ButtonSizes.large) return 1.5;
  if (size === ButtonSizes.small) return 1.5;

  return 1.125;
};

const handleBorderRadius = (size: ButtonSize) => {
  if (size === ButtonSizes.large) return '1.3rem';
  if (size === ButtonSizes.small) return '.8rem';

  return '1rem';
};

interface IButton {
  color: ButtonColor;
  size: ButtonSize;
  block: boolean;
  mr: number;
  mb: number;
}

export const ButtonStyles = {
  Button: styled.button<IButton>`
    display: ${({block}) => (block ? 'block' : 'flex')};
    align-items: center;

    width: ${({block}) => (block ? '100%' : 'auto')};

    padding: ${({size}) => handlePadding (size)};
    margin-right: ${({mr}) => `${mr}px`};
    margin-bottom: ${({mb}) => `${mb}px`};

    background-color: ${({color}) => handleBackgroundColor (color)};
    border: 1px solid transparent;
    border-radius: ${({size}) => handleBorderRadius (size)};

    color: ${lightColors.white};
    font-size: ${({size}) => handleFontSize (size)};
    font-weight: 300;
    line-height: ${({size}) => handleLineHeight (size)};

    transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
    cursor: pointer;

    &:disabled {
      opacity: 0.65;
      cursor: not-allowed;
    }
  `,
};
