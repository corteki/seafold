import React, { FunctionComponent } from 'react';
import { Container } from "./Container";
import { ContainerEventHandler } from './ContainerEventHandler';
import { ContainerModel } from './ContainerModel';
import { EditorComponent, EditorElement } from '@seafold/core';
import { IPagePanelEventHandler } from '../../IPagePanelEventHandler';
import { useEventHandlers } from 'apps/editor/src/app/contexts';

interface RecursiveContainerFactoryProps {
  components: Map<string, EditorComponent>;
  resource: EditorElement;
}

export const RecursiveContainerFactory: FunctionComponent<RecursiveContainerFactoryProps> = 
  ({components, resource}) => {
  const component = components.get(resource.name);
  const {pagePanelEventHandler} = useEventHandlers();
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
        pagePanelEventHandler.resourceFactory.create(component, 
          resource.getDescendants()
            .map(descendant => {
              const component = components.get(descendant.name);          
              if(descendant.hasDescendants()) {
                return <RecursiveContainerFactory 
                  components={components} 
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
              {component && pagePanelEventHandler.resourceFactory.create(component)}
              </Container>
            );
          })
        )
      }
  </Container>
  )
}
