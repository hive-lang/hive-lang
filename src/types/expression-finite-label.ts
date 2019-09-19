import { BaseTypeParameterLabel } from "./base-type-parameter-label";

export class ExpressionFiniteLabel extends BaseTypeParameterLabel {
  readonly label: string;

  constructor(label: string) {
    super();
    this.label = label;
  }
}
