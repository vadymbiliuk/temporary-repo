import React from 'react';
import {LobbiesListStyles as S} from '../styles';
import {CardImage, CardTitle, CardTitleSizes} from '../../../Shared/Card';

interface IPlayersList {
  players: any[];
}

const PlayersList: React.FC<IPlayersList> = ({players}) => (
  <S.PlayersList>
    {players.map (({id, photo, name}) => (
      <S.PlayersItem key={id}>
        <CardImage src={photo} alt="player" mb={8} />
        <CardTitle size={CardTitleSizes.small} mb={0}>
          {name}
        </CardTitle>
      </S.PlayersItem>
    ))}
  </S.PlayersList>
);

export {PlayersList};
