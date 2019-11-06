# ts-hasproperty

If the object property check is successful, the object type including the target property is generated.

## If you do not use this package

```ts
function Test(x:unknown){
  if(x instanceof Object && "foo" in x){
    console.log(x.foo); //Error
    console.log((<{foo:unknown}>x).foo); //OK(Cast required)
  }
}
```

## When using this package

```ts
import {hasProperty} from "ts-hasproperty";

function Test(x: unknown) {
  if (hasProperty(x, "foo")) {
    console.log(x.foo); //TypeScript Type OK
  }

  if (hasProperty2(x, "foo", "bar")) {
    console.log(x.foo); //TypeScript Type OK
    console.log(x.bar); //TypeScript Type OK
  }
}
```
