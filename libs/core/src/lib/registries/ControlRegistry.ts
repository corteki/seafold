import { Registry } from './Registry';
import { EditorControl } from '../EditorControl';

export class ControlRegistry extends Registry<EditorControl> {

  private controls: Map<string, EditorControl> = new Map();

  register = (control: EditorControl) => {
    if(!this.controls.has(control.name)) {
      this.controls.set(control.name, control);
    }
  }

  getAll = (): Map<string, EditorControl> => {
    return this.controls;
  }

  unregister = (control: EditorControl): void => {
    if(this.controls.has(control.name)) {
      this.controls.delete(control.name);
    }
  }
  
}
