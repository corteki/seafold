import React, { FunctionComponent } from 'react';
import { ContainerEventHandler } from '../container/ContainerEventHandler';
import { ComponentType } from '@seafold/core';
import { observer } from 'mobx-react';
import { useModel, useBuilder } from 'apps/editor/src/app/contexts';

export interface ContainerProps {
  eventHandler: ContainerEventHandler;
}

export const InsertionLayer: FunctionComponent<ContainerProps> = observer(
  ({children, eventHandler}) => {
  const {
    path, parentPath, name,
    type, selected, 
    lastIndex, index
  } = eventHandler.container;
  const { previewModel } = useModel();
  const { insertBuilder } = useBuilder();
  return (
    <>
    {
    !previewModel.inPreview && 
      insertBuilder
        .withIndex(index)
        .withPath(parentPath)
        .build()
    }
    <section
      id={path}
      tabIndex={0}
      data-dropzone={true}
      data-name={name}
      data-type={type}
      className={`container ${previewModel.inPreview ? 'inPreview' : selected ? 'isSelected' : ''}`}
      draggable={true}
      onClick={eventHandler.handleClick}
      onKeyDown={eventHandler.handleKeydown}
      onDrag={eventHandler.handleDrag}
      onDrop={eventHandler.handleDrop}
      onDragOver={eventHandler.handleDragOver}>
        {children}
      {!previewModel.inPreview && type === ComponentType.CONTAINER && 
        insertBuilder
          .withIndex(lastIndex)
          .withPath(path)
          .build()
      }
    </section>
    </>
  );
})