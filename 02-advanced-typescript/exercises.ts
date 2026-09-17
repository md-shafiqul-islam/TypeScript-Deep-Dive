// ============================================================
// 02 — Advanced TypeScript Exercises
// ============================================================

// ============================================================
// Exercise 01 — Type Assertion
// ============================================================

// Create an unknown value containing a string.
// Use type assertion to treat it as a string.
// Convert it to uppercase.
const color: unknown = "Green";
const colorName = color as string;
colorName.toUpperCase();

// ============================================================
// Exercise 02 — Generic Function
// ============================================================

// Create a generic function reverseValue<T>()
// It should return the same type it receives.

// Examples:
// reverseValue("hello") -> string
// reverseValue(100) -> number
// reverseValue(true) -> boolean
const reverseValue = <T>(value: T): T => {
  return value;
};

// ============================================================
// Exercise 03 — Generic Array Function
// ============================================================

// Create a generic function getFirst<T>()
// It accepts T[] and returns the first item.
const getFirst = <T>(value: T[]): T => {
  return value[0];
};

// ============================================================
// Exercise 04 — Generic Interface
// ============================================================

// Create:
//
// interface Box<T> {
//   value: T;
// }
//
// Create boxes for:
// - string
// - number
// - boolean
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = {
  value: "Gold Bar",
};
const numberBox: Box<number> = {
  value: 15,
};
const booleanBox: Box<boolean> = {
  value: false,
};

// ============================================================
// Exercise 05 — Generic API Response
// ============================================================

// Create:
//
// interface ApiResponse<T> {
//   success: boolean;
//   data: T;
// }
//
// Create an ApiResponse<User> object.
interface ApiResponse1<T> {
  success: boolean;
  data: T;
}

interface User1 {
  id: number;
  name: string;
  email: string;
}

const userResponse1: ApiResponse1<User1> = {
  success: true,
  data: {
    id: 1,
    name: "Allen",
    email: "allen@gmail.com",
  },
};

// ============================================================
// Exercise 06 — Generic Constraint
// ============================================================

// Create a generic function getLength<T>()
// Restrict T so that it must have a length property.
//
// Test it with:
// - string
// - array
interface Length1 {
  length: number;
}
const getLength1 = <T extends Length1>(value: T): number => {
  return value.length;
};

// ============================================================
// Exercise 07 — keyof
// ============================================================

// Create an interface Product:
//
// id: number
// name: string
// price: number
//
// Create a type ProductKey using keyof.
interface Product1 {
  id: number;
  name: string;
  price: number;
}

type ProductKey = keyof Product1;

const productKey: ProductKey = "price";

// ============================================================
// Exercise 08 — keyof + Generics
// ============================================================

// Create:
//
// getProperty<T, K extends keyof T>()
//
// It should safely return a property from an object.
const getProperty1 = <T, K extends keyof T>(object: T, key: K) => {
  return object[key];
};

// ============================================================
// Exercise 09 — as const
// ============================================================

// Create an object containing:
// admin
// manager
// employee
//
// Use as const.
const UserRoles = {
  admin: "admin",
  manager: "manager",
  employee: "employee",
} as const;

// Then create a type containing only those values.
type Role1 = (typeof UserRoles)[keyof typeof UserRoles];

// ============================================================
// Exercise 10 — Conditional Type
// ============================================================

// Create:
//
// type IsNumber<T> = ...
//
// It should produce:
// true when T is number
// false otherwise.
type IsNumber<T> = T extends number ? true : false;

type result = IsNumber<number>;

// ============================================================
// Exercise 11 — Mapped Type
// ============================================================

// Create a Product interface:
//
// name
// price
// category
//
// Create a mapped type that makes every property optional.
interface Products {
  name: string;
  price: number;
  category: string;
}

type OptionalProduct1 = {
  [K in keyof Products]?: Products[K];
};

// ============================================================
// Exercise 12 — Partial
// ============================================================

// Create a User interface.
//
// Use Partial<User> to create an update object
// containing only name.
interface User10 {
  id: number;
  name: string;
  email: string;
  password: string;
  phone?: string;
}

type PartialUser = Partial<User10>;

const userUpdate: PartialUser = {
  name: "John",
};
// ============================================================
// Exercise 13 — Pick
// ============================================================

// From User, create a type containing only:
// name
// email
type pickedUser = Pick<User10, "name" | "email">;

// ============================================================
// Exercise 14 — Omit
// ============================================================

// From User, create a public user type that excludes:
// password
type omitUser = Omit<User10, "password">;

// ============================================================
// Exercise 15 — Required
// ============================================================

// Create an interface with an optional phone property.
//
// Use Required<T> to make every property required.
type requiredUser = Required<User10>;

// ============================================================
// Exercise 16 — Readonly
// ============================================================

// Create a readonly user type using Readonly<T>.
//
// Try changing one property and observe the TypeScript error.
type readonlyUser = Readonly<User10>;

// ============================================================
// Exercise 17 — Record
// ============================================================

// Create a type for a collection of product prices:
//
// {
//   keyboard: 100,
//   mouse: 50,
//   monitor: 300
// }
//
// Use Record<string, number>.
type ProductPrices = Record<string, number>;

const productPrices: ProductPrices = {
  keyboard: 100,
  mouse: 50,
  monitor: 300,
};
