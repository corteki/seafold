import { observable, action } from 'mobx';
import { InsertModel } from './InsertModel';

export class InsertEventHandler {

  constructor(public insert: InsertModel) {}

  @action.bound
  handleDragEnter(e: React.DragEvent): void {
    e.preventDefault
    this.insert.setIsActive(true);
  }

  @action.bound
  handleDragExit(e: React.DragEvent): void {
    e.preventDefault
    this.insert.setIsActive(false);
  }

}