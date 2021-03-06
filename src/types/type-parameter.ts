// This represents a type parameter for a function that is being
// called. When typechecking the following example:
//
// function foo<T>(x: T) {
//   print(x);
// }
//
// function bar(x: string) {
//   foo(x);
// }
//
// , T is part of the type pattern for foo when checking bar(),
// even though it is not explicitly mentioned in bar. As part
// of type-checking, a specific type will be inferred for T.
export class TypeParameter<SourceContext> {
  sourceContext: SourceContext;
  symbol: string;

  constructor(sourceContext: SourceContext, symbol: string) {
    this.sourceContext = sourceContext;
    this.symbol = symbol;
  }
}
