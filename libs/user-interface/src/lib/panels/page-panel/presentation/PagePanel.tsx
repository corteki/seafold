import React, { FC } from 'react';
import { observer } from "mobx-react";
import { ComponentType } from '@seafold/core'
import './PagePanel.scss';
import { IPagePanelEventHandler } from '@seafold/user-interface';
import Preview from './preview/Preview';
import { RecursiveContainerFactory } from './container/RecursiveContainerFactory';
import { Insert } from './insert/Insert';
import { InsertEventHandler } from './insert/InsertEventHandler';
import { Button } from '../../../Button/Button';
import { InsertModel } from './insert/InsertModel';

/* eslint-disable-next-line */
export interface PagePanelProps {
  eventHandler: IPagePanelEventHandler;
}

export const PagePanel: FC<PagePanelProps> = observer(
  ({eventHandler}) => {
  const {pagePanel, preview} = eventHandler;
  return (
    <section 
      className="page-panel">
      <div className="page-panel__toolbar">
        <Preview model={preview!}/>
        <Button onClick={eventHandler.clear}>clear</Button>
      </div>
      
      {pagePanel?.elements.map(root => 
        <section
        data-type={ComponentType.CONTAINER}
        data-dropzone={true}
        id={root.name}
        className="root"
        onDrop={eventHandler.handleDrop} 
        onDragOver={eventHandler.handleDragOver}>
        {!root.hasDescendants() && <h1>Drag and drop components into this panel</h1>}
        {
          root
          .getDescendants()
            .filter(element => pagePanel.components.get(element.name) !== undefined)
            .map(resource => 
              <RecursiveContainerFactory 
                components={pagePanel.components}
                resource={resource}
                eventHandler={eventHandler}/>
            )
        }
        <Insert 
          eventHandler={
            new InsertEventHandler(
              new InsertModel(root.getLastDescendantIndex()
              )
            )
          }/>
      </section>
      )}
    </section>
  );
})

export default PagePanel;
