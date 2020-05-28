import { EditorElement } from '../EditorElement';
import { ElementRegistry } from './ElementRegistry';

export class ElementRegistryTraverser {

  constructor(private elementRegistry: ElementRegistry) {}

  findParentInRoot = (target: string): EditorElement | undefined => {
    return this.elementRegistry.isRoot(target) ?
      this.elementRegistry.root :
      this.findInRoot(target);
  }

  findInRoot = (target: string): EditorElement | undefined => {
    return this.elementRegistry.root && this.find(this.elementRegistry.root, target);
  }

  find = (parent: EditorElement, target: string): EditorElement | undefined => {
    const paths = target.split('/');
    let node: EditorElement | undefined;
    paths.forEach(id => {
      node = node ? node.getDescendantById(id) : parent.getDescendantById(id);
    });
    return node;
  }

}
