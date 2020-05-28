import { observable, action } from 'mobx';

export class InsertModel {
  @observable
  isActive = false;

  public path: string;

  constructor(
    public index: number,
    path: string = ''
  ) {
    this.path = this.setPath(path);
  }

  @action.bound
  handleDragEnter(e: React.DragEvent): void {
    e.preventDefault
    this.isActive = true;
  }

  @action.bound
  handleDragExit(e: React.DragEvent): void {
    e.preventDefault
    this.isActive = false;
  }

  private setPath(path: string): string {
    if (!path || path === '') {
      return 'root';
    }
    return path;
  }
}