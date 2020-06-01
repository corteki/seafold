export const IPagePanelNodeTraverser = 'IPagePanelNodeTraverser';
export interface IPagePanelNodeTraverser {
  findIndex: (node: Node) => number | null;
  findValidDropzone: (target: HTMLElement) => HTMLElement | null;
  findValidNode: (target: Node) => Node | null;
}
