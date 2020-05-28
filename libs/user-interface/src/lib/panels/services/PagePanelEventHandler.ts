import { PagePanelModel } from '../page-panel/presentation/PagePanelModel';
import { action } from 'mobx';
import { runtime } from '@seafold/core';
import { inject } from 'inversify';
import { IPagePanelEventHandler } from '../page-panel/IPagePanelEventHandler';
import { provide } from 'inversify-binding-decorators';
import { PreviewModel } from '../page-panel/presentation/preview/PreviewModel';
import { ResourceFactory } from '../page-panel/presentation/container/ResourceFactory';

@provide(IPagePanelEventHandler)
export class PagePanelEventHandler implements IPagePanelEventHandler {
  
  @inject(PagePanelModel) 
  public pagePanel!: PagePanelModel;

  @inject(PreviewModel) 
  public preview!: PreviewModel;

  @inject(ResourceFactory)
  public resourceFactory!: ResourceFactory

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