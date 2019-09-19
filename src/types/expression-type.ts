import { GeneralizedType, TypeFlavor } from "./generalized-type";
import { ExpressionFiniteLabel } from "./expression-finite-label";

// Type of an expression in a function definition. Can include
// references to type parameters, (e.g. Foo<T> where T is a type
// parameter)
export type ExpressionType<SourceContext> =
    GeneralizedType<SourceContext, TypeFlavor.Expression, ExpressionFiniteLabel>;
