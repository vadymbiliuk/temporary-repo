import React from 'react';
import {LabelStyles as S} from './styles';

interface ILabel extends React.LabelHTMLAttributes<HTMLLabelElement> {
  hidden?: boolean;
}

export const Label: React.FC<ILabel> = ({children, htmlFor, hidden}) => (
  <S.Label htmlFor={htmlFor} hidden={hidden}>
    {children}
  </S.Label>
);
