type ScopeIdGeneratorResult = {
  id: number;
  newState: ScopeIdGenerator;
};

export type ScopeIdGenerator = () => ScopeIdGeneratorResult;

export function scopeIdGenerator(): ScopeIdGenerator {
  function generator(nextId: number) {
    return () => ({
      id: nextId,
      newState: generator(nextId + 1),
    });
  }

  return generator(1);
}
