import React from 'react';
import { InsertModel } from "./InsertModel"
import {cleanup, render} from '@testing-library/react';
import { Insert } from './Insert';

describe('<Insert />', () => {
  afterEach(cleanup);
  it('should set a path and index defined by the InsertModel', () => {
    const insertModel = new InsertModel(0, '');

    const {getByTestId} = render(
      <Insert model={insertModel}/>
    );

    const element = getByTestId('insert-0');

    expect(element.className).toEqual('insert');
    expect(element.dataset.path).toEqual('root');
    expect(element.dataset.index).toEqual('0');
  });
  it('should set the className to "insert--active" when the onDragEnter event is triggered');
});
