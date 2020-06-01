import { PagePanelModel } from '../../../contexts/page-panel/PagePanelModel';
import { PreviewModel } from '../../../contexts/preview/PreviewModel';
import { ResourceFactory } from '../../../contexts/page-panel/ResourceFactory';

export const IPagePanelEventHandler = 'IPagePanelEventHandler';
export interface IPagePanelEventHandler {
  pagePanel: PagePanelModel;
  resourceFactory: ResourceFactory;
  clear(): void;
  removeElement(selected: string): void;
  handleDrag(e: React.DragEvent<HTMLElement>): void;
  handleDragOver(e: React.DragEvent): void;
  handleDrop(e: React.DragEvent<any>): void;
}
