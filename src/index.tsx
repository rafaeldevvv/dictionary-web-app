import React from 'react';
import './assets/fonts/cursive/CedarvilleCursive-Regular.ttf';
import './assets/fonts/mono/VT323-Regular.ttf';
import './assets/fonts/sans/Roboto-Regular.ttf';
import './assets/fonts/sans/Roboto-Italic.ttf';
import './assets/fonts/serif/InstrumentSerif-Italic.ttf';
import './assets/fonts/serif/InstrumentSerif-Regular.ttf';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
   faVolumeHigh,
   faChevronDown,
   faSun,
   faMoon,
   faArrowUpRightFromSquare,
   faSearch,
} from '@fortawesome/free-solid-svg-icons';

library.add(
   faVolumeHigh,
   faChevronDown,
   faSun,
   faMoon,
   faArrowUpRightFromSquare,
   faSearch,
);

import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.querySelector('#root')!;

createRoot(root).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
);
