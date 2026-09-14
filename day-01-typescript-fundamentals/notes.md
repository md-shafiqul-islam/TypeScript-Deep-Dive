# TypeScript Day 01 — Notes

## 1. Primitive and Non-Primitive Types

### Primitive Types

Basic value types:

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `bigint`
- `symbol`

```ts
let name: string = "Shafiqul";
let age: number = 30;
let isActive: boolean = true;
```

### Non-Primitive Types

Structured values such as:

- Objects
- Arrays
- Functions

```ts
let skills: string[] = ["JavaScript", "TypeScript"];
```

---

## 2. Object, Literal, and Optional Types

### Object Type

Describes the properties of an object.

```ts
let user: {
  name: string;
  age: number;
} = {
  name: "Shafiqul",
  age: 30,
};
```

### Literal Type

Restricts a value to specific choices.

```ts
let role: "admin" | "user";
role = "admin";
```

### Optional Property

Use `?` when a property may be absent.

```ts
type User = {
  name: string;
  phone?: string;
};
```

With strict null checking, an optional property is potentially `undefined` when accessed.

---

## 3. Functions in TypeScript

Specify parameter and return types.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

Function type:

```ts
type Operation = (a: number, b: number) => number;
```

`void` means a function does not return a useful value.

---

## 4. Type Alias

A reusable name for a type.

```ts
type Student = {
  name: string;
  age: number;
};
```

Type aliases can describe objects, unions, intersections, and function types.

---

## 5. Union and Intersection Types

### Union — `|`

A value can be one of several types.

```ts
let id: string | number;
```

### Intersection — `&`

Combines multiple object types.

```ts
type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;
```

**Remember:** Union means one of the options; intersection combines requirements.

---

## 6. Ternary, Nullish Coalescing, and Optional Chaining

### Ternary

```ts
const message = age >= 18 ? "Adult" : "Minor";
```

### Nullish Coalescing — `??`

Uses the fallback only for `null` or `undefined`.

```ts
const name = userName ?? "Guest";
```

Unlike `||`, it preserves values such as `0`, `false`, and `""`.

### Optional Chaining — `?.`

Safely accesses a property when the preceding value may be nullish.

```ts
const city = user.address?.city;
```

---

## 7. Nullable, Unknown, and Never

### Nullable

A type that allows `null` or `undefined`.

```ts
let selectedUser: string | null = null;
```

### Unknown

Represents a value whose type is not known yet. Narrow it before using it as a specific type.

```ts
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

### Never

Represents an impossible value or a function that never completes normally.

```ts
function fail(message: string): never {
  throw new Error(message);
}
```

### Important Differences

| Type      | Meaning                                   |
| --------- | ----------------------------------------- |
| `any`     | Disables most type checking for the value |
| `unknown` | Requires narrowing before most operations |
| `void`    | No useful return value                    |
| `never`   | No normal completion or impossible value  |

## Revision Checklist

- [x] Primitive vs. non-primitive types
- [x] Object, literal, and optional properties
- [x] Typed functions
- [x] Type aliases
- [x] Union vs. intersection
- [x] `? :`, `??`, and `?.`
- [x] Nullable, `unknown`, and `never`
