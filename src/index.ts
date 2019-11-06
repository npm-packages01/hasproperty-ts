export function hasProperty<T = unknown, K extends string = string>(
  x: unknown,
  ...name: K[]
): x is {
  [M in K]: T;
} {
  return x instanceof Object && name.every(prop => prop in x);
}
