import { find } from "@/functional/collections/lists";
import { AssocList, KeyValue } from './assoc-list';

export function lookup<K, V>(list: AssocList<K, V>, key: K): V | null {
  const entry = find<KeyValue<K, V>>(list, entry => entry.key === key);
  if (entry === null) {
    return null;
  }

  return entry.value;
}
