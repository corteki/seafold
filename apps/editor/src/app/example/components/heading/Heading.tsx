import React, { PureComponent } from 'react';
import { ComponentType, Resource, Configurable, Property } from '@seafold/core'
import { TextControl } from '../../controls/TextControl';

interface HeadingProps {
  text: Property<string>;
}

@Resource.EditorComponent(ComponentType.ATOMIC)
export class Heading extends PureComponent<HeadingProps> {

  @Configurable.InlineProperty('My heading', TextControl)
  private readonly text?: string;

  render() {
    const { text } = this.props;
    return (
    <h3>{text.value}</h3>
    )
  }
}