import React from 'react';
import {Routes} from './Routes';
import {Lobbies} from './Lobbies';
import {Router as ReachRouter} from '@reach/router';

const Router: React.FC = () => (
  <ReachRouter>
    <Lobbies path={Routes.Lobbies} />
  </ReachRouter>
);

export {Router};
