import { BaseTypeParameterLabel } from '@/types/base-type-parameter-label';

export class UniquifiedTypeParameterLabel extends BaseTypeParameterLabel {
  scopeId: number;
  symbol: string;

  constructor(scopeId: number, symbol: string) {
    super();
    this.scopeId = scopeId;
    this.symbol = symbol;
  }
}
