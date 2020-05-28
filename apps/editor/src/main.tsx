import "reflect-metadata";
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app/app';
import {container} from '@seafold/di';
import 'mobx-react-lite/batchingForReactDom';

const WiredApp = container.resolve(App);
ReactDOM.render(<WiredApp.Index />, document.getElementById('app'));
