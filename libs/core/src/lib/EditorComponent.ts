import { ComponentType } from './ComponentType';
import { Properties } from './Properties';

export class EditorComponent {

  private properties: Properties = {};
  constructor(
    public type: ComponentType,
    public name: string,
    public resource: any
  ) {}

  getProperties = (): Properties => this.properties;

  addProperty = (properties: Properties) => {
    this.properties = {
      ...this.properties, 
      ...properties
    }
  }
}
