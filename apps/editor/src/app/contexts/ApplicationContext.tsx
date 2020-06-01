import { createContext, useContext, ReactType } from 'react';
import { PagePanelEventHandler } from './page-panel/PagePanelEventHandler';
import { PagePanelModel } from './page-panel/PagePanelModel';
import { PreviewModel } from './preview/PreviewModel';
import { ResourceFactory } from './page-panel/ResourceFactory';
import { InsertValidator } from './page-panel/validation/InsertValidator';
import { PagePanelNodeTraverser } from './page-panel/PagePanelNodeTraverser';
import { ComponentTypeValidator } from './page-panel/validation/ComponentTypeValidator';
import { PreviewEventHandler } from './preview/PreviewEventHandler';
import { runtime } from '@seafold/core';
import { ComponentPanelEventHandler } from './component-panel/ComponentPanelEventHandler';

export class ApplicationContext {

  private componentTypeValidator = new ComponentTypeValidator();
  private previewModel = new PreviewModel();
  private pagePanelModel = new PagePanelModel(
    new InsertValidator(),
    new PagePanelNodeTraverser(this.componentTypeValidator),
    this.componentTypeValidator
  );

  useEventHandlers = () => {
    return useContext(this.createEventHandlerContext());
  }

  useModels = () => {
    return useContext(this.createModelContext());
  }

  useFactory = () => {
    return useContext(this.createFactoryContext());
  }

  useRuntime = () => {
    return useContext(this.createRuntimeContext());
  }

  private createModelContext() {
    return createContext({
      previewModel: this.previewModel,
      pagePanelModel: this.pagePanelModel
    })
  }

  private createEventHandlerContext() {
    return createContext({
      pagePanelEventHandler: new PagePanelEventHandler(
        this.pagePanelModel,
        new ResourceFactory()
      ),
      previewEventHandler: new PreviewEventHandler(
        this.previewModel
      ),
      componentPanelEventHandler: new ComponentPanelEventHandler()
    })
  }

  private createFactoryContext() {
    return createContext({
      resourceFactory: new ResourceFactory()
    })
  }

  private createRuntimeContext() {
    return createContext({
      components: runtime.componentRegistry.getAll(),
      iterableControls: runtime.getAllControls<ReactType>(),
      iterableComponents: runtime.getAllComponents<ReactType>()
    })
  }

}