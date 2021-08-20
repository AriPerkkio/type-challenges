type AppendArgument<Fn extends Function, A> = Fn extends (
  ...args: infer Args
) => any
  ? (...args: [...Args, A]) => ReturnType<Fn>
  : never
