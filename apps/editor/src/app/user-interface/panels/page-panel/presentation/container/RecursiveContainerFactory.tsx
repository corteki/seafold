import React, { FC } from 'react';
import { Container } from "./Container";
import { ContainerEventHandler } from './ContainerEventHandler';
import { ContainerModel } from './ContainerModel';
import { EditorElement, runtime } from '@seafold/core';
import { useEventHandlers, useFactory, useRuntime } from 'apps/editor/src/app/contexts';

interface RecursiveContainerFactoryProps {
  resource: EditorElement;
}

export const RecursiveContainerFactory: FC<RecursiveContainerFactoryProps> = 
  ({resource}) => {
  const { components } = useRuntime();
  const { pagePanelEventHandler } = useEventHandlers();
  const { resourceFactory } = useFactory();
  const component = components.get(resource.name);
  return (
  <Container
    key={resource.id}
    eventHandler={
      new ContainerEventHandler(
        new ContainerModel(resource, component!.type), 
        pagePanelEventHandler
      )
    }>
    {
      component && 
        resourceFactory.create(component, 
          resource.getDescendants()
            .map(descendant => {
              const component = components.get(descendant.name);          
              if(descendant.hasDescendants()) {
                return <RecursiveContainerFactory
                  resource={descendant}/>
              }
              return (
              <Container
                key={descendant.id}
                eventHandler={
                  new ContainerEventHandler(
                    new ContainerModel(descendant, component!.type), 
                    pagePanelEventHandler
                  )
                }>
              {component && resourceFactory.create(component)}
              </Container>
            );
          })
        )
      }
  </Container>
  )
}
