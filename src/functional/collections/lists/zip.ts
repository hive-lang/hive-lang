import { List, cons, car, cdr } from "./list";

export interface ZipEntry<T, U> {
  first: T;
  second: U;
}

export function zip<T, U>(first: List<T> | null, second: List<U> | null):
     List<ZipEntry<T, U>> | null {
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
