import { ContainerModel } from './ContainerModel';
import { action } from 'mobx';
import { IPagePanelEventHandler } from '../interfaces/IPagePanelEventHandler';

export class ContainerEventHandler {

  constructor(
    public container: ContainerModel,
    public pagePanelEventHandler: IPagePanelEventHandler
  ) {}

  @action.bound
  handleClick(e: React.MouseEvent): void {
    e.stopPropagation();
    this.container.selected = !this.container.selected;
  }

  @action.bound
  handleKeydown(e: React.KeyboardEvent): void {
    this.container.selected && e.key === 'Delete' && 
      this.pagePanelEventHandler.removeElement(this.container.path)
  }

  @action.bound
  handleDragOver(e: React.DragEvent): void {
    this.pagePanelEventHandler.handleDragOver(e);
  };

  @action.bound
  handleDrop(e: React.DragEvent): void {
    this.pagePanelEventHandler.handleDrop(e);
  }

  @action.bound
  handleDrag(e: React.DragEvent<HTMLElement>): void {
    this.pagePanelEventHandler.handleDrag(e);
  }

}
