import 'reflect-metadata';
import { Properties } from '../Properties';

export class Configurable {

  private properties: Properties = {};
  private handlers: any = {};
  static readonly PROPERTY_SYMBOL = Symbol('property');
  static readonly HANDLER_SYMBOL = Symbol('handler');

  InlineProperty = <T, U>(defaultValue: T, control: U) =>
    (target: any, property: string): any => {
      this.properties = {
        ...this.properties,
        [property]: {
          value: defaultValue,
          control,
          inline: true
        }
      }
      Reflect.defineMetadata(Configurable.PROPERTY_SYMBOL, this.properties, target.constructor);
  }

  Property = <T, U>(defaultValue: T, control: U) =>
    (target: any, property: string): any => {
      this.properties = {
        ...this.properties,
        [property]: {
          value: defaultValue,
          control,
          inline: false
        }
      }
      Reflect.defineMetadata(Configurable.PROPERTY_SYMBOL, this.properties, target.constructor);
  }
  
  Handler = (target: any, property: string): any => {
    this.handlers = {
      ...this.handlers,
      [property]: {
        actions: [],
      }
    }
    Reflect.defineMetadata(Configurable.HANDLER_SYMBOL, this.handlers, target.constructor);
  }
}
