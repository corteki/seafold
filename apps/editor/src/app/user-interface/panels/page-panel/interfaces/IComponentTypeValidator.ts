export interface IComponentTypeValidator {
  isAtomic: (element: HTMLElement) => boolean;
  isContainer: (element: HTMLElement) => boolean;
  isEditorElement: (element: HTMLElement) => boolean;
}
