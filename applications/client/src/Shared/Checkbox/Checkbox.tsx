import React from 'react';
import {CheckboxStyles as S} from './styles';

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  toggle?: boolean;
}

const Checkbox: React.FC<ICheckbox> = ({
  checked = false,
  onChange,
  children,
  toggle = false,
  name,
  id,
}) => (
  <S.Label checked={checked} htmlFor={id}>
    <S.HiddenDefaultCheckbox
      checked={checked}
      onChange={onChange}
      type="checkbox"
      name={name}
      id={id}
    />
    {toggle ? <S.Toggle checked={checked} /> : <S.Checkbox checked={checked} />}
    {children && <S.Text>{children}</S.Text>}
  </S.Label>
);

export {Checkbox};
