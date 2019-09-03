import { List, cons, car, cdr } from "./list";

export interface ZipEntry<T, U> {
  first: T;
  second: U;
}

export function zip<T, U>(first: List<T>, second: List<U>):
     List<ZipEntry<T, U>> {
  if (first === null && second === null) {
    return null;
  }

  if (first === null || second === null) {
    throw "Error";
  }

  return cons(
    {first: car(first), second: car(second)},
    zip(cdr(first), cdr(second)));
}
