import 'mobx-react-lite/batchingForReactDom';
import { EventHandlerContext } from './EventHandlerContext';

export const { useEventHandlers, useModels } = new EventHandlerContext();