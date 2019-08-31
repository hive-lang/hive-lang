import { List, cons } from "@/functional/collections/lists";

export interface KeyValue<K, V> {
  readonly key: K;
  readonly value: V;
}

export interface AssocList<K, V> extends List<KeyValue<K, V>> {}

export function assocCons<K, V>(key: K, value: V, tail: AssocList<K, V> | null):
    AssocList<K, V> {
  return cons({key, value}, tail);
}
