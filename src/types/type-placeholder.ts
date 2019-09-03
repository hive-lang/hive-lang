// This represents a placeholder for a type parameter, e.g.:
//
// function foo<T>(x: T) {
//   print(x);
// }
//
// When type-checking this function, the type of 'x' is unknown,
// but is represented by a type placeholder.
//
// Note: this is distinct from TypeParameter, which represents
// the types of parameterized functions where they are bing called
// (rather than defined) - in the example above, T would be
// represented by a TypeParameter rather than a TypePlaceholder
// when typechecking code that *calls* foo().
export interface TypePlaceholder<SourceContext> {
  sourceContext: SourceContext;
  symbol: string;
}
