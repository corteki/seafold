import React from 'react';
import { FunctionComponent } from 'react';
import { InsertModel } from './InsertModel';
import { observer } from 'mobx-react';

export interface InsertProps {
  model: InsertModel;
}

export const Insert: FunctionComponent<InsertProps> = observer(
  ({model}) => {
  return (
    <div className={model.isActive ? 'insert--active' : 'insert'}
      data-testid={`insert-${model.index}`}
      onDragEnter={model.handleDragEnter}
      onDragLeave={model.handleDragExit}
      data-index={model.index}
      data-path={model.path}>
    </div>
  );
});