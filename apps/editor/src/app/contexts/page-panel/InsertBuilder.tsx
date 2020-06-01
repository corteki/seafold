import React from 'react';
import { InsertModel } from '../../user-interface/panels/page-panel/insert/InsertModel';
import { InsertEventHandler } from '../../user-interface/panels/page-panel/insert/InsertEventHandler';
import { Insert } from '../../user-interface/panels/page-panel/insert/Insert';

export class InsertBuilder {

  private index = 0;
  private path = '';

  withIndex(index: number) {
    this.index = index;
    return this;
  }

  withPath(path: string) {
    this.path = path;
    return this;
  }

  build() {
    return (
      <Insert 
        eventHandler={
          new InsertEventHandler(
            new InsertModel(this.index, this.path)
          )
        }/>
    );
  }
  
}
