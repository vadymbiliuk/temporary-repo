import React from 'react';
import {CardTitle} from '../../../Shared/Card';
import {LobbiesListStyles as S} from '../styles';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface ILobbyHeader {
  title: string;
  playersAmount: number;
}

const LobbyHeader: React.FC<ILobbyHeader> = ({title, playersAmount}) => (
  <S.LobbyHeader>
    <CardTitle mb={0}>{title}</CardTitle>
    <p>
      {playersAmount}
      /10
      <FontAwesomeIcon icon={faUser} pull="right" />
    </p>
  </S.LobbyHeader>
);

export {LobbyHeader};
