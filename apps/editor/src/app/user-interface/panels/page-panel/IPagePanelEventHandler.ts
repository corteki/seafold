import { PagePanelModel } from '../../../contexts/PagePanelModel';
import { PreviewModel } from '../../../contexts/PreviewModel';
import { ResourceFactory } from '../../../contexts/ResourceFactory';

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
