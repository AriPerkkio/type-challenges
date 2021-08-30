type Diff<First, Second> = {
  [Key in
    | Exclude<keyof First, keyof Second>
    | Exclude<keyof Second, keyof First>]: Key extends keyof First
    ? Key extends keyof Second
      ? never
      : First[Key]
    : Key extends keyof Second
    ? Second[Key]
    : never
}
