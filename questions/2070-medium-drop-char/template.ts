type DropChar<
  Text extends string,
  Character extends string
> = Text extends `${infer Prefix}${Character}${infer Postfix}`
  ? DropChar<`${Prefix}${Postfix}`, Character>
  : Text
