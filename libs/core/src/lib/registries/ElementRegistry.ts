import { Registry } from './Registry';
import { EditorElement } from '../EditorElement';

export class ElementRegistry extends Registry<EditorElement> {

  root: EditorElement | undefined;
  elements: Map<string, EditorElement> = new Map();

  constructor() {
    super();
    this.setRoot();
  }

  isRoot = (name: string): boolean => {
    return this.elements.has(name);
  }

  register = (element: EditorElement, index?: number): void => {
    if(this.root) {
      element.setParent(this.root);
      this.root.addDescendant(element, index);
    }
  }

  getAll = (): Map<string, EditorElement> => {
    return this.elements;
  }

  unregister = (element: EditorElement): void => {
    if(this.root && this.root.getDescendantById(element.id)) {
      this.root.removeDescendantById(element.id)
    }
  }

  clearAll = (): void => {
    this.elements = new Map();
    this.setRoot();
  }

  private setRoot = () => {
    this.root = new EditorElement('root');
    this.elements.set(this.root.name, this.root);
  }
  
}
