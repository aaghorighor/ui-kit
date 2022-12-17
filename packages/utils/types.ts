type ValueType = boolean | null | undefined | number | string | object;

export type IsNumber = (value: ValueType) => boolean;
export type Suffix = (value: ValueType) => string;
