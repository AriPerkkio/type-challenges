type If<Condition extends boolean, Truthy, Falsy> = Condition extends true
  ? Truthy
  : Falsy
