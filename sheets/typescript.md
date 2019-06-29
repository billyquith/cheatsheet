Typescript
==========

- [MS Docs](https://www.typescriptlang.org/docs/home.html)
- [More detailed cheatsheet](https://rmolinamir.github.io/typescript-cheatsheet/)


Types
-----

#### Basic

```
let isDone: boolean = false;
let n: number = 77;
let name: string = 'Fred';
```

#### Array

```
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];  // generics
```

#### Tuple

```
let pair: [string, number]= ["value", 28];
```

#### Enum

```
enum Color {Red, Green, Blue};
enum Flags { A=1, B=2, C=4 };
let c: Color = Color.Green;
```

#### Any

Variant type.

```
let x: any = 6;
let list: any[] = [1, true, "free"];
```

#### Object

```
declare function create(o: object | null): void;

create({ prop: 0 });
create(null);
```

#### Void

```
function foo(): void {
    // nothing
}
```

#### Never

```
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("Something failed"); // Inferred return type is never
}
```

### Type Assertions

Like casting.

```
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length; // same, used for JSX
```

Variables
---------

### Array & Tuple Destructuring

Assignment:
```
let input = [1, 2];
let [first, second] = input;
[first, second] = [second, first]; // swap
let first = input[0];
```

Function parameters:
```
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
```

Partial:
```
let [first, ...rest] = [1, 2, 3, 4];      // remember tail
let [first] = [1, 2, 3, 4];               // forget tail
let [, second, , fourth] = [1, 2, 3, 4];
```

### Object Destructuring

```
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
```




