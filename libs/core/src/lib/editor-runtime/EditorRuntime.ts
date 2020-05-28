import { ComponentRegistry } from '../registries/ComponentRegistry';
import { ControlRegistry } from '../registries/ControlRegistry';
import { ElementRegistry } from '../registries/ElementRegistry';
import { EditorElement } from '../EditorElement';
import { ElementRegistryTraverser } from '../registries/ElementRegistryTraverser';
import { EditorElementFactory } from '../EditorElementFactory';

export class EditorRuntime {
  constructor(
    public componentRegistry: ComponentRegistry,
    public controlRegistry: ControlRegistry,
    public elementRegistry: ElementRegistry,
    private elementRegistryTraverser: ElementRegistryTraverser,
    private editorElementFactory: EditorElementFactory
  ) {}

  getAllComponents = <T>(): Array<T> => {
    const values = this.componentRegistry.getAll().values();
    return Array.from(values).map(value => value.resource);
  }

  getAllControls = <T>(): Array<T> => {
    const values = this.controlRegistry.getAll().values();
    return Array.from(values).map(value => value.resource);
  }

  getAllElements = (): Array<EditorElement> => {
    const values = this.elementRegistry.getAll().values();
    return Array.from(values);
  }

  addElement = (target: string, name: string, index?: number): Array<EditorElement> => {
    const element = this.editorElementFactory.create(name);
    if(this.elementRegistry.isRoot(target)) {
      this.elementRegistry.register(element, index);
    } else {
      const targetDescendant = this.elementRegistryTraverser.findInRoot(target);
      targetDescendant && element.setParent(targetDescendant);
      targetDescendant && targetDescendant.addDescendant(element, index);
    }
    return this.getAllElements();
  }

  updateElement = (targetPath: string, selectedPath: string, index?: number): Array<EditorElement> => {
    debugger;
    this.updateElementsInRegistry(targetPath, selectedPath, index);
    return this.getAllElements();
  }

  removeElement = (selected: string): Array<EditorElement> => {
    const targetDescendant = this.elementRegistryTraverser.findInRoot(selected);
    targetDescendant?.getParent().removeDescendantById(targetDescendant.id);
    return this.getAllElements();
  }

  clear = () => {
    this.elementRegistry.clearAll();
    return this.getAllElements();
  }

  getIndex = (path: string): number => {
    const element = this.getChildByPath(path);
    return element ? element.getIndexRelativeToParent() : -1;
  }

  private updateElementsInRegistry(targetPath: string, selectedPath: string, index: number | undefined) {
    const targetChild = this.getChildByPath(selectedPath);
    const targetParent = this.getParentByPath(targetPath);
    if (this.isValidChildParentRelationship(targetChild, targetParent)) {
      const child = targetChild as EditorElement;
      const parent = targetParent as EditorElement;
      this.removeElement(selectedPath);
      child.setParent(parent);
      parent.addDescendant(child, index);
    }
  }

  private getChildByPath(selectedPath: string) {
    return this.elementRegistryTraverser.findInRoot(selectedPath);
  }

  private getParentByPath(targetPath: string) {
    return this.elementRegistryTraverser.findParentInRoot(targetPath);
  }

  private isValidChildParentRelationship(child: EditorElement | undefined, parent: EditorElement | undefined): boolean {
    const isNestingParentInChild = child && parent && this.elementRegistryTraverser.find(child, parent.getPath())
    return Boolean(child && parent && !child.equals(parent) && !isNestingParentInChild);
  }

}
