import React from 'react';
import RModal, {Props} from 'react-modal';
import {EnumOf} from '../../Utils';
import {ModalStyles as S, handleMaxWidth} from './styles';
import {darkColors, lightColors} from '../../Theme/Colors';

export type ModalSize = 'large' | 'normal' | 'small';

export const ModalSizes: EnumOf<ModalSize> = {
  large: 'large',
  normal: 'normal', // Default
  small: 'small',
};

interface IModal extends Props {
  size?: ModalSize;
  fullscreen?: boolean;
}

const Modal: React.FC<IModal> = ({
  isOpen,
  onAfterOpen,
  onAfterClose,
  onRequestClose,
  closeTimeoutMS,
  shouldCloseOnOverlayClick,
  shouldCloseOnEsc,
  testId,
  id,
  size = ModalSizes.normal,
  fullscreen = false,
  children,
}) => (
  <RModal
    isOpen={isOpen}
    style={{
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: fullscreen ? '100%' : 'auto',
        maxWidth: fullscreen ? 'auto' : handleMaxWidth (size),
        marginRight: '-50%',
        padding: 0,
        transform: 'translate(-50%, -50%)',
        backgroundColor: darkColors.aswadBlack,
        borderRadius: '1.3rem',
        borderColor: 'transparent',
        color: lightColors.white,
        boxShadow:
          '0 2px  3px 1px rgba(0, 0, 0, 0.1), 0 4px 5px 0 rgba(0, 0, 0, 0.08)',
      },
      overlay: {
        backgroundColor: 'transparent',
      },
    }}
    onAfterOpen={onAfterOpen}
    onAfterClose={onAfterClose}
    onRequestClose={onRequestClose}
    closeTimeoutMS={closeTimeoutMS}
    shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    shouldCloseOnEsc={shouldCloseOnEsc}
    testId={testId}
    id={id}
  >
    {children}
  </RModal>
);

RModal.setAppElement ('#root');

const ModalHeader: React.FC = ({children}) => (
  <S.ModalHeader>
    <S.ModalTitle>{children}</S.ModalTitle>
  </S.ModalHeader>
);

const ModalBody: React.FC = ({children}) => (
  <S.ModalBody>{children}</S.ModalBody>
);

export interface IModalFooter {
  flexEnd?: boolean;
}

const ModalFooter: React.FC<IModalFooter> = ({flexEnd = false, children}) => (
  <S.ModalFooter flexEnd={flexEnd}>{children}</S.ModalFooter>
);

export {Modal, ModalHeader, ModalBody, ModalFooter};
