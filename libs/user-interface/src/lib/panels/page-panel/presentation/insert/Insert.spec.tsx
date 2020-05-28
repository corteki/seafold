import React from 'react';
import { InsertEventHandler } from "./InsertEventHandler"
import {cleanup, render} from '@testing-library/react';
import { Insert } from './Insert';
import { InsertModel } from './InsertModel';

describe('<Insert />', () => {
  afterEach(cleanup);
  it('should set a path and index defined by the InsertModel', () => {
    const model = new InsertModel(0, '');
    const eventHandler = new InsertEventHandler(model);

    const {getByTestId} = render(
      <Insert eventHandler={eventHandler}/>
    );

    const element = getByTestId('insert-0');

    expect(element.className).toEqual('insert');
    expect(element.dataset.path).toEqual('root');
    expect(element.dataset.index).toEqual('0');
  });
  it('should set the className to "insert--active" when the onDragEnter event is triggered');
});
