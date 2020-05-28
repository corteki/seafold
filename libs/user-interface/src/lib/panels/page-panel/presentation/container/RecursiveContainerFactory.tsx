import React, { FunctionComponent } from 'react';
import { Container } from "./Container";
import { ContainerEventHandler } from './ContainerEventHandler';
import { ContainerModel } from './ContainerModel';
import { EditorComponent, EditorElement } from '@seafold/core';
import { IPagePanelEventHandler } from '@seafold/user-interface';

interface RecursiveContainerFactoryProps {
  components: Map<string, EditorComponent>;
  resource: EditorElement;
  eventHandler: IPagePanelEventHandler;
}

export const RecursiveContainerFactory: FunctionComponent<RecursiveContainerFactoryProps> = 
  ({components, resource, eventHandler}) => {
  const component = components.get(resource.name);
  return (
  <Container
    eventHandler={
      new ContainerEventHandler(
        new ContainerModel(resource, component!.type), 
        eventHandler
      )
    }>
    {
      component && 
        eventHandler.resourceFactory.create(component, 
          resource.getDescendants()
            .map(descendant => {
              const component = components.get(descendant.name);          
              if(descendant.hasDescendants()) {
                return <RecursiveContainerFactory 
                  components={components} 
                  resource={descendant}
                  eventHandler={eventHandler}/>
              }
              return (
              <Container
                eventHandler={
                  new ContainerEventHandler(
                    new ContainerModel(descendant, component!.type), 
                    eventHandler
                  )
                }>
              {component && eventHandler.resourceFactory.create(component)}
              </Container>
            );
          })
        )
      }
  </Container>
  )
}
