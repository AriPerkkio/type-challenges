type AppendToObject<
  Type extends {},
  Key extends string,
  Value,
  InputAsObject = { [_ in Key]: Value },
  Union = Type & InputAsObject
> = {
  [CombinedKeys in keyof Union]: Union[CombinedKeys]
}
