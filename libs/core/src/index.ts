import { EditorRuntime } from './lib/editor-runtime/EditorRuntime'
import { Resource as resource } from './lib/decorators/Resource';
import { State as state } from './lib/decorators/State';
import { Configurable as configurable } from './lib/decorators/Configurable';
import { ComponentRegistry } from './lib/registries/ComponentRegistry';
import { ControlRegistry } from './lib/registries/ControlRegistry';
import { ElementRegistry } from './lib/registries/ElementRegistry';
import { ElementRegistryTraverser } from './lib/registries/ElementRegistryTraverser';
import { EditorElementFactory } from './lib/EditorElementFactory';
export { EditorComponent } from './lib/EditorComponent';
export { EditorControl } from './lib/EditorControl';
export { EditorElement } from './lib/EditorElement';
export { ComponentType } from './lib/ComponentType';
export { Property } from './lib/Properties';

const controlRegistry = new ControlRegistry();
const componentRegistry = new ComponentRegistry();
const elementRegistry = new ElementRegistry();
const elementRegistryTraverser = new ElementRegistryTraverser(elementRegistry);
const editorElementFactory = new EditorElementFactory();
export const runtime = new EditorRuntime(componentRegistry, controlRegistry, elementRegistry, elementRegistryTraverser, editorElementFactory);
export const Resource = new resource(runtime);
export const State = new state();
export const Configurable = new configurable();
