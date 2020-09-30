import React from 'react';
import {PlayersList} from './PlayersList';
import {LobbyHeader} from './LobbyHeader';
import {CurrentPlayer} from './CurrentPlayer';
import {LobbiesListStyles as S} from '../styles';
import {Card, CardBody} from '../../../Shared/Card';

const userPhoto = 'https://via.placeholder.com/150';
const photo = 'https://via.placeholder.com/100';

const mockedUser = {
  id: 24,
  name: 'Username',
  photo: userPhoto,
};

const fullPlayers = [
  {id: 1, name: 'Name 1', photo},
  {id: 2, name: 'Name 2', photo},
  {id: 3, name: 'Name 3', photo},
  {id: 4, name: 'Name 4', photo},
  {id: 5, name: 'Name 5', photo},
  {id: 6, name: 'Name 6', photo},
  {id: 7, name: 'Name 7', photo},
  {id: 8, name: 'Name 8', photo},
  {id: 9, name: 'Name 9', photo},
  {id: 10, name: 'Name 10', photo},
];

const mockedLobbies = [
  {
    id: 1,
    title: 'Lobby 1',
    players: fullPlayers,
  },
  {
    id: 2,
    title: 'Lobby 2',
    players: fullPlayers,
  },
  {
    id: 3,
    title: 'Lobby 3',
    players: fullPlayers,
  },
];

const LobbiesList = () => (
  <ul>
    {mockedLobbies.map (({id, title, players}) => (
      <li key={id}>
        <Card mb={28}>
          <CardBody>
            <LobbyHeader title={title} playersAmount={players.length} />
            <S.PlayersSection>
              <CurrentPlayer player={mockedUser} />
              <PlayersList players={players} />
            </S.PlayersSection>
          </CardBody>
        </Card>
      </li>
    ))}
  </ul>
);

export {LobbiesList};
