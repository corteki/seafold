import { EditingModel } from '../layers/EditingModel';

export interface ControlProps {
  [value: string]: any,
  isEditing: boolean;
  model: EditingModel;
}