import React from 'react'
import {Resource} from '@seafold/core';

@Resource.EditorControl
export class Spacing extends React.PureComponent {
  state = {
    baseUnit: 1,
    padding: 8,
    margin: 0
  }
  componentDidMount() {
    document.documentElement.style.setProperty('--base-padding', this.state.padding.toString());
    document.documentElement.style.setProperty('--base-margin', this.state.margin.toString());
  }
  handleBaseUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({baseUnit: e.target.value});
  }
  handlePaddingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty('--base-padding', e.target.value);
    this.setState({
      ...this.state,
      padding: e.target.value
    });
  }
  handleMarginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    document.documentElement.style.setProperty('--base-margin', e.target.value);
    this.setState({
      ...this.state,
      margin: e.target.value
    });
  }
  render() {
    return (
      <article>
        <h3>Global spacing</h3>
        <div>
          <label>base unit: {this.state.baseUnit}</label>
          <input 
            onChange={this.handleBaseUnitChange} 
            type="range" 
            min="0" 
            max="64" 
            step="1" 
            defaultValue={this.state.baseUnit}/>
        </div>
        <div>
          <label>padding: {this.state.padding}</label>
          <input 
            onChange={this.handlePaddingChange} 
            type="range" 
            min="0" 
            max="64" 
            step={this.state.baseUnit} 
            defaultValue={this.state.padding}/>
        </div>
        <div>
          <label>margin: {this.state.margin}</label>
          <input 
            onChange={this.handleMarginChange} 
            type="range" 
            min="0" 
            max="64" 
            step={this.state.baseUnit} 
            defaultValue={this.state.margin}/>
        </div>
      </article>
    )
  }
}