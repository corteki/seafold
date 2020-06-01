import React, { FC } from 'react';
import { observer } from "mobx-react";
import { ComponentType } from '@seafold/core'
import Preview from './preview/Preview';
import { RecursiveContainerFactory } from './container/RecursiveContainerFactory';
import { Button } from '../../button/Button';
import { useEventHandler, useModel, useRuntime, useBuilder } from 'apps/editor/src/app/contexts';
import './PagePanel.scss';

export const PagePanel: FC = observer(() => {
  const { components } = useRuntime();
  const { pagePanelEventHandler } = useEventHandler();
  const { previewModel, pagePanelModel } = useModel();
  const { insertBuilder } = useBuilder();
  return (
    <section 
      className="page-panel">
      <div className="page-panel__toolbar">
        <Preview model={previewModel}/>
        <Button onClick={pagePanelEventHandler.clear}>clear</Button>
      </div>
      
      {pagePanelModel?.elements.map(root => 
        <section
        data-type={ComponentType.CONTAINER}
        data-dropzone={true}
        id={root.name}
        className="root"
        onDrop={pagePanelEventHandler.handleDrop} 
        onDragOver={pagePanelEventHandler.handleDragOver}>
        {!root.hasDescendants() && <h1>Drag and drop components into this panel</h1>}
        {
          root
          .getDescendants()
            .filter(element => components.get(element.name) !== undefined)
            .map(resource => 
              <RecursiveContainerFactory 
                resource={resource}/>
            )
        }
        { 
          insertBuilder
            .withIndex(root.getLastDescendantIndex())
            .build()
        }
      </section>
      )}
    </section>
  );
})

export default PagePanel;
