import { Entity } from './Entity';

export class EditorElement extends Entity {
  private parent: any;
  private descendants: Array<EditorElement> = [];
  private path: string = '';
  constructor(
    public name: string,
  ) {
    super();
  }

  setParent = (parent: EditorElement): void => {
    this.parent = parent;
    this.setPath(parent.getPath());
    this.updateDescendantPaths(this.descendants);
  }

  getParent = (): EditorElement => {
    return this.parent;
  }

  getIndexRelativeToParent = (): number => {
    return this.getParent().getDescendants().indexOf(this);
  }

  getLastDescendantIndex = (): number => {
    return this.getDescendants().length;
  }

  updateDescendantPaths = (descendants: Array<EditorElement>) => {
    if(descendants.length === 0) {
      return;
    }
    descendants.forEach(descendant => {
      descendant.setParent(this);
    })
  }
  private setPath = (path: string) => {
    this.path = path !== '' ? `${path}/${this.id}` : this.id;
  }

  /**
   * a path is the id of the element in relation to its parent's id
   */
  getPath = (): string => {
    return this.path;
  }

  hasParent = (): boolean => {
    return this.parent.name !== '';
  }

  addDescendant = (descendant: EditorElement, index: number = 0) => {
    this.descendants = [
      ...this.descendants.slice(0, index),
      descendant,
      ...this.descendants.slice(index)
    ];
  }

  getDescendantById = (id: string) => {
    return this.descendants.find(descendant => descendant.id === id);
  }

  getDescendantByName = (name: string) => {
    return this.descendants.find(descendant => descendant.name === name);
  }

  removeDescendantById = (id: string): void => {
    this.descendants = this.descendants.filter(descendant => descendant.id !== id);
  }

  getDescendants = (): Array<EditorElement> => {
    return this.descendants;
  }

  hasDescendants = (): boolean => {
    return this.descendants.length > 0;
  }

}