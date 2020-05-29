import "reflect-metadata";
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app/app';
import 'mobx-react-lite/batchingForReactDom';

ReactDOM.render(<App />, document.getElementById('app'));
