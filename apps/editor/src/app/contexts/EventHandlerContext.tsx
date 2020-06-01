import { createContext, useContext } from 'react';
import { PagePanelEventHandler } from './PagePanelEventHandler';
import { PagePanelModel } from './PagePanelModel';
import { PreviewModel } from './PreviewModel';
import { ResourceFactory } from './ResourceFactory';
import { InsertValidator } from './validation/InsertValidator';
import { PagePanelNodeTraverser } from './PagePanelNodeTraverser';
import { ComponentTypeValidator } from './validation/ComponentTypeValidator';
import { PreviewEventHandler } from './PreviewEventHandler';

export class EventHandlerContext {

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
    })
  }

}