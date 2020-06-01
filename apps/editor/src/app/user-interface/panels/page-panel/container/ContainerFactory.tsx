import React, { PureComponent } from 'react';
import Container from './Container';
import { ContainerEventHandler } from './ContainerEventHandler';
import { ContainerModel } from './ContainerModel';
import { IPagePanelEventHandler } from '../../..';
import { EditorElement, ComponentType } from '@seafold/core';

interface ContainerFactoryProps {
  resource: EditorElement,
  type: ComponentType,
  eventHandler: IPagePanelEventHandler,
}

export class ContainerFactory extends PureComponent<ContainerFactoryProps> {
  render() {
    const {resource, type, eventHandler, children} = this.props
    return (
      <Container
        eventHandler={
          new ContainerEventHandler(
            new ContainerModel(resource, type), 
            eventHandler
          )
      }>
      {children}
    </Container>
    );
  }
}