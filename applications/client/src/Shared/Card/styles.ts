import styled from '@emotion/styled';
import {darkColors, lightColors} from '../../Theme/Colors';
import {
  ICard,
  ICardBody,
  ICardTitle,
  ICardImage,
  CardTitleSize,
  CardTitleSizes,
  ICardSubtitle,
  ICardLabel,
  CardLabelPositions,
  CardLabelPosition,
} from './Card';

const handleTitleFontSize = (size?: CardTitleSize) => {
  if (size === CardTitleSizes.large) return '1.5rem';
  if (size === CardTitleSizes.small) return '0.875rem';

  return '1.25rem';
};

const handleLabelHorizontalPosition = (position: CardLabelPosition) =>
  position === CardLabelPositions.left ? '0%' : '100%';

export const CardStyles = {
  Card: styled.div<ICard>`
    position: relative;
    display: flex;
    flex-direction: column;

    margin: ${({mt, mr, mb, ml}) => `${mt}px ${mr}px ${mb}px ${ml}px`};

    background-color: ${darkColors.aswadBlack};
    border-radius: 1.3rem;
    color: ${lightColors.white};

    word-wrap: break-word;
  `,
  CardBody: styled.div<ICardBody>`
    display: flex;
    flex: 1 1 auto;
    flex-direction: ${({row}) => (row ? 'row' : 'column')};
    justify-content: ${({spaceBetween}) => spaceBetween && 'space-between'};
    align-items: ${({centered}) => centered && 'center'};

    padding: 1.875rem;

    color: ${darkColors.nightGrey};
    font-size: 1rem;
    font-weight: 300;
  `,
  CardTitle: styled.h5<ICardTitle>`
    display: flex;

    margin-bottom: ${({mb}) => `${mb}px`};

    color: ${lightColors.white};
    font-weight: 500;
    font-size: ${({size}) => handleTitleFontSize (size)};
    line-height: 1.5rem;
  `,
  CardSubtitle: styled.h6<ICardSubtitle>`
    margin-bottom: ${({mb}) => `${mb}px`};

    color: ${darkColors.blackishGrey};
    font-size: 1rem;
    line-height: 1.5rem;
  `,
  CardImage: styled.img<ICardImage>`
    margin-bottom: ${({mb}) => `${mb}px`};

    border-radius: 1.3rem;
    border-style: none;

    vertical-align: middle;
  `,
  CardLabel: styled.div<ICardLabel>`
    position: absolute;
    left: ${({position}) => handleLabelHorizontalPosition (position)};

    display: flex;

    padding: 1.25rem;

    background-color: ${darkColors.aswadBlack};
    border-radius: 1.3em;

    color: ${lightColors.white};
    white-space: nowrap;

    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
    transform: translateX(-65%) translateY(-35%);
  `,
};
