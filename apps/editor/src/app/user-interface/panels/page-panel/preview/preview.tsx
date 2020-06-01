import React from 'react';
import { PreviewModel } from '../../../../contexts/preview/PreviewModel';
import { observer } from 'mobx-react';
import { useEventHandler } from 'apps/editor/src/app/contexts';
import { Button } from '../../../button/Button';
import './Preview.scss';

export interface PreviewProps {
  model: PreviewModel;
}

export const Preview = observer(
  ({model}: PreviewProps) => {
  const { previewEventHandler } = useEventHandler();
  return (
    <Button onClick={previewEventHandler.toggleInPreview}>
      preview: {model.inPreview ? 'off' : 'on'}
    </Button>
  );
});

export default Preview;
