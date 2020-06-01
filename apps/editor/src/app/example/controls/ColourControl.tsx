import React, { PureComponent } from 'react'
import {Resource} from '@seafold/core';

@Resource.EditorControl
export class ColourControl extends PureComponent {
  handlePrimaryColourChange = () => {}
  render() {
    return (
      <article>
        <h3>Colours: </h3>
        <div>
          <label>primary colour: </label>
          <input 
            onChange={this.handlePrimaryColourChange} 
            type="color" />
        </div>
      </article>
    );
  }
}