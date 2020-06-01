import React, { PureComponent } from 'react';
import { ComponentType, Resource } from '@seafold/core'

@Resource.EditorComponent(ComponentType.ATOMIC)
export class Field extends PureComponent {
  render() {
    return (
      <input style={{
        width: '100%',
        height: '32px',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid grey',
        outline: 'none'
      }}
      type="text"/>
    )
  }
}