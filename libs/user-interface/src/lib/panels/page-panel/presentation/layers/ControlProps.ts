import { EditingModel } from './EditingModel';

export interface ControlProps {
  [value: string]: any,
  isEditing: boolean;
  model: EditingModel;
}