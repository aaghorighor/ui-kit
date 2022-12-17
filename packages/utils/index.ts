
import { IsNumber, Suffix } from './types';

export const isNumber: IsNumber = value => !Number.isNaN(parseInt(value + '', 10));
export const suffix: Suffix = value => (isNumber(value) ? `-${value}` : '');
