import { ComponentType } from '@seafold/core';

export const IInsertValidator = 'IInsertValidator';
export interface IInsertValidator {
  isValidInsertionSwap: (type: ComponentType, dropzone: HTMLElement | null) => boolean;
  isValidSwap: (type: ComponentType, dropzone: HTMLElement | null, node: Node | null) => boolean;
  isInsertingAtHigherIndex: (ownIndex: number, targetIndex: number) => boolean;
  isInsertingInSameParent: (ownParentPath: string, targetParentPath: string) => boolean;
}
