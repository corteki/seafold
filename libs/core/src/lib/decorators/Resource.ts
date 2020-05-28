import 'reflect-metadata';
import { EditorRuntime } from '../editor-runtime/EditorRuntime';
import { EditorControl } from '../EditorControl';
import { EditorComponent } from '../EditorComponent';
import { ComponentType } from '../ComponentType';
import { Configurable } from './Configurable';

export class Resource {
  constructor(
    private editorRuntime: EditorRuntime
  ) {}

  EditorControl = (resource: any) => {
    const control = new EditorControl(resource.name, resource);
    this.editorRuntime.controlRegistry.register(control);
  }
  EditorComponent = (type: ComponentType) => (resource: any) => {
    const component = new EditorComponent(type, resource.name, resource);
    const properties = Reflect.getMetadata(Configurable.PROPERTY_SYMBOL, resource);
    const handlers = Reflect.getMetadata(Configurable.HANDLER_SYMBOL, resource);
    console.log(handlers)
    component.addProperty(properties);
    this.editorRuntime.componentRegistry.register(component);
  } 
}
