export type List<T> = Node<T> | null;

interface Node<T> {
  readonly value: T;
  readonly rest: List<T>;
};

export function cons<T>(head: T, tail: List<T>): List<T> {
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

export function listFromArray<T>(items: Array<T>): List<T> {
  let l: List<T> = null;
  for (const item of items.reverse()) {
    l = cons(item, l);
  }
  return l;
}
