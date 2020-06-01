import { runtime } from '@seafold/core';
import { ReactType } from 'react';

export class ControlPanelModel {
  controls = runtime.getAllControls<ReactType>();
}
