export interface List<T> {
  readonly value: T;
  readonly rest: List<T> | null;
};

export function cons<T>(head: T, tail: List<T> | null): List<T> {
  return {
    value: head,
    rest: tail,
  };
}

export function car<T>(list: List<T>) {
  return list.value;
}

export function cdr<T>(list: List<T>) {
  return list.rest;
}
