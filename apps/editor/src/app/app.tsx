import React from 'react';
import { ComponentPanel, PagePanel, ControlPanel } from './user-interface';
import './app.scss';
import './example';

export const App = () => {
  return (
    <section className="editor">
      <ComponentPanel />
      <PagePanel />
      <ControlPanel />
    </section>
  );
}
