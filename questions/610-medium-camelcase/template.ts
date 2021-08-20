type CamelCase<Text extends string> =
  Text extends `${infer Prefix}-${infer FirstLetter}${infer Postfix}`
    ? FirstLetter extends '-'
      ? `${Prefix}${FirstLetter}${CamelCase<`${FirstLetter}${Postfix}`>}`
      : FirstLetter extends Uppercase<FirstLetter>
      ? Text
      : `${Prefix}${Uppercase<FirstLetter>}${CamelCase<Postfix>}`
    : Text
