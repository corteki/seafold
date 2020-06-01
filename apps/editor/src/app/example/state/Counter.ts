import { State } from '@seafold/core';

@State.Manager
export class CounterStateManager {

  @State.Transformer
  increment() {}

  @State.Transformer
  decrement() {}
}