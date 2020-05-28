import React from 'react';
import { EditorComponent } from '@seafold/core';
import { EditingModel } from '../layers/EditingModel';
import { injectable } from 'inversify';

@injectable()
export class ResourceFactory {
  create = (component: EditorComponent, children?: any) => {
    const Resource = component.resource;
    let properties = component.getProperties();
    properties = Object
      .keys(properties!)
      .map(key => {
        const Control = properties![key].control;
        const model = new EditingModel(properties![key]);
        if(properties![key].inline) {
          return {
            [key]: {
              ...properties![key],
              value: <Control
                      text={properties![key].value}
                      model={model}/>
            }
          }
        }
        return properties![key];
      })
      .reduce((accumulator, currentValue) => {
        return {
          ...accumulator,
          ...currentValue
        }
      }, {});
    if(children) {
      return <Resource {...properties}>{children}</Resource>
    }
    return <Resource {...properties}/>
  }
}