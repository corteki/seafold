export type Properties = {[key: string]: any};
export type Property<T, U = {}> = { value: T, control: U, inline: boolean };