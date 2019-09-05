export declare type List<T> = Node<T> | null;
interface Node<T> {
    readonly value: T;
    readonly rest: List<T>;
}
export declare function cons<T>(head: T, tail: List<T>): List<T>;
export declare function car<T>(list: List<T>): T;
export declare function cdr<T>(list: List<T>): List<T>;
export declare function listFromArray<T>(items: Array<T>): List<T>;
export {};
