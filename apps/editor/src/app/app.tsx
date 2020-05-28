import React from 'react';
import {
  ComponentPanel, ControlPanel, PagePanel, ComponentPanelModel, ControlPanelModel, IPagePanelEventHandler
} from '@seafold/user-interface';
import './app.scss';
import './controls';
import './components';
import { injectable, inject } from 'inversify';

@injectable()
export class App {

  @inject(IPagePanelEventHandler) 
  private pagePanelEventHandler?: IPagePanelEventHandler
  
  Index = () => {
    return (
      <section className="editor">
        <ComponentPanel model={new ComponentPanelModel()}/>
        {this.pagePanelEventHandler && <PagePanel controller={this.pagePanelEventHandler}/>}
        <ControlPanel model={new ControlPanelModel()}/>
      </section>
    );
  }
  
};
