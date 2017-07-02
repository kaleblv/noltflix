import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import './index.css';
import App from './components/App';
import Detail from './components/Detail'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/detail/:detailId" component={Detail} />
      </div>
    </BrowserRouter>
  )
}



render(<Root/>, document.querySelector('#root'));
