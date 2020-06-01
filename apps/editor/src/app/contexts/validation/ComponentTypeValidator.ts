import { ComponentType } from '@seafold/core';
import { IComponentTypeValidator } from '../../user-interface/panels/page-panel/IComponentTypeValidator';

export class ComponentTypeValidator implements IComponentTypeValidator {

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
