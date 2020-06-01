import React, { PureComponent } from 'react';
import { Property, ComponentType, Resource, Configurable } from '@seafold/core';
import { TextControl } from '../../controls/TextControl';

interface PrimaryButtonProps {
  text: Property<string>;
  // style: Property<object>;
  actions: Array<Function>;
}

@Resource.EditorComponent(ComponentType.ATOMIC)
export class PrimaryButton extends PureComponent<PrimaryButtonProps> {

  @Configurable.InlineProperty('Primary Button', TextControl)
  private readonly text?: string;

  // @Configurable.Property({
  //   width: '100%',
  //   padding: 'calc(var(--base-padding) * 2px) calc(var(--base-padding) * 4px)',
  //   margin: 'calc(var(--base-margin)* 1px) 0',
  //   borderRadius: '4px',
  //   backgroundColor: 'rgb(113, 113, 207)',
  //   color: 'white',
  //   border: 'none',
  //   outline: 'none',
  //   cursor: 'pointer'
  // }, StyleControl)
  // private readonly style?: string;

  @Configurable.Handler
  private onClick = () => {
    this.props.actions?.forEach(action => action());
  }

  render() {
    const {text} = this.props;
    return (
      <button 
        onClick={this.onClick}>
        {text.value}
      </button>
    )
  }
}
