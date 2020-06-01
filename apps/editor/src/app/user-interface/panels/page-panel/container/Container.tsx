import React, { FunctionComponent } from 'react';
import './Container.scss';
import { ContainerEventHandler } from './ContainerEventHandler';
import { InsertionLayer } from '../layers/InsertionLayer';
import { observer } from 'mobx-react';

/* eslint-disable-next-line */
export interface ContainerProps {
  eventHandler: ContainerEventHandler;
}

export const Container: FunctionComponent<ContainerProps> = observer(
  ({eventHandler, children}) => {
  return (
    <InsertionLayer 
      eventHandler={eventHandler}>
      {children}
    </InsertionLayer>
  );
});

export default Container;
