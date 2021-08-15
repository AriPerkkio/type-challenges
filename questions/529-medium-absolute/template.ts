type Absolute<
  T extends number | string | bigint,
  AsString = `${T}`
> = AsString extends `-${infer numeric}` ? numeric : AsString
