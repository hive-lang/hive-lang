import { TestingSourceContext } from "./testing-source-context";
import { FiniteType } from "@/types";

export function testFiniteType(symbol: string): FiniteType<TestingSourceContext> {
  return new FiniteType(new TestingSourceContext(), symbol);
}
