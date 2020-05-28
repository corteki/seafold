import React from 'react';
import { PreviewModel } from './PreviewModel';
import { observer } from 'mobx-react';
import { Button } from '../../../../Button/Button';
import './Preview.scss';

/* eslint-disable-next-line */
export interface PreviewProps {
  model: PreviewModel;
}

export const Preview = observer(
  ({model}: PreviewProps) => {
  return (
    <Button onClick={model.toggleInPreview}>
      preview: {model.inPreview ? 'off' : 'on'}
    </Button>
  );
});

export default Preview;
