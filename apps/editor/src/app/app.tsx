import React from 'react';
import {
  ComponentPanel, ControlPanel, PagePanel, ComponentPanelModel, ControlPanelModel
} from '@seafold/user-interface';
import './app.scss';
import './controls';
import './components';
import { useHandlers } from './contexts';

export const App = () => {
  const { pagePanelEventHandler } = useHandlers();
  return (
    <section className="editor">
      <ComponentPanel model={new ComponentPanelModel()}/>
      <PagePanel eventHandler={pagePanelEventHandler}/>
      <ControlPanel model={new ControlPanelModel()}/>
    </section>
  );
}
