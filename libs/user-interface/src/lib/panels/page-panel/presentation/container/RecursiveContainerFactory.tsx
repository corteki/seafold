import React, { FunctionComponent } from 'react';
import { Container } from "./Container";
import { ContainerController } from './ContainerController';
import { ContainerModel } from './ContainerModel';
import { EditorComponent, EditorElement } from '@seafold/core';
import { IPagePanelEventHandler } from '@seafold/user-interface';
import { ResourceFactory } from './ResourceFactory';

interface RecursiveContainerFactoryProps {
  components: Map<string, EditorComponent>;
  resource: EditorElement;
  controller: IPagePanelEventHandler;
}

export const RecursiveContainerFactory: FunctionComponent<RecursiveContainerFactoryProps> = 
  ({components, resource, controller}) => {
  const component = components.get(resource.name);
  return (
  <Container
    controller={
      new ContainerController(
        new ContainerModel(resource, component!.type), 
        controller
      )
    }>
    {
      component && 
      controller.resourceFactory.create(component, 
          resource.getDescendants()
            .map(descendant => {
              const component = components.get(descendant.name);          
              if(descendant.hasDescendants()) {
                return <RecursiveContainerFactory 
                  components={components} 
                  resource={descendant}
                  controller={controller}/>
              }
              return (
              <Container
                controller={
                  new ContainerController(
                    new ContainerModel(descendant, component!.type), 
                    controller
                  )
                }>
              {component && controller.resourceFactory.create(component)}
              </Container>
            );
          })
        )
      }
  </Container>
  )
}
