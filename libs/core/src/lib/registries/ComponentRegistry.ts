import { Registry } from './Registry';
import { EditorComponent } from '../EditorComponent';

export class ComponentRegistry extends Registry<EditorComponent> {

  private components: Map<string, EditorComponent> = new Map();

  register = (component: EditorComponent): void => {
    if(!this.components.has(component.name)) {
      this.components.set(component.name, component);
    }
  }

  getAll = (): Map<string, EditorComponent> => {
    return this.components;
  }

  unregister = (component: EditorComponent): void => {
    if(this.components.has(component.name)) {
      this.components.delete(component.name);
    }
  }
  
}
