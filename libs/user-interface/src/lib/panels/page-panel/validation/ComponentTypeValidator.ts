import { ComponentType } from '@seafold/core';
import { provide } from 'inversify-binding-decorators';
import { IComponentTypeValidator } from '../IComponentTypeValidator';

@provide(IComponentTypeValidator)
export class ComponentTypeValidator {
  isAtomic = (element: HTMLElement): boolean => {
    return element.dataset?.type === ComponentType.ATOMIC;
  }
  isContainer = (element: HTMLElement): boolean => {
    return element.dataset?.type === ComponentType.CONTAINER;
  }
  isEditorElement = (element: HTMLElement): boolean => {
    return this.isAtomic(element) || this.isContainer(element);
  }
}
