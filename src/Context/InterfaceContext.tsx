export interface IValue<T> {
  values: T;
  setValues: Function;
}

export interface IProvider<T> {
  value: T;
  children: any;
}
