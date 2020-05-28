import { runtime } from "@seafold/core";
import { EditorComponent } from '../EditorComponent';
import { ComponentType } from '../ComponentType';

describe('EditorRuntime', () => {
  const MOCK_ROOT = 'root';

  afterEach(runtime.clear);

  const createComponent = (type: ComponentType) => (name: string) => new EditorComponent(type, {}, name, {});
  const createAtomicComponent = createComponent(ComponentType.ATOMIC);
  const createContainerComponent = createComponent(ComponentType.CONTAINER);

  it('should clear all elements', () => {
    const MOCK_ATOMIC_EDITOR_COMPONENT = createAtomicComponent('Test');

    runtime.componentRegistry.register(MOCK_ATOMIC_EDITOR_COMPONENT);
    runtime.addElement(MOCK_ROOT, MOCK_ATOMIC_EDITOR_COMPONENT.name);
    let descendantAmount = runtime.elementRegistry.root?.getDescendants().length;
    expect(descendantAmount).toEqual(1);

    runtime.clear();
    descendantAmount = runtime.elementRegistry.root?.getDescendants().length;
    expect(descendantAmount).toEqual(0);
  });
  it('should add a element to the root', () => {
    const MOCK_ATOMIC_EDITOR_COMPONENT = createAtomicComponent('Test');

    runtime.componentRegistry.register(MOCK_ATOMIC_EDITOR_COMPONENT);
    runtime.addElement(MOCK_ROOT, MOCK_ATOMIC_EDITOR_COMPONENT.name);

    const registered = runtime.elementRegistry.root?.getDescendantByName(MOCK_ATOMIC_EDITOR_COMPONENT.name);
    const hasRoot = runtime.elementRegistry.elements.has(MOCK_ROOT);

    expect(hasRoot).toBeTruthy();
    expect(registered).toBeDefined();
    expect(registered?.name).toEqual(MOCK_ATOMIC_EDITOR_COMPONENT.name);
    expect(registered?.getParent().name).toEqual(MOCK_ROOT);
  });
  it('should remove a element from the root', () => {
    const MOCK_ATOMIC_EDITOR_COMPONENT_TO_KEEP = createAtomicComponent('ElementToKeep');
    const MOCK_ATOMIC_EDITOR_COMPONENT_TO_DELETE = createAtomicComponent('ElementToDelete');

    runtime.componentRegistry.register(MOCK_ATOMIC_EDITOR_COMPONENT_TO_KEEP);
    runtime.componentRegistry.register(MOCK_ATOMIC_EDITOR_COMPONENT_TO_DELETE);
    runtime.addElement(MOCK_ROOT, MOCK_ATOMIC_EDITOR_COMPONENT_TO_KEEP.name);
    runtime.addElement(MOCK_ROOT, MOCK_ATOMIC_EDITOR_COMPONENT_TO_DELETE.name);

    let toKeep = runtime.elementRegistry.root?.getDescendantByName(MOCK_ATOMIC_EDITOR_COMPONENT_TO_KEEP.name);
    let toDelete = runtime.elementRegistry.root?.getDescendantByName(MOCK_ATOMIC_EDITOR_COMPONENT_TO_DELETE.name);

    expect(toKeep).toBeDefined();
    expect(toDelete).toBeDefined();

    toDelete && runtime.removeElement(toDelete.id);

    toKeep = runtime.elementRegistry.root?.getDescendantByName(MOCK_ATOMIC_EDITOR_COMPONENT_TO_KEEP.name);
    toDelete = runtime.elementRegistry.root?.getDescendantByName(MOCK_ATOMIC_EDITOR_COMPONENT_TO_DELETE.name);

    expect(toKeep).toBeDefined();
    expect(toDelete).toBeFalsy();
  });
  it('should move a element from one place in the tree to another', () => {
    const MOCK_CONTAINER_EDITOR_COMPONENT_START = createContainerComponent('StartContainer');
    const MOCK_CONTAINER_EDITOR_COMPONENT_END = createContainerComponent('EndContainer');
    const MOCK_ATOMIC_EDITOR_COMPONENT_TO_MOVE = createAtomicComponent('ElementToMove');

    runtime.componentRegistry.register(MOCK_CONTAINER_EDITOR_COMPONENT_START);
    runtime.componentRegistry.register(MOCK_CONTAINER_EDITOR_COMPONENT_END);
    runtime.componentRegistry.register(MOCK_ATOMIC_EDITOR_COMPONENT_TO_MOVE);
    runtime.addElement(MOCK_ROOT, MOCK_CONTAINER_EDITOR_COMPONENT_START.name);
    runtime.addElement(MOCK_ROOT, MOCK_CONTAINER_EDITOR_COMPONENT_END.name);

    const start = runtime.elementRegistry.root?.getDescendantByName(MOCK_CONTAINER_EDITOR_COMPONENT_START.name);
    const end = runtime.elementRegistry.root?.getDescendantByName(MOCK_CONTAINER_EDITOR_COMPONENT_END.name);
    start && runtime.addElement(start.id, MOCK_ATOMIC_EDITOR_COMPONENT_TO_MOVE.name);

    const startPositionElement = start && start.getDescendantByName(MOCK_ATOMIC_EDITOR_COMPONENT_TO_MOVE.name);

    expect(startPositionElement?.name).toEqual(MOCK_ATOMIC_EDITOR_COMPONENT_TO_MOVE.name);
    expect(end?.hasDescendants()).toBeFalsy();

    end && startPositionElement && runtime.updateElement(end.getPath(), startPositionElement.getPath());
    const endPositionElement = end && end.getDescendantByName(MOCK_ATOMIC_EDITOR_COMPONENT_TO_MOVE.name);

    expect(endPositionElement?.name).toEqual(MOCK_ATOMIC_EDITOR_COMPONENT_TO_MOVE.name);
    expect(start?.hasDescendants()).toBeFalsy();
    expect(startPositionElement!.equals(endPositionElement!)).toBeTruthy();
  })
});