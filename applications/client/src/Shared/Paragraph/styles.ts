import styled from '@emotion/styled';
import {IParagraph} from './Paragraph';
import {darkColors} from '../../Theme/Colors';

export const StyledParagraph = {
  Paragraph: styled.p<IParagraph>`
    margin-bottom: ${({mb}) => `${mb}px`};

    color: ${darkColors.nightGrey};
  `,
};
