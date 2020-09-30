import React from 'react';
import {EnumOf} from '../../Utils';
import {CardStyles as S} from './styles';

interface IMargin {
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
}

export interface ICard extends IMargin {}

const Card: React.FC<ICard> = ({
  mt = 0,
  mr = 0,
  mb = 0,
  ml = 0,
  children,
}) => (
  <S.Card mt={mt} mr={mr} mb={mb} ml={ml}>
    {children}
  </S.Card>
);

export interface ICardBody {
  row?: boolean;
  centered?: boolean;
  spaceBetween?: boolean;
}

const CardBody: React.FC<ICardBody> = ({
  row = false,
  centered = false,
  spaceBetween = false,
  children,
}) => (
  <S.CardBody row={row} centered={centered} spaceBetween={spaceBetween}>
    {children}
  </S.CardBody>
);

export type CardTitleSize = 'large' | 'normal' | 'small';

export const CardTitleSizes: EnumOf<CardTitleSize> = {
  large: 'large',
  normal: 'normal', // Default
  small: 'small',
};

export interface ICardTitle {
  size?: CardTitleSize;
  mb?: number;
}

const CardTitle: React.FC<ICardTitle> = ({
  size = CardTitleSizes.normal,
  mb = 12,
  children,
}) => (
  <S.CardTitle size={size} mb={mb}>
    {children}
  </S.CardTitle>
);

export interface ICardSubtitle {
  mb?: number;
}

const CardSubtitle: React.FC<ICardSubtitle> = ({mb = 12, children}) => (
  <S.CardSubtitle mb={mb}>{children}</S.CardSubtitle>
);

export interface ICardImage extends React.ImgHTMLAttributes<HTMLImageElement> {
  mb?: number;
}

const CardImage: React.FC<ICardImage> = ({src, alt, mb = 0}) => (
  <S.CardImage src={src} alt={alt} mb={mb} />
);

export type CardLabelPosition = 'left' | 'right';

export const CardLabelPositions: EnumOf<CardLabelPosition> = {
  left: 'left',
  right: 'right',
};

export interface ICardLabel {
  position: CardLabelPosition;
}

const CardLabel: React.FC<ICardLabel> = ({position, children}) => (
  <S.CardLabel position={position}>{children}</S.CardLabel>
);

export {Card, CardBody, CardTitle, CardSubtitle, CardImage, CardLabel};
