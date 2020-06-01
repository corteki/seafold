import { ComponentType } from '@seafold/core';
import { IInsertValidator } from '../../../user-interface';

export class InsertValidator implements IInsertValidator {

  isValidInsertionSwap(type: ComponentType, dropzone: HTMLElement | null): boolean {
    return Boolean(dropzone) && Boolean(type) && type === ComponentType.CONTAINER;
  }

  isValidSwap(type: ComponentType, dropzone: HTMLElement | null, node: Node | null): boolean {
    return Boolean(dropzone) && Boolean(node) &&  Boolean(type) && type === ComponentType.ATOMIC;
  }

  isInsertingAtHigherIndex(ownIndex: number, targetIndex: number): boolean {
    return ownIndex < targetIndex;
  }

  isInsertingInSameParent(ownParentPath: string, targetParentPath: string): boolean {
    return ownParentPath === targetParentPath;
  }
  
}
