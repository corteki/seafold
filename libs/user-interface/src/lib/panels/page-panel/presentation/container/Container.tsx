import React, { FunctionComponent } from 'react';
import './Container.scss';
import { ContainerController } from './ContainerController';
import { InsertionLayer } from '../layers/InsertionLayer';
import { observer } from 'mobx-react';

/* eslint-disable-next-line */
export interface ContainerProps {
  controller: ContainerController;
}

export const Container: FunctionComponent<ContainerProps> = observer(
  ({controller, children}) => {
  return (
    <InsertionLayer 
      controller={controller}>
      {children}
    </InsertionLayer>
  );
});

export default Container;
