import { observable, action } from 'mobx';
import { Property } from 'libs/core/src/lib/Properties';

export class EditingModel {

  @observable
  isEditing = false;
  @observable
  value = '';

  constructor(private property?: Property<any>) {
    this.value = property?.value
  }

  @action.bound
  handleDoubleClick(e: React.MouseEvent) {
    this.isEditing = true;
  }

  @action.bound
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.value = e.currentTarget.value;
  }

  @action.bound
  handleKeyPress(e: React.KeyboardEvent) {
    if(e.key === 'Enter') {
      /**
       * store value in runtime on the element
       */
      this.isEditing = false;
      this.value = '';
    }
  }
}