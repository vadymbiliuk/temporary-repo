import React from 'react';
import {Label} from '../Label';
import {EnumOf} from '../../Utils';
import {FieldStyles as S} from './styles';

export type FieldSize = 'large' | 'normal' | 'small';

export type FieldColor = 'primary' | 'secondary';

export const FieldColors: EnumOf<FieldColor> = {
  primary: 'primary', // Default
  secondary: 'secondary',
};

export const FieldSizes: EnumOf<FieldSize> = {
  large: 'large',
  normal: 'normal', // Default
  small: 'small',
};

export interface IField extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  withoutLabel?: boolean;
  flexible?: boolean;
  color?: FieldColor;
  fieldSize?: FieldSize;
  mb?: number;
}

export const Field: React.FC<IField> = ({
  label,
  withoutLabel = false,
  id,
  name,
  type = 'text',
  value,
  placeholder,
  onChange,
  onBlur,
  flexible = false,
  color = FieldColors.primary,
  fieldSize = FieldSizes.normal,
  mb = 16,
}) => (
  <S.Field flexible={flexible} mb={mb}>
    <Label htmlFor={id} hidden={withoutLabel}>
      {label}
    </Label>
    <S.Input
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      color={color}
      fieldSize={fieldSize}
    />
  </S.Field>
);
