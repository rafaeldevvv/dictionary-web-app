import React from 'react';

import {createRoot} from 'react-dom/client';
import App from './App';

const root = document.querySelector('#root')!;

createRoot(root).render(
   (
      <React.StrictMode>
         <App />
      </React.StrictMode>
   )
)