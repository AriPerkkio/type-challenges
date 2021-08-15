type TupleToObject<Tuple extends readonly string[]> = {
  [Item in Tuple[number]]: Item
}
