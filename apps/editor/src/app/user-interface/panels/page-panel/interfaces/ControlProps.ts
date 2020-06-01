import { EditModel } from '../../../../contexts/page-panel/EditModel';

export interface ControlProps {
  [value: string]: any,
  isEditing: boolean;
  model: EditModel;
}