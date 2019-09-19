import { TestingSourceContext } from "./testing-source-context";
import { FiniteType } from "@/types";
import { ExpressionFiniteLabel } from "../expression-finite-label";

export function testFiniteType(symbol: string): FiniteType<TestingSourceContext, ExpressionFiniteLabel> {
  return new FiniteType(new TestingSourceContext(), new ExpressionFiniteLabel(symbol));
}
