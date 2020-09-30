export type EnumOf<T extends string | number> = {
  [K in T]: K;
};
