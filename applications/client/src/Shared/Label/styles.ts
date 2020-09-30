import styled from '@emotion/styled';
import {lightColors} from '../../Theme/Colors';

interface StyledProps {
  hidden?: boolean;
}

export const LabelStyles = {
  Label: styled.label<StyledProps>`
    color: ${lightColors.white};

    margin-bottom: 0.5rem;

    ${({hidden}) =>
      hidden
      && `
        position: absolute;
        left: 0;
        right: 0;
        opacity: 0;

        margin-bottom: 0;
      `}
  `,
};
