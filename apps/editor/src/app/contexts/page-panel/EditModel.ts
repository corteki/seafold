import { observable, action } from 'mobx';
import { Property } from 'libs/core/src/lib/Properties';

export class EditModel {

  @observable
  isEditing = false;

  @observable
  value = '';

  constructor(private property?: Property<any>) {
    this.value = property?.value
  }

}