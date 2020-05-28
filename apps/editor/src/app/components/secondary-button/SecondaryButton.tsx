import React, { PureComponent } from 'react';
import { Property, ComponentType, Resource, Configurable } from '@seafold/core';
import { TextControl } from '../../controls/TextControl';
import { StyleControl } from '../../controls/StyleControl';

interface SecondaryButtonProps {
  text: Property<string>,
  style: Property<object>
}

@Resource.EditorComponent(ComponentType.ATOMIC)
export class SecondaryButton extends PureComponent<SecondaryButtonProps> {

  @Configurable.InlineProperty('Secondary Button', TextControl)
  private readonly text?: string;

  @Configurable.Property({
    width: '100%',
    padding: '16px 32px',
    borderRadius: '4px',
    backgroundColor: 'rgb(113, 207, 113)',
    color: 'white',
    border: 'none',
    outline: 'none',
    cursor: 'pointer'
  }, StyleControl)
  private readonly style?: string;

  render() {
    const {text, style} = this.props;
    debugger;
    return (
      <button style={style.value}>
        {text.value}
      </button>
    )
  }
}