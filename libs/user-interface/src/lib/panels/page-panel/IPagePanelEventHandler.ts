import { PagePanelModel } from './presentation/PagePanelModel';
import { PreviewModel } from './presentation/preview/PreviewModel';
import { ResourceFactory } from './presentation/container/ResourceFactory';

export const IPagePanelEventHandler = 'IPagePanelEventHandler';
export interface IPagePanelEventHandler {
  pagePanel: PagePanelModel;
  preview: PreviewModel;
  resourceFactory: ResourceFactory;
  clear(): void;
  removeElement(selected: string): void;
  handleDrag(e: React.DragEvent<HTMLElement>): void;
  handleDragOver(e: React.DragEvent): void;
  handleDrop(e: React.DragEvent<any>): void;
}
