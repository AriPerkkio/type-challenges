import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CapitalizeMedium<'foobar'>, 'Foobar'>>,
  Expect<Equal<CapitalizeMedium<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<CapitalizeMedium<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<CapitalizeMedium<''>, ''>>,
]
