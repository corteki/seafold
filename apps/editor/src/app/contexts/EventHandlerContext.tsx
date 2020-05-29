import { createContext, useContext } from 'react';
import {
  IPagePanelEventHandler
} from '@seafold/user-interface';
import { injectable, inject } from 'inversify';

@injectable()
export class EventHandlerContext {

  @inject(IPagePanelEventHandler) 
  private pagePanelEventHandler!: IPagePanelEventHandler;

  useEventHandlers = () => {
    return useContext(this.create());
  }

  private create() {
    return createContext({
      pagePanelEventHandler: this.pagePanelEventHandler
    })
  }

}