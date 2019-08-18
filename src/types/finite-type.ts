export type FiniteType<SourceContext> = {
  type: 'types/finite',
  sourceContext: SourceContext,
  symbol: string,
};
