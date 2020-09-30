import styled from '@emotion/styled';
import {darkColors, lightColors} from '../../Theme/Colors';

const handleColor = (checked: boolean) =>
  checked ? lightColors.white : darkColors.nightGrey;

const handleBackgroundColor = (checked: boolean) =>
  checked ? darkColors.blueEtUneNuit : darkColors.aswadBlack;

const handleToggleColor = (checked: boolean) =>
  checked ? lightColors.white : darkColors.blackBeauty;

interface ICheckbox {
  checked: boolean;
}

export const CheckboxStyles = {
  Label: styled.label<ICheckbox>`
    position: relative;

    display: flex;
    align-items: center;

    margin-bottom: 0.75rem;

    color: ${({checked}) => handleColor (checked)};
    font-size: 1rem;

    transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
    user-select: none;
    cursor: pointer;
  `,
  HiddenDefaultCheckbox: styled.input`
    position: absolute;

    height: 0;
    width: 0;

    opacity: 0;
    cursor: pointer;
  `,
  Checkbox: styled.span<ICheckbox>`
    position: relative;

    height: 22px;
    width: 20px;
    min-height: 20px;
    min-width: 20px;

    background-color: ${({checked}) => handleBackgroundColor (checked)};
    border: 1px solid ${({checked}) => handleBackgroundColor (checked)};
    border-radius: 0.4rem;

    transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
    transition-delay: 0.01s;

    /* Checkmark */
    &:after {
      content: '';
      position: absolute;
      left: 7px;
      top: 4px;

      opacity: ${({checked}) => (checked ? '1' : '0')};

      width: 5px;
      height: 10px;

      border: solid ${lightColors.white};
      border-width: 0 2px 2px 0;

      transform: rotate(45deg);
    }
  `,
  Toggle: styled.span<ICheckbox>`
    position: relative;

    display: inline-block;

    width: 3.75rem;
    height: 1.75rem;

    padding: 4px;

    background-color: ${({checked}) => handleBackgroundColor (checked)};
    border: 2px solid ${({checked}) => handleBackgroundColor (checked)};
    border-radius: 4rem;
    box-sizing: initial;

    transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
    outline: 0;
    user-select: none;
    cursor: pointer;

    &::after {
      content: '';
      position: relative;
      left: ${({checked}) => (checked ? '50%' : '0%')};

      display: block;
      width: 50%;
      height: 100%;

      border-radius: 4rem;
      background: ${({checked}) => handleToggleColor (checked)};
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);

      transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06),
        padding 0.3s ease, margin 0.3s ease;
      cursor: pointer;
    }

    &:active {
      box-shadow: none;

      &::after {
        margin-left: ${({checked}) => (checked ? '-0.6rem' : '0')};
        padding-right: 0.6rem;
      }
    }
  `,
  Text: styled.span`
    margin-left: 0.75rem;
  `,
};
