export class FiniteType<SourceContext, FiniteLabel> {
  sourceContext: SourceContext;
  symbol: FiniteLabel;

  constructor(sourceContext: SourceContext, symbol: FiniteLabel) {
    this.sourceContext = sourceContext;
    this.symbol = symbol;
  }
}
