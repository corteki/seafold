import { v1 as uuidv1 } from 'uuid';

export abstract class Entity {
  private _id: string;

  constructor() {
    this._id = uuidv1();
  }

  get id(): string {
    return this._id;
  }

  equals(object: Object): boolean {
    const other = object as Entity;
    if(other === null) {
      return false;
    }
    if(this === other) {
      return true;
    }
    if(this._id === null || other.id === null) {
      return false;
    }
    return this._id === other.id;
  }

}