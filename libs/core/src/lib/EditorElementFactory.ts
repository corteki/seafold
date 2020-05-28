import { EditorElement } from './EditorElement';

export class EditorElementFactory {
  create = (name: string): EditorElement => {
    return new EditorElement(name);
  }
}