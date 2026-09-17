# 02 — Advanced TypeScript Types

## 01. Type Assertion

Type assertion tells TypeScript to treat a value as a specific type.

It does **not** convert the value at runtime.

```ts
const value: unknown = "Hello";

const text = value as string;

console.log(text.toUpperCase());
```

Another syntax:

```ts
const text = <string>value;
```

The `as` syntax is generally preferred, especially in React/TSX files.

---

## 02. Generics

Generics allow us to write reusable code that works with different types while maintaining type safety.

```ts
function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(100);
identity<boolean>(true);
```

TypeScript can usually infer the type:

```ts
identity("Hello"); // string
identity(100); // number
```

Think of `T` as a placeholder for a type.

---

## 03. Generic Functions

A function can use a generic type parameter to preserve the type of the input.

```ts
function getValue<T>(value: T): T {
  return value;
}

const name = getValue("Alex");
// string

const age = getValue(25);
// number
```

The same function can safely work with different types.

---

## 04. Generic Interfaces

Interfaces can also accept generic types.

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}
```

Now the same interface can represent different data.

```ts
interface User {
  id: number;
  name: string;
}

const response: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Alex",
  },
  message: "User fetched successfully",
};
```

The same interface can also be used with an array:

```ts
const users: ApiResponse<User[]> = {
  success: true,
  data: [
    {
      id: 1,
      name: "Alex",
    },
  ],
  message: "Users fetched successfully",
};
```

---

## 05. Generic Constraints

A generic can be restricted using `extends`.

```ts
interface Length {
  length: number;
}

function getLength<T extends Length>(value: T): number {
  return value.length;
}
```

Now the function only accepts values that have a `length` property.

```ts
getLength("Hello");
getLength([10, 20, 30]);
```

But:

```ts
getLength(100); // Error
```

`number` does not have a `length` property.

The important idea is:

```text
T extends X
```

means:

> T must satisfy the structure of X.

---

## 06. keyof

`keyof` creates a union of the property names of a type.

```ts
interface Student {
  id: string;
  name: string;
  age: number;
}

type StudentKey = keyof Student;
```

The resulting type is:

```ts
"id" | "name" | "age";
```

Therefore:

```ts
let key: StudentKey;

key = "name";
key = "age";

// key = "email"; // Error
```

---

## 07. keyof + Generics

`keyof` becomes especially useful when combined with generics.

```ts
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}
```

Example:

```ts
const student = {
  id: "ST-101",
  name: "Alex",
  age: 22,
};

getProperty(student, "name");
getProperty(student, "age");
```

But:

```ts
getProperty(student, "email"); // Error
```

This creates type-safe property access.

### Important

```ts
keyof T
```

means:

> All valid keys of T.

```ts
T[K];
```

means:

> The type of the property represented by K.

---

## 08. enum

An enum allows us to define a group of named constants.

```ts
enum Role {
  Admin = "admin",
  Manager = "manager",
  Employee = "employee",
}

const role: Role = Role.Admin;
```

Enums are valid TypeScript, but they are not always necessary.

---

## 09. `as const`

`as const` tells TypeScript to preserve values as literal types and make the object properties readonly.

```ts
const roles = {
  admin: "admin",
  manager: "manager",
  employee: "employee",
} as const;
```

Without `as const`, values are generally inferred as `string`.

With `as const`:

```ts
typeof roles.admin;
// "admin"
```

We can create a union of the values:

```ts
type Role = (typeof roles)[keyof typeof roles];
```

Result:

```ts
"admin" | "manager" | "employee";
```

For many modern use cases, this pattern can be used instead of an enum.

---

## 10. Conditional Types

Conditional types allow a type to be selected based on a condition.

Basic syntax:

```ts
T extends X ? A : B
```

Example:

```ts
type IsString<T> = T extends string ? true : false;
```

Therefore:

```ts
type Result1 = IsString<string>;
// true

type Result2 = IsString<number>;
// false
```

Think of it as a type-level ternary operator:

```text
condition ? trueType : falseType
```

Conditional types are powerful but are not a priority to master immediately.

---

## 11. Mapped Types

Mapped types create a new type by iterating over the properties of another type.

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

type OptionalUser = {
  [K in keyof User]?: User[K];
};
```

Result:

```ts
{
  name?: string;
  age?: number;
  email?: string;
}
```

The important pattern is:

```ts
[K in keyof T]
```

It means:

> Go through each key of T and create a new property.

Mapped types are the foundation of several built-in utility types.

---

## 12. Utility Types

TypeScript provides built-in utility types for transforming existing types.

### Partial

Makes all properties optional.

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

type UpdateUser = Partial<User>;
```

Now:

```ts
const update: UpdateUser = {
  name: "Alex",
};
```

---

### Pick

Selects specific properties.

```ts
type UserPreview = Pick<User, "name" | "email">;
```

Result:

```ts
{
  name: string;
  email: string;
}
```

---

### Omit

Removes specific properties.

```ts
interface Account {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicAccount = Omit<Account, "password">;
```

`PublicAccount` contains everything except `password`.

---

### Required

Makes all optional properties required.

```ts
interface Profile {
  name: string;
  phone?: string;
}

type CompleteProfile = Required<Profile>;
```

Now `phone` is required.

---

### Readonly

Prevents properties from being reassigned.

```ts
type ReadonlyProfile = Readonly<Profile>;

const profile: ReadonlyProfile = {
  name: "Alex",
};

// profile.name = "Bob"; // Error
```

---

### Record

Creates an object type with specific key and value types.

```ts
type Scores = Record<string, number>;

const scores: Scores = {
  math: 90,
  english: 85,
  programming: 95,
};
```

---

## 13. How Today's Concepts Connect

These concepts are not isolated.

A common progression is:

```text
Generic
   ↓
Generic Constraint
   ↓
keyof
   ↓
keyof + Generic
   ↓
Mapped Types
   ↓
Utility Types
```

For example:

```ts
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}
```

This single example combines:

- Generics
- Generic constraints
- `keyof`
- Indexed access types

---

## Key Revision Points

- Type assertion tells TypeScript how to treat a value; it does not convert the value.
- Generics make reusable code type-safe.
- Generic functions can preserve the type of their arguments.
- Generic interfaces allow the same structure to work with different data types.
- Generic constraints restrict which types can be passed to a generic.
- `keyof` produces the keys of a type as a union.
- `keyof` + generics enables type-safe property access.
- `enum` provides named constants.
- `as const` preserves literal values and makes the structure readonly.
- Conditional types work like type-level conditions.
- Mapped types transform the properties of an existing type.
- Utility types provide ready-made type transformations.

## Most Important for My Current Goal

### Focus deeply

- Generics
- Generic Functions
- Generic Interfaces
- Generic Constraints
- `keyof`
- `keyof` + Generics
- Utility Types

### Understand and practice

- Type Assertion
- `as const`

### Understand conceptually for now

- Conditional Types
- Mapped Types
- Enum

The goal is not to memorize every advanced TypeScript feature immediately.

The priority is to understand how these features help create **reusable, type-safe code for real-world applications**.
