type Concat<FirstArray, SecondArray> = FirstArray extends [...infer FirstItems]
  ? SecondArray extends [...infer SecondItems]
    ? [...FirstItems, ...SecondItems]
    : never
  : never
