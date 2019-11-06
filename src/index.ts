export function hasProperty<T = unknown, K extends string = string>(
  x: unknown,
  ...names: K[]
): x is {
  [M in K]: T;
} {
  return x instanceof Object && names.every(name => name in x);
}
