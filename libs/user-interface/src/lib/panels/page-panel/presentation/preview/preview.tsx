import React from 'react';

import './preview.scss';
import { PreviewModel } from './preview.model';
import { observer } from 'mobx-react';
import { Button } from '../../../../Button/Button';

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
