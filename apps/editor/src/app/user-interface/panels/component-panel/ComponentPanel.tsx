import React, { FC } from 'react';
import { useRuntime, useEventHandlers } from '../../../contexts';
import './ComponentPanel.scss';

export const ComponentPanel: FC = (props) => {
  const { iterableComponents } = useRuntime();
  const { componentPanelEventHandler } = useEventHandlers();
  return (
    <section
    className="component-panel">
      {
        iterableComponents
          .map(Component => 
            <article 
              className="component-panel__item"
              key={(Component as Function).name}
              id={(Component as Function).name}
              onDragStart={componentPanelEventHandler.handleDrag}
              draggable={true}>
              <p>{(Component as Function).name}</p>
            </article>
          )
      }
    </section>
  );
};

export default ComponentPanel;
