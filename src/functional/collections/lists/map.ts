import { List, cons, cdr, car } from "./list";

export function map<T, U>(list: List<T> | null, fn: (x: T) => U):
    List<U> | null {
  if (list === null) {
    return null;
  }

  return cons(fn(car(list)), map(cdr(list), fn));
}
