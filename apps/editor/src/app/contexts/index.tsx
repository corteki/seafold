import 'mobx-react-lite/batchingForReactDom';
import { ApplicationContext } from './ApplicationContext';

export const { useEventHandler, useModel, useFactory, useBuilder, useRuntime } = new ApplicationContext();