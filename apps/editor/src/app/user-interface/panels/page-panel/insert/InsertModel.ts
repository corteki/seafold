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
  setIsActive(isActive: boolean): void {
    this.isActive = isActive;
  }

  private setPath(path: string): string {
    if (!path || path === '') {
      return 'root';
    }
    return path;
  }
}