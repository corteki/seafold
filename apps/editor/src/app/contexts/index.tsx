import {container} from '@seafold/di';
import 'mobx-react-lite/batchingForReactDom';
import { EventHandlerContext } from './EventHandlerContext';

export const { useEventHandlers } = container.resolve(EventHandlerContext);