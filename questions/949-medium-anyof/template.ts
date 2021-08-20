type Falsy =
  | 0
  | ''
  | false
  | []
  | { [k: string]: never }
  | null
  | undefined
  | never

type AnyOf<T extends readonly any[]> = T[number] extends Falsy ? false : true
