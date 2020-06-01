import React, { FC } from 'react';
import { useRuntime } from '../../../contexts';
import './ControlPanel.scss';


export const ControlPanel: FC = (props) => {
  const { iterableControls } = useRuntime();
  return (
    <section 
    className="control-panel">
      {
        iterableControls
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
