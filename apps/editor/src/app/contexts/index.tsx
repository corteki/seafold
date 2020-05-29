import {container} from '@seafold/di';
import 'mobx-react-lite/batchingForReactDom';
import { EventHandlerContext } from './EventHandlerContext';

export const { useHandlers } = container.resolve(EventHandlerContext);