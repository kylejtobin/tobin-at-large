---
kind: software
label: Architecture
title: Type Construction Architecture
claim: "Most of your code checks for what should never happen."
line: "See one feature built both ways."
url: https://github.com/kylejtobin/tca
cover: ./type-construction-architecture.png
detail: true
year: 2026
order: 2
---

Each of those checks exists because a type allows more than your business does.

1. Text can hold any string.
2. A number can be any amount.
3. An empty value can mean anything.

Your business allows a few of each, and every check, missed test and incident sits in that difference. Type Construction Architecture declares types that allow exactly what the business allows, so a program that only builds them has nothing left to check and nothing for an incident to be.

Those types are the rules, declared once in their owner’s words, so a new hire, the product owner and you next year read what runs.

To an agent, those types are a world model of your business, so the same declarations that tell it what exists stop it from building anything else.
