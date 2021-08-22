type ChainableOption = { [key: string]: any }

type MergeChainableOptions<
  A,
  B,
  Union extends A & B = A & B,
  Keys extends keyof Union = keyof Union
> = { [Key in Keys]: Union[Key] }

type Chainable<T extends ChainableOption = {}> = {
  option<Key extends string, Value extends any>(
    key: Key,
    value: Value
  ): Chainable<MergeChainableOptions<T, { [_ in Key]: Value }>>

  get(): T
}
