import { List, cons } from "@/functional/collections/lists";

export interface KeyValue<K, V> {
  readonly key: K;
  readonly value: V;
}

export type AssocList<K, V> = List<KeyValue<K, V>>;

export function assocCons<K, V>(key: K, value: V, tail: AssocList<K, V>):
    AssocList<K, V> {
  return cons({key, value}, tail);
}

export function assocFromMap<K, V>(map: Map<K, V>): AssocList<K, V> {
  let a: AssocList<K, V> = null;
  for (const [key, value] of map.entries()) {
    a = assocCons(key, value, a);
  }
  return a;
}