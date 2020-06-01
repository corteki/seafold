import { observable, action } from "mobx";
import { EditorElement, runtime, ComponentType } from '@seafold/core';
import { IInsertValidator, IComponentTypeValidator, IPagePanelNodeTraverser } from '../../user-interface';

export class PagePanelModel {

  @observable
  elements: Array<EditorElement> = runtime.getAllElements();

  @observable
  current: string = '';

  draggedElement: HTMLElement | null = null;

  constructor(
    private insertValidator: IInsertValidator,
    private pagePanelNodeTraverser: IPagePanelNodeTraverser,
    private componentTypeValidator: IComponentTypeValidator
  ) {}

  @action.bound
  update(type: any, target: HTMLElement): void {
    const {path, index} = target.dataset;
    const dropzone = target && this.pagePanelNodeTraverser.findValidDropzone(target);
    const node = target && this.pagePanelNodeTraverser.findValidNode(target);
    if(!this.draggedElement) return;
    if (this.insertValidator.isValidInsertionSwap(type, dropzone)) {
      let targetIndex = parseInt(index!, undefined);
      targetIndex = dropzone && this.shouldDecreaseIndex(targetIndex, dropzone)  ? targetIndex - 1 : targetIndex;
      this.elements = runtime.updateElement(path!, this.draggedElement.id, targetIndex);
    } else if (this.insertValidator.isValidSwap(type, dropzone, node)) {
      const index = node && this.pagePanelNodeTraverser.findIndex(node);
      this.elements = runtime.updateElement(dropzone!.id, this.draggedElement.id, index!);
    }
  }

  @action.bound
  addElementByValidDropzone(target: Node | HTMLElement, element: string): void {
    const node = this.pagePanelNodeTraverser.findValidNode(target);
    const index = node && this.pagePanelNodeTraverser.findIndex(node);
    const dropzone = this.pagePanelNodeTraverser.findValidDropzone(target as HTMLElement);
    this.elements = runtime.addElement(index && dropzone ? dropzone.id : (target as HTMLElement).id, element, index!);
  };
  
  @action.bound
  add(target: HTMLElement, element: string): void {
    const {path, index} = target.dataset;
    const dropzone = target && this.pagePanelNodeTraverser.findValidDropzone(target);
    const node = target && this.pagePanelNodeTraverser.findValidNode(target) as HTMLElement;
    this.componentTypeValidator.isEditorElement(target) || 
    this.insertValidator.isValidSwap(node?.dataset.type as ComponentType, dropzone, node) ? 
      this.addElementByValidDropzone(target, element) :
      this.elements = runtime.addElement(path!, element, parseInt(index!, undefined));
  }

  private shouldDecreaseIndex(targetIndex: number, targetDropzone: HTMLElement): boolean {
    const ownDropzone = this.draggedElement && this.pagePanelNodeTraverser.findValidDropzone(this.draggedElement);
    const ownNode = this.draggedElement && this.pagePanelNodeTraverser.findValidNode(this.draggedElement);
    let ownIndex = ownNode && this.pagePanelNodeTraverser.findIndex(ownNode);
    return ownIndex !== null && 
      this.insertValidator.isInsertingAtHigherIndex(ownIndex, targetIndex) && 
      ownDropzone !== null && 
      this.insertValidator.isInsertingInSameParent(ownDropzone.id, targetDropzone.id)
  }
}
