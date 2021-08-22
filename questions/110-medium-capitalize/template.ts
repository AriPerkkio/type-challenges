type CharacterToUppercase = { /* a-z */ f: 'F' }

type CapitalizeMedium<Text extends string> =
  Text extends `${infer FirstCharacter}${infer Rest}`
    ? FirstCharacter extends keyof CharacterToUppercase
      ? `${CharacterToUppercase[FirstCharacter]}${Rest}`
      : Text
    : ''
