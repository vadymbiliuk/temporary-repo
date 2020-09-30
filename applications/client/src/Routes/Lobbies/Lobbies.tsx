import React from 'react';
import {LobbiesListStyles as S} from './styles';
import {RouteComponentProps} from '@reach/router';
import {LobbiesHeader, LobbiesList} from './Components';

interface ILobbies extends RouteComponentProps {}

const Lobbies: React.FC<ILobbies> = () => (
  <S.Lobbies>
    <LobbiesHeader />
    <LobbiesList />
  </S.Lobbies>
);

export {Lobbies};
