import { observable, action } from 'mobx';

export class PreviewModel {
  @observable
  inPreview = false;
}