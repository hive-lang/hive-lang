import { ParameterizedType } from "@/types/parameterized-type";
import { AssocList } from "@/functional/collections/assoc-lists";
import { ParameterState } from "./parameter-state";
import { Variance } from "./variance";
import { UnifyResult } from "./unify-result";
export declare function unify<SourceContext>(expected: ParameterizedType<SourceContext>, actual: ParameterizedType<SourceContext>, variance: Variance, parameters: AssocList<string, ParameterState<SourceContext>>): UnifyResult<SourceContext>;
