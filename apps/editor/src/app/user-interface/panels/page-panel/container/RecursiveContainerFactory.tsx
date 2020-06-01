import React, { FC } from 'react';
import { EditorElement } from '@seafold/core';
import { useEventHandler, useFactory, useRuntime } from 'apps/editor/src/app/contexts';
import { ContainerFactory } from './ContainerFactory';

interface RecursiveContainerFactoryProps {
  resource: EditorElement;
}

export const RecursiveContainerFactory: FC<RecursiveContainerFactoryProps> = 
  ({resource}) => {
  const { components } = useRuntime();
  const { pagePanelEventHandler } = useEventHandler();
  const { resourceFactory } = useFactory();
  const component = components.get(resource.name);
  return (
    <ContainerFactory 
      key={resource.id}
      eventHandler={pagePanelEventHandler} 
      resource={resource} 
      type={component!.type}>
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
                <ContainerFactory
                  key={descendant.id}
                  resource={descendant}
                  type={component!.type}
                  eventHandler={pagePanelEventHandler}>
                  {component && resourceFactory.create(component)}
                </ContainerFactory>
              );
            })
          )
        }
    </ContainerFactory>
  )
}
