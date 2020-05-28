import React, { PureComponent } from 'react';
import { ComponentType, Resource } from '@seafold/core'

@Resource.EditorComponent(ComponentType.CONTAINER)
export class Row extends PureComponent {
  render() {
    return (
      <div style={{
        display: 'flex',
        padding: 'calc(var(--base-padding) * 2px)',
        margin: 'calc(var(--base-margin)* 1px) 0',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        {this.props.children}
      </div>
    )
  }
}