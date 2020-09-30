import React from 'react';
import {LobbiesListStyles as S} from '../styles';
import {Button, ButtonColors} from '../../../Shared/Button';
import {CardImage, CardTitle, CardTitleSizes} from '../../../Shared/Card';

interface ICurrentPlayer {
  player: any;
}

const CurrentPlayer: React.FC<ICurrentPlayer> = ({player}) => (
  <S.CurrentPlayer>
    <CardImage src={player.photo} alt="player" mb={8} />
    <CardTitle size={CardTitleSizes.small} mb={16}>
      {player.name}
    </CardTitle>
    <div>
      <Button color={ButtonColors.info} mb={8} block>
        Start
      </Button>
      <Button color={ButtonColors.secondary} block>
        Leave
      </Button>
    </div>
  </S.CurrentPlayer>
);

export {CurrentPlayer};
