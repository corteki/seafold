import React, { PureComponent } from 'react';
import { observer } from 'mobx-react';
import { ControlProps } from '../../user-interface';
import './Control.scss';

interface TextControlProps extends Partial<ControlProps> {
  text: string;
}

@observer
export class TextControl extends PureComponent<TextControlProps> {
  render() {
    const {model} = this.props;
    return (
      <div onDoubleClick={model?.handleDoubleClick}>
      {
        model?.isEditing ?
          <input 
            className="control__field"
            value={model.value}
            onChange={model.handleChange} 
            onKeyPress={model.handleKeyPress}/>
        :
        this.props.text
      }
      </div>
    );
  }
}
