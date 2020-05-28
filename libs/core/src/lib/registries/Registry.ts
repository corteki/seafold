export abstract class Registry<T> {
  abstract register(t: T): void;
  abstract getAll(): Map<string, T>
  abstract unregister(t: T): void;
}