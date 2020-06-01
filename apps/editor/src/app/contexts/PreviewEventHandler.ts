import { action } from 'mobx';
import { PreviewModel } from './PreviewModel';

export class PreviewEventHandler {
  
  constructor(public preview: PreviewModel) {}

  @action.bound
  toggleInPreview() {
    this.preview.inPreview = !this.preview.inPreview;
  }

}