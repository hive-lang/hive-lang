import { GeneralizedType, TypeFlavor } from "./generalized-type";

// Type of a value at runtime. Does not support placeholders
// (e.g. Foo<T> where T is a type parameter)
export type Type<SourceContext> =
    GeneralizedType<SourceContext, TypeFlavor.Type>;
