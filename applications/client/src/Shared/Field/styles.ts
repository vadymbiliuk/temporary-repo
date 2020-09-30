import styled from '@emotion/styled';
import {darkColors, lightColors} from '../../Theme/Colors';
import {FieldSize, FieldSizes, FieldColor, FieldColors} from './Field';

const handleBackgroundColor = (color: FieldColor) => {
  if (color === FieldColors.secondary) return darkColors.blackBeauty;

  return darkColors.aswadBlack;
};

const handlePadding = (size: FieldSize) => {
  if (size === FieldSizes.large) return '.75rem 1rem';
  if (size === FieldSizes.small) return '.35rem .75rem';

  return '.5rem 1rem';
};

const handleFontSize = (size: FieldSize) => {
  if (size === FieldSizes.large) return '1.25rem';
  if (size === FieldSizes.small) return '.875rem';

  return '0.95rem';
};

const handleBorderRadius = (size: FieldSize) => {
  if (size === FieldSizes.large) return '1.3rem';
  if (size === FieldSizes.small) return '.8rem';

  return '1rem';
};

interface IField {
  flexible: boolean;
  mb: number;
}

interface IInput {
  color: FieldColor;
  fieldSize: FieldSize;
}

export const FieldStyles = {
  Field: styled.div<IField>`
    display: flex;
    flex: ${({flexible}) => flexible && 1};
    flex-direction: column;

    margin-bottom: ${({mb}) => `${mb}px`};
  `,
  Input: styled.input<IInput>`
    height: auto;

    padding: ${({fieldSize}) => handlePadding (fieldSize)};

    background-color: ${({color}) => handleBackgroundColor (color)};
    border: 1px solid transparent;
    border-radius: ${({fieldSize}) => handleBorderRadius (fieldSize)};

    color: ${lightColors.white};
    font-size: ${({fieldSize}) => handleFontSize (fieldSize)};
    font-weight: 300;
    line-height: 1.5;

    will-change: border-color, box-shadow;
    box-shadow: none;
    transition: box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06),
      border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);

    &:hover {
      border-color: ${darkColors.nightGrey};
    }

    &:active,
    &:focus {
      outline: 0;

      border-color: ${darkColors.blueEtUneNuit};
    }
  `,
};
