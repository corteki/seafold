import { observable } from 'mobx';
import { ComponentType, EditorElement } from '@seafold/core';
import { Properties } from 'libs/core/src/lib/Properties';

export class ContainerModel {

  @observable
  selected = false;

  @observable
  path = '';

  @observable
  parentPath = '';

  @observable
  index = 0;

  @observable
  lastIndex = 0;

  @observable
  type: ComponentType | undefined;

  @observable
  name: string | undefined;

  constructor(resource: EditorElement, type: ComponentType) {
    this.path = resource.getPath();
    this.parentPath = resource.getParent().getPath();
    this.index = resource.getIndexRelativeToParent()
    this.lastIndex = resource.getLastDescendantIndex();
    this.name = resource.name;
    this.type = type;
  }
}
