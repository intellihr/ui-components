// eslint-disable-next-line space-infix-ops
export type Subtract<T, K> = Pick<T, Exclude<keyof T, keyof K>>
