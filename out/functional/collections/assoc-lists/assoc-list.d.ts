import { List } from "@/functional/collections/lists";
export interface KeyValue<K, V> {
    readonly key: K;
    readonly value: V;
}
export declare type AssocList<K, V> = List<KeyValue<K, V>>;
export declare function assocCons<K, V>(key: K, value: V, tail: AssocList<K, V>): AssocList<K, V>;
export declare function assocFromMap<K, V>(map: Map<K, V>): AssocList<K, V>;
export declare function assocFromObject<V>(object: {
    [index: string]: V;
}): AssocList<string, V>;
