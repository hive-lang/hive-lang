export enum Variance {
  Covariant,
  Contravariant,
}

export function flipVariance(variance: Variance): Variance {
  return variance === Variance.Covariant
      ? Variance.Contravariant : Variance.Covariant;
}
