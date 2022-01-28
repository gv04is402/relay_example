import JSResource from './JSResource';
import { loadQuery } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';


const routes = [
      {
        path: '/',
        exact: true,
        component: JSResource('Login', () => import('./components/Login')),
        prepare: params => { console.log(params);
        },
      },
      
    ];

export default routes;