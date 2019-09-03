import { TestingSourceContext } from "./testing-source-context";
import { FiniteType } from "@/types";

export function finite(symbol: string): FiniteType<TestingSourceContext> {
  return new FiniteType(new TestingSourceContext(), symbol);
}
