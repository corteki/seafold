import { PagePanelModel } from 'apps/editor/src/app/contexts/page-panel/PagePanelModel';
import { ResourceFactory } from 'apps/editor/src/app/contexts/page-panel/ResourceFactory';

export interface IPagePanelEventHandler {
  pagePanel: PagePanelModel;
  resourceFactory: ResourceFactory;
  clear(): void;
  removeElement(selected: string): void;
  handleDrag(e: React.DragEvent<HTMLElement>): void;
  handleDragOver(e: React.DragEvent): void;
  handleDrop(e: React.DragEvent<any>): void;
}
