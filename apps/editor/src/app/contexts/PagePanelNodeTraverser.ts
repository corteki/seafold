import { IPagePanelNodeTraverser } from '../user-interface/panels/page-panel/IPagePanelNodeTraverser';
import { IComponentTypeValidator } from '../user-interface/panels/page-panel/IComponentTypeValidator';

export class PagePanelNodeTraverser implements IPagePanelNodeTraverser {

  constructor(private componentTypeValidator: IComponentTypeValidator) {}

  findIndex = (node: Node): number | null => {
    return Array.from(node.parentNode!.children)
      .filter(child => (child as HTMLElement).dataset.type !== undefined)
      .indexOf(node as Element);
  }
  findValidDropzone = (target: HTMLElement): HTMLElement | null => {
    if(this.componentTypeValidator.isContainer(target)) {
      return (target as HTMLElement);
    }
    const parent = target.parentElement;
    return parent && this.findValidDropzone(parent);
  }
  findValidNode = (target: Node): Node | null => {
    if(this.componentTypeValidator.isAtomic((target as HTMLElement))) {
      return (target as Node);
    }
    const parent = target.parentNode;
    return parent && this.findValidNode(parent);
  }
}