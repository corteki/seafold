import { runtime } from '@seafold/core';
import { ReactType } from 'react';

export class ComponentPanelModel {
  components = runtime.getAllComponents<ReactType>();

  handleDrag = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', e.currentTarget.id);
  }
  
}