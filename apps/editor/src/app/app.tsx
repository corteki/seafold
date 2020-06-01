import React from 'react';
import './app.scss';
import './example/controls';
import './example/components';
import { ComponentPanel, ComponentPanelModel, PagePanel, ControlPanel, ControlPanelModel } from './user-interface';

export const App = () => {
  return (
    <section className="editor">
      <ComponentPanel model={new ComponentPanelModel()}/>
      <PagePanel />
      <ControlPanel model={new ControlPanelModel()}/>
    </section>
  );
}
