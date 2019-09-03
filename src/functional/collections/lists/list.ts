export type List<T> = Node<T> | null;

interface Node<T> {
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
  if (list == null) {
    throw new Error();
  }
  return list.value;
}

export function cdr<T>(list: List<T>) {
  if (list == null) {
    throw new Error();
  }
  return list.rest;
}
