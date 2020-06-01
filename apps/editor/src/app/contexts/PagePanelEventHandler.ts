import { PagePanelModel } from './PagePanelModel';
import { action } from 'mobx';
import { runtime } from '@seafold/core';
import { IPagePanelEventHandler } from '../user-interface/panels/page-panel/IPagePanelEventHandler';
import { ResourceFactory } from './ResourceFactory';

export class PagePanelEventHandler implements IPagePanelEventHandler {
  
  constructor(
    public pagePanel: PagePanelModel,
    public resourceFactory: ResourceFactory
  ) {}

  @action.bound
  removeElement(selected: string): void {
    this.pagePanel.elements = runtime.removeElement(selected);
  }

  @action.bound
  clear(): void {
    this.pagePanel.elements = runtime.clear();
  }

  @action.bound
  handleDrag(e: React.DragEvent<HTMLElement>): void {
    e.stopPropagation();
    this.pagePanel.draggedElement = e.currentTarget;
  }

  @action.bound
  handleDragOver(e: React.DragEvent): void {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "move";
  }

  @action.bound
  handleDrop(e: React.DragEvent<any>): void {
    e.stopPropagation();
    const { currentTarget, clientX, clientY } = e;
    const type = currentTarget.dataset.type;
    if(this.pagePanel.draggedElement) {
      const target = document.elementFromPoint(clientX, clientY) as HTMLElement;
      this.pagePanel.update(type, target);
    } else {
      const element = e.dataTransfer.getData('text/plain');
      this.pagePanel.add(e.target as HTMLElement, element)
    }
    this.pagePanel.draggedElement = null;
  }

}