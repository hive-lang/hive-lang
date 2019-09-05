import { ParameterRange } from "./parameter-range";
import { AssocList } from "@/functional/collections/assoc-lists";
export declare type BoundUpdates<SourceContext> = {
    readonly expected: AssocList<string, ParameterRange<SourceContext>> | null;
    readonly actual: AssocList<string, ParameterRange<SourceContext>> | null;
};
