import React, { PureComponent } from 'react';
import { ComponentType, Resource } from '@seafold/core'

@Resource.EditorComponent(ComponentType.ATOMIC)
export class Text extends PureComponent {
  render() {
    return (
    <p>{'Nulla commodo elementum urna a efficitur. Ut luctus, nibh quis vehicula iaculis, lorem mauris sagittis enim, at luctus nisl enim vel lorem. Phasellus quis dolor est. Pellentesque mollis eu sapien ut pulvinar. Nulla gravida fermentum mollis. Cras egestas venenatis quam, eu blandit dolor semper maximus. Aliquam mattis pretium odio non dignissim. Curabitur elit mauris, dapibus sed erat sed, lacinia gravida dui. Sed et leo nec elit pharetra venenatis.'}</p>
    )
  }
}