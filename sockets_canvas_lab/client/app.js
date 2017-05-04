import React from 'react';
import ReactDOM from 'react-dom';

import Canvas from './components/Canvas';

window.onload = () => {
  ReactDOM.render(
    <Canvas />,
    document.getElementById('app')
  );
};