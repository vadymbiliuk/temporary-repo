import React from 'react';
import {Button} from '../../../Shared/Button';
import {Card, CardBody, CardTitle} from '../../../Shared/Card';

const LobbiesHeader = () => (
  <Card mb={36}>
    <CardBody row centered spaceBetween>
      <CardTitle mb={0}>Awaiting games</CardTitle>
      <Button>Create a Lobby</Button>
    </CardBody>
  </Card>
);

export {LobbiesHeader};
