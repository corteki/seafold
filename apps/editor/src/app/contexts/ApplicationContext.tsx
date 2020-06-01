import { createContext, useContext } from 'react';
import { PagePanelEventHandler } from './page-panel/PagePanelEventHandler';
import { PagePanelModel } from './page-panel/PagePanelModel';
import { PreviewModel } from './preview/PreviewModel';
import { ResourceFactory } from './page-panel/ResourceFactory';
import { InsertValidator } from './validation/InsertValidator';
import { PagePanelNodeTraverser } from './page-panel/PagePanelNodeTraverser';
import { ComponentTypeValidator } from './validation/ComponentTypeValidator';
import { PreviewEventHandler } from './preview/PreviewEventHandler';

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