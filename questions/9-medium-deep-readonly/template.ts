type ExtendsObject<T> = T extends Function ? false : T extends {} ? true : false

type DeepReadonly<T extends { [_: string]: any }> = {
  readonly [Key in keyof T]: ExtendsObject<T[Key]> extends true
    ? DeepReadonly<T[Key]>
    : T[Key]
}
