import {
  Environment,
  Network,
  RecordSource,
  Store,
  Variables,
  RequestParameters,
} from 'relay-runtime';

const fetchQuery = async (request: RequestParameters, variables: Variables) => {
  const response = await fetch ('/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify ({
      query: request.text,
      variables,
    }),
  });
  return response.json ();
};

const network = Network.create (fetchQuery);
const store = new Store (new RecordSource ());

export const environment = new Environment ({
  network,
  store,
});
