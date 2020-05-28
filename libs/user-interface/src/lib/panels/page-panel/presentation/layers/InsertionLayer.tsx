import React, { FunctionComponent } from 'react';
import { InsertModel } from '../insert/InsertModel';
import { Insert } from '../insert/Insert';
import { ContainerController } from '../container/ContainerController';
import { ComponentType } from '@seafold/core';
import { observer } from 'mobx-react';

export interface ContainerProps {
  controller: ContainerController;
}

export const InsertionLayer: FunctionComponent<ContainerProps> = observer(
  ({children, controller}) => {
  const {
    path, parentPath, name,
    type, selected, 
    lastIndex, index
  } = controller.container;
  const {preview} = controller.pagePanelEventHandler;
  return (
    <>
    {
    !preview.inPreview && 
      <Insert model={new InsertModel(index, parentPath)}/>
    }
    <section
      id={path}
      tabIndex={0}
      data-dropzone={true}
      data-name={name}
      data-type={type}
      className={`container ${preview.inPreview ? 'inPreview' : selected ? 'isSelected' : ''}`}
      draggable={true}
      onClick={controller.handleClick}
      onKeyDown={controller.handleKeydown}
      onDrag={controller.handleDrag}
      onDrop={controller.handleDrop}
      onDragOver={controller.handleDragOver}>
        {children}
      {!preview.inPreview && type === ComponentType.CONTAINER && 
        <Insert model={new InsertModel(lastIndex, path)}/>
      }
    </section>
    </>
  );
})