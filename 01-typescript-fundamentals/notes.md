# 01 — TypeScript Fundamentals

## 01. Basic Types

TypeScript provides types such as `string`, `number`, and `boolean`.

```ts
let userName: string = "Alice";
let age: number = 30;
let isDeveloper: boolean = true;
```

## 02. Arrays

Arrays can be typed using `type[]`.

```ts
let friends: string[] = ["Alex", "Bob"];
let numbers: number[] = [10, 20, 30];
```

## 03. Objects

Object properties can be explicitly typed.

```ts
let user: {
  name: string;
  age: number;
} = {
  name: "Alice",
  age: 30,
};
```

## 04. Type Inference

TypeScript can automatically determine the type from the assigned value.

```ts
let hasCar = false;
// inferred as boolean
```

Explicit typing is not always necessary when the type is obvious.

## 05. Functions

Function parameters and return values can be typed.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

## 06. void

`void` is used when a function does not return a value.

```ts
function printName(name: string): void {
  console.log(name);
}
```

## 07. Type Alias

A type alias creates a reusable custom type.

```ts
type User = {
  name: string;
  age: number;
  email: string;
};

const user: User = {
  name: "Alex",
  age: 25,
  email: "alex@gmail.com",
};
```

## 08. Interface

An interface describes the structure of an object.

```ts
interface Employee {
  name: string;
  age: number;
  email: string;
}

const employee: Employee = {
  name: "Mac",
  age: 31,
  email: "mac@gmail.com",
};
```

## 09. Optional Property

`?` makes a property optional.

```ts
interface Developer {
  name: string;
  age: number;
  hasLaptop?: boolean;
}

const developer: Developer = {
  name: "Henry",
  age: 28,
};
```

## 10. Union Type

A union allows a value to have multiple possible types.

```ts
let id: string | number;

id = "User-101";
id = 101;
```

## 11. Literal Type

A literal type restricts a value to specific values.

```ts
type Role = "admin" | "manager" | "employee";

let role: Role = "admin";
```

## 12. Intersection Type

An intersection combines multiple types into one.

```ts
type Person = {
  name: string;
};

type Contact = {
  email: string;
};

type User = Person & Contact;
```

A `User` must contain both `name` and `email`.

## 13. any

`any` disables most TypeScript type checking.

```ts
let value: any = "Hello";

value = 100;
value = true;
```

Avoid `any` when possible because it removes type safety.

## 14. unknown

`unknown` is safer than `any` when the type is not known.

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Before performing operations, the value must be narrowed to a known type.

## 15. Type Narrowing

Type narrowing means reducing a broad type into a more specific type.

```ts
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
```

Here `typeof` tells TypeScript which type exists inside each branch.

## 16. Nullable Types

A type can explicitly allow `null`.

```ts
let currentUser: string | null = null;

currentUser = "Alex";
```

This is common when working with authentication and database/API data.

## 17. Optional Chaining

Optional chaining `?.` safely accesses a property that may not exist.

```ts
interface Customer {
  name: string;
  address?: {
    city: string;
  };
}

const customer: Customer = {
  name: "Alex",
};

const city = customer.address?.city;
```

If `address` is undefined, the result is `undefined` instead of causing an error.

## 18. Nullish Coalescing

The `??` operator provides a fallback when the value is `null` or `undefined`.

```ts
const name = currentUser ?? "Guest";
```

It is different from `||` because `??` does not treat valid values such as `0` or `""` as missing.

## 19. Ternary Operator

The ternary operator provides a short way to write a simple condition.

```ts
const age = 20;

const message = age >= 18 ? "Adult" : "Minor";
```

## 20. never

`never` represents a value that never successfully returns.

```ts
function fail(message: string): never {
  throw new Error(message);
}
```

It is commonly used for functions that always throw an error or never reach a normal return.

---

## Key Revision Points

- Use explicit types when they improve clarity; otherwise TypeScript can often infer the type.
- Use `type` and `interface` to create reusable object structures.
- Use `?` for optional properties.
- Use unions when a value can have multiple types.
- Use literal types when only specific values are allowed.
- Use intersections when multiple types need to be combined.
- Avoid `any` when possible.
- Prefer `unknown` when the type is not known.
- Use type narrowing before operating on union or unknown values.
- Use `null` explicitly when a value can intentionally have no value.
- Use optional chaining for safely accessing nested optional properties.
- Use nullish coalescing for `null`/`undefined` fallback values.
- Understand `never`, but do not over-focus on it at this stage.

### Most Important for Real-World Development

**Type Alias → Interface → Union → Functions → Type Narrowing → Optional/Nullable Types → `unknown`**

These should become comfortable before moving deeply into advanced TypeScript features such as generics, mapped types, and conditional types.
