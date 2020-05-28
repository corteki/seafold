import React, { PureComponent, ReactType } from 'react';
import { Resource, ComponentType, Configurable, Property, State } from '@seafold/core';
import './Card.scss';
import { TextControl } from '../../controls/TextControl';

@Resource.EditorComponent(ComponentType.CONTAINER)
export class Card extends PureComponent<{heading: Property<string>, text: Property<string>}> {

  @State.Receiver
  private readonly count: number = 0;

  @Configurable.InlineProperty('My default card heading', TextControl)
  private readonly heading?: string;
  
  @Configurable.InlineProperty('My default text', TextControl)
  private readonly text?: string;

  render() {
    const {heading, text, children} = this.props;
    debugger;
    return (
      <article className='card'>
        <h3 className='card__heading'>
          {heading.value}
        </h3>
        <p className='card__text'>{text.value}</p>
        <div  className='card__content'>
          {children}
        </div>
      </article>
    );
  }
}