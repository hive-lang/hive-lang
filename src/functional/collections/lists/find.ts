import { List, car, cdr } from './list';

export function find<T>(list: List<T> | null, predicate: (x: T) => boolean): T | null {
  if (list === null) {
    return null;
  }

  const head = car(list);
  return predicate(head) ? head : find(cdr(list), predicate);
}
