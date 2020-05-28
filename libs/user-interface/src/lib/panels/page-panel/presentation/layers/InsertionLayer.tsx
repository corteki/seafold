import React, { FunctionComponent } from 'react';
import { InsertEventHandler } from '../insert/InsertEventHandler';
import { Insert } from '../insert/Insert';
import { ContainerEventHandler } from '../container/ContainerEventHandler';
import { ComponentType } from '@seafold/core';
import { observer } from 'mobx-react';
import { InsertModel } from '../insert/InsertModel';

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
  const {preview} = eventHandler.pagePanelEventHandler;
  return (
    <>
    {
    !preview.inPreview && 
      <Insert eventHandler={
        new InsertEventHandler(
          new InsertModel(index, parentPath)
        )
      }/>
    }
    <section
      id={path}
      tabIndex={0}
      data-dropzone={true}
      data-name={name}
      data-type={type}
      className={`container ${preview.inPreview ? 'inPreview' : selected ? 'isSelected' : ''}`}
      draggable={true}
      onClick={eventHandler.handleClick}
      onKeyDown={eventHandler.handleKeydown}
      onDrag={eventHandler.handleDrag}
      onDrop={eventHandler.handleDrop}
      onDragOver={eventHandler.handleDragOver}>
        {children}
      {!preview.inPreview && type === ComponentType.CONTAINER && 
        <Insert eventHandler={
          new InsertEventHandler(
            new InsertModel(lastIndex, path)
          )
        }/>
      }
    </section>
    </>
  );
})