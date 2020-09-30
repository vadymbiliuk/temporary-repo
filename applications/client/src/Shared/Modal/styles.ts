import styled from '@emotion/styled';
import {darkColors, lightColors} from '../../Theme/Colors';
import {ModalSize, ModalSizes, IModalFooter} from './Modal';

export const handleMaxWidth = (size: ModalSize) => {
  if (size === ModalSizes.large) return '700px';
  if (size === ModalSizes.small) return '300px';

  return '500px';
};

export const ModalStyles = {
  ModalHeader: styled.div`
    padding: 1.5rem 1.875rem;
  `,
  ModalTitle: styled.h5`
    color: ${lightColors.white};
    font-size: 1.25rem;
    line-height: 1.5rem;
  `,
  ModalBody: styled.div`
    position: relative;

    flex: 1 1 auto;

    padding: 1.875rem;

    color: ${darkColors.blackishGrey};
  `,
  ModalFooter: styled.div<IModalFooter>`
    display: flex;
    justify-content: ${({flexEnd}) => flexEnd && 'flex-end'};

    padding: 1.5rem 1.875rem;
  `,
};
