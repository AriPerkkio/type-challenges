type MyReadonly<Type> = { readonly [Key in keyof Type]: Type[Key] }
