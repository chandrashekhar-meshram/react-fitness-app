import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDom from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

//const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

