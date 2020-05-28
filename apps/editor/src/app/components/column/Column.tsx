import React, { PureComponent } from 'react';
import { ComponentType, Resource, Configurable, Property, State } from '@seafold/core'

@Resource.EditorComponent(ComponentType.CONTAINER)
export class Column extends PureComponent {
  render() {
    return (
      <div style={{
        display: 'flex',
        padding: 'calc(var(--base-padding) * 2px)',
        margin: 'calc(var(--base-margin)* 1px) 0',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        {this.props.children}
      </div>
    )
  }
}