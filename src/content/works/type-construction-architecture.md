---
kind: software
label: Architecture
title: Type Construction Architecture
claim: "Most of your code checks for what should never happen."
line: "See a whole program built this way."
url: https://github.com/kylejtobin/tca
cover: ./type-construction-architecture.png
detail: true
year: 2026
order: 1
---

Each of those checks exists because a type allows more than your business does.

In most code:

- Text can hold any string.
- A number can be any amount.
- An empty value can mean anything.

In Type Construction Architecture:

- A status holds only your statuses.
- An amount holds only what you charge.
- Absence is a case with a name.

So a program that only builds these types has nothing left to check, and an incident has nothing to be.

Those types are the rules, declared once in their owner’s words, so a new hire, the product owner and you next year read what runs.

To an agent, those types are a world model of your business, so the same declarations that tell it what exists stop it from building anything else.
