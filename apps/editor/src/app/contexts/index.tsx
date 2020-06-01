import 'mobx-react-lite/batchingForReactDom';
import { ApplicationContext } from './ApplicationContext';

export const { useEventHandlers, useModels } = new ApplicationContext();