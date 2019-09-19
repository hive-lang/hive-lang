import { GeneralizedType, TypeFlavor } from "./generalized-type";
import { ExpressionFiniteLabel } from "./expression-finite-label";

// Describes the return or parameter type of a parameterized function.
// Can contain references to type parameters, e.g.:
// <T>(x: T) => T.
export type ParameterizedType<SourceContext> =
    GeneralizedType<SourceContext, TypeFlavor.Parameterized, ExpressionFiniteLabel>;
