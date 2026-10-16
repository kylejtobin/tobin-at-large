---
kind: software
label: Architecture
title: Type Construction Architecture
claim: "Most of your code checks for what should never happen."
line: "See one feature built both ways."
url: https://github.com/kylejtobin/tca
cover: ./type-construction-architecture.png
year: 2026
order: 2
---

Type Construction Architecture makes all of it impossible to build, so the checks go, and so do the incidents they missed.

What remains is each case your program can be in, declared once in its owner’s words, so a rule changes in one place. A new hire, the product owner and you next year read the same types, and what they read is what runs. To an agent, those types are a world model of your business, so the same declarations that tell it what exists stop it from building anything else.

None of it uses a branch, a null or a caught exception, and a smell check fails the build on the first one.
