import { action } from 'mobx';
import { EditModel } from './EditModel';

export class EditEventHandler {

  constructor(private edit: EditModel) {}

  @action.bound
  handleDoubleClick(e: React.MouseEvent) {
    this.edit.isEditing = true;
  }

  @action.bound
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.edit.value = e.currentTarget.value;
  }

  @action.bound
  handleKeyPress(e: React.KeyboardEvent) {
    if(e.key === 'Enter') {
      /**
       * store value in runtime on the element
       */
      this.edit.isEditing = false;
      this.edit.value = '';
    }
  }
}