// ============================================================
// 02 — Advanced TypeScript Examples
// ============================================================

// ============================================================
// 01 — Type Assertion
// ============================================================

const value: unknown = "Hello";

const variableName = value as string;

console.log(variableName.toUpperCase());

// ============================================================
// 02 — Generic
// ============================================================

const getIdentity = <T>(value: T): T => {
  return value;
};

console.log(getIdentity("Alex"));
console.log(getIdentity(50));
console.log(getIdentity(true));

// ============================================================
// 03 — Generic Function
// ============================================================

function createArray<T>(value: T): T[] {
  return [value];
}

console.log(createArray("TypeScript"));
console.log(createArray(100));

// ============================================================
// 04 — Generic Interface
// ============================================================

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const userResponse: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Alex",
    email: "alex@gmail.com",
  },
  message: "User fetched successfully",
};

console.log(userResponse);

// ============================================================
// 05 — Generic Interface with Array
// ============================================================

const userListResponse: ApiResponse<User[]> = {
  success: true,
  data: [
    {
      id: 1,
      name: "Alex",
      email: "alex@gmail.com",
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@gmail.com",
    },
  ],
  message: "Users fetched successfully",
};

console.log(userListResponse);

// ============================================================
// 06 — Generic Constraint
// ============================================================

interface Length {
  length: number;
}

const getLength = <T extends Length>(value: T): number => {
  return value.length;
};

console.log(getLength("Hello TypeScript"));
console.log(getLength([10, 20, 30]));

// ============================================================
// 07 — keyof
// ============================================================

interface Student {
  id: string;
  name: string;
  age: number;
}

type StudentKey = keyof Student;
// "id" | "name" | "age"

const studentKey: StudentKey = "name";

console.log(studentKey);

// ============================================================
// 08 — keyof + Generics
// ============================================================

const getProperty = <T, K extends keyof T>(object: T, key: K): T[K] => {
  return object[key];
};

const student = {
  id: "ST-101",
  name: "Alex",
  age: 22,
};

console.log(getProperty(student, "name"));
console.log(getProperty(student, "age"));

// ============================================================
// 09 — Enum
// ============================================================

enum Role {
  Admin = "admin",
  Manager = "manager",
  Employee = "employee",
}

const currentRole: Role = Role.Admin;

console.log(currentRole);

// ============================================================
// 10 — as const
// ============================================================

const roles = {
  admin: "admin",
  manager: "manager",
  employee: "employee",
} as const;

type RoleType = (typeof roles)[keyof typeof roles];

const role: RoleType = "admin";

console.log(role);

// ============================================================
// 11 — Conditional Type
// ============================================================

type IsString<T> = T extends string ? true : false;

type Result1 = IsString<string>; // true
type Result2 = IsString<number>; // false

// ============================================================
// 12 — Mapped Type
// ============================================================

interface Product {
  name: string;
  price: number;
  category: string;
}

type OptionalProduct = {
  [K in keyof Product]?: Product[K];
};

const product: OptionalProduct = {
  name: "Keyboard",
};

console.log(product);

// ============================================================
// 13 — Partial
// ============================================================

type ProductUpdate = Partial<Product>;

const updateProduct: ProductUpdate = {
  price: 100,
};

console.log(updateProduct);

// ============================================================
// 14 — Pick
// ============================================================

type ProductPreview = Pick<Product, "name" | "price">;

const preview: ProductPreview = {
  name: "Keyboard",
  price: 100,
};

console.log(preview);

// ============================================================
// 15 — Omit
// ============================================================

interface Account {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicAccount = Omit<Account, "password">;

const publicAccount: PublicAccount = {
  id: 1,
  name: "Alex",
  email: "alex@gmail.com",
};

console.log(publicAccount);

// ============================================================
// 16 — Required
// ============================================================

interface Profile {
  name: string;
  phone?: string;
}

type CompleteProfile = Required<Profile>;

const completeProfile: CompleteProfile = {
  name: "Alex",
  phone: "01700000000",
};

console.log(completeProfile);

// ============================================================
// 17 — Readonly
// ============================================================

type ReadonlyProfile = Readonly<Profile>;

const readonlyProfile: ReadonlyProfile = {
  name: "Alex",
};

// readonlyProfile.name = "Bob"; // Error

// ============================================================
// 18 — Record
// ============================================================

type Scores = Record<string, number>;

const scores: Scores = {
  math: 90,
  english: 85,
  programming: 95,
};

console.log(scores);
