# 02 — Advanced TypeScript Types

This day focuses on TypeScript's reusable and advanced type-system features.

The concepts covered here allow TypeScript code to become more reusable,
flexible, and type-safe when working with APIs, reusable functions,
interfaces, and application-level data structures.

## Topics Covered

- Type Assertion
- Generics
- Generic Functions
- Generic Interfaces
- Generic Constraints
- `keyof`
- `keyof` with Generics
- Enum
- `as const`
- Conditional Types
- Mapped Types
- Utility Types

## Learning Goals

By the end of this day, I should be able to:

- Understand when and why type assertion is used.
- Create reusable generic functions.
- Create generic interfaces.
- Restrict generic types using constraints.
- Use `keyof` to work with object keys safely.
- Combine `keyof` with generics.
- Understand enums and their alternatives.
- Use `as const` for literal values.
- Understand the basic idea of conditional types.
- Understand how mapped types transform existing types.
- Use common utility types such as:
  - `Partial`
  - `Pick`
  - `Omit`
  - `Required`
  - `Readonly`
  - `Record`

## Key Takeaway

The main purpose of these features is **reusability + type safety**.

The most important concepts for practical development are:

**Generics → Constraints → keyof → Utility Types**

Advanced features such as conditional and mapped types should first be
understood conceptually and gradually practiced through real-world examples.
