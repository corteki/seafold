import React, { PureComponent } from 'react';
import { Property, ComponentType, Resource, Configurable } from '@seafold/core';
import { TextControl } from '../../controls/TextControl';
import { StyleControl } from '../../controls/StyleControl';

interface TertiaryButtonProps {
  text: Property<string>,
  style: Property<object>
}

@Resource.EditorComponent(ComponentType.ATOMIC)
export class TertiaryButton extends PureComponent<TertiaryButtonProps> {

  @Configurable.InlineProperty('Tertiary Button', TextControl)
  private readonly text?: string;

  @Configurable.Property({
    width: '100%',
    padding: '16px 32px',
    borderRadius: '4px',
    backgroundColor: 'rgb(207, 113, 113)',
    color: 'white',
    border: 'none',
    outline: 'none',
    cursor: 'pointer'
  }, StyleControl)
  private readonly style?: string;

  render() {
    const {text, style} = this.props;
    return (
      <button style={style.value}>
        {text.value}
      </button>
    )
  }
}