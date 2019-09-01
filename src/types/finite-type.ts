export abstract class FiniteType<SourceContext> {
  sourceContext: SourceContext;
  symbol: string;

  constructor(sourceContext: SourceContext, symbol: string) {
    this.sourceContext = sourceContext;
    this.symbol = symbol;
  }
}
