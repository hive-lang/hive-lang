import { GeneralizedType } from "./generalized-type";

// Type of an expression in a function definition. Can include
// references to type parameters, (e.g. Foo<T> where T is a type
// parameter)
export type ExpressionType<SourceContext> =
    GeneralizedType<SourceContext, true, false, true>;
