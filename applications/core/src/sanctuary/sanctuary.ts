import {env, create} from 'sanctuary';
import {env as flutureEnv} from 'fluture-sanctuary-types';

const S = create ({checkTypes: true, env: env.concat (flutureEnv)});

export {S};
