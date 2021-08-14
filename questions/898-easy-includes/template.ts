// #1
type SimpleIncludes<
  List extends readonly any[],
  Item
> = Item extends List[number] ? true : false

type TypeEqualsHack<First extends string, Second> = Second extends First
  ? { [_ in First]: true }[Second] extends true
    ? true
    : false
  : false

// #2
type Includes<List extends readonly any[], Item> = TypeEqualsHack<
  List[number], // Doesn't really meet `extends string` requirement but seems to pass
  Item
>
