import React from 'react';
import { FunctionComponent } from 'react';
import { InsertEventHandler } from './InsertEventHandler';
import { observer } from 'mobx-react';

export interface InsertProps {
  eventHandler: InsertEventHandler;
}

export const Insert: FunctionComponent<InsertProps> = observer(
  ({eventHandler}) => {
  return (
    <div className={eventHandler.insert.isActive ? 'insert--active' : 'insert'}
      data-testid={`insert-${eventHandler.insert.index}`}
      onDragEnter={eventHandler.handleDragEnter}
      onDragLeave={eventHandler.handleDragExit}
      data-index={eventHandler.insert.index}
      data-path={eventHandler.insert.path}>
    </div>
  );
});