import { GeneralizedType, TypeFlavor } from "./generalized-type";

// Describes the return or parameter type of a parameterized function.
// Can contain references to type parameters, e.g.:
// <T>(x: T) => T.
export type ParameterizedType<SourceContext> =
    GeneralizedType<SourceContext, TypeFlavor.Parameterized>;
