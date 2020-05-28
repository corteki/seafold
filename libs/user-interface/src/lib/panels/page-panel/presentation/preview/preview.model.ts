import { observable, action } from 'mobx';
import { injectable } from 'inversify';

@injectable()
export class PreviewModel {
  @observable
  inPreview = false;

  @action.bound
  toggleInPreview() {
    this.inPreview = !this.inPreview;
  }
}