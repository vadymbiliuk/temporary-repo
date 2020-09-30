import React from 'react';
import {StyledParagraph as S} from './styles';

export interface IParagraph {
  mb?: number;
}

const Paragraph: React.FC<IParagraph> = ({mb = 16, children}) => (
  <S.Paragraph mb={mb}>{children}</S.Paragraph>
);

export {Paragraph};
