import React from 'react';
import { ComponentPanelModel } from './ComponentPanelModel';
import './ComponentPanel.scss';

/* eslint-disable-next-line */
export interface ComponentPanelProps {
  model: ComponentPanelModel;
}

export const ComponentPanel = (props: ComponentPanelProps) => {
  const {model} = props;
  return (
    <section
    className="component-panel">
      {
        model.components
          .map(Component => 
            <article 
              className="component-panel__item"
              key={(Component as Function).name}
              id={(Component as Function).name}
              onDragStart={model.handleDrag}
              draggable={true}>
              <p>{(Component as Function).name}</p>
            </article>
          )
      }
    </section>
  );
};

export default ComponentPanel;
