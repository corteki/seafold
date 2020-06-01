import React from 'react';

import { ControlPanelModel } from './ControlPanelModel';
import './ControlPanel.scss';

/* eslint-disable-next-line */
export interface ControlPanelProps {
  model: ControlPanelModel;
}

export const ControlPanel = (props: ControlPanelProps) => {
  const {model} = props;
  return (
    <section 
    className="control-panel">
      {
        model.controls
          .map(Control => 
            <article 
              className="control-panel__item"
              key={(Control as Function).name}
              id={(Control as Function).name}>
              <Control {...props}/>
            </article>
          )
      }
    </section>
  );
};

export default ControlPanel;
