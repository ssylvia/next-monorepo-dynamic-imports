import {lazy} from 'react';

export const registry = {
  heading: lazy(() => import('./heading')),
  paragraph: lazy(() => import('./paragraph')),
}