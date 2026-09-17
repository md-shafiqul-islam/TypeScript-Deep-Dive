# 03 — Object-Oriented TypeScript

## Overview

Today I learned the fundamentals of Object-Oriented Programming (OOP) in TypeScript.

The goal is to understand how TypeScript classes, objects, inheritance, access control, abstraction, polymorphism, and type guards are used to create structured and maintainable applications.

## Topics Covered

1. Class and Object
2. Inheritance
3. Type Guard using `typeof`
4. Type Guard using `in`
5. Type Guard using `instanceof`
6. Access Modifiers
7. Encapsulation
8. Getter and Setter
9. Static
10. Polymorphism
11. Abstraction with Interface
12. Abstraction with Abstract Class

## Learning Goals

By the end of this day, I should be able to:

- Create classes and objects in TypeScript.
- Use constructors and methods inside classes.
- Reuse class functionality through inheritance.
- Narrow types using `typeof`, `in`, and `instanceof`.
- Understand `public`, `private`, and `protected`.
- Apply encapsulation by controlling access to internal data.
- Use getters and setters to control property access.
- Understand the difference between instance members and static members.
- Implement polymorphism through method overriding.
- Use interfaces as contracts for classes.
- Use abstract classes and abstract methods.
- Understand how major OOP concepts connect with each other.

## Key Concepts

### Class and Object

- Class → blueprint
- Object → instance created from a class

### Inheritance

A child class can reuse functionality from a parent class using `extends`.

### Type Guards

- `typeof` → commonly used for primitive types
- `in` → checks whether a property exists
- `instanceof` → checks whether an object is an instance of a class

### Access Modifiers

- `public` → accessible everywhere
- `protected` → accessible inside the class and child classes
- `private` → accessible only inside the same class

### Encapsulation

Hide internal data and control how that data is accessed or modified.

### Polymorphism

The same method can have different implementations in different classes.

### Abstraction

Expose what an object should do while hiding implementation details.

## Files

- `README.md` → Overview and learning goals
- `notes.md` → Concise revision notes
- `examples.ts` → Examples studied today
- `exercises.ts` → Practice exercises

## Key Takeaway

> OOP in TypeScript helps organize code using classes, objects, inheritance, encapsulation, abstraction, and polymorphism.

The main goal is not to memorize OOP definitions, but to understand how these concepts work together in real TypeScript applications.
