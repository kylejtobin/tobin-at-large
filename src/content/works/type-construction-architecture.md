---
kind: software
label: Open-source architecture
title: Type Construction Architecture
claim: "A program is a set of types. Constructing them is the only operation."
url: https://github.com/kylejtobin/tca
linkLabel: TCA on GitHub
cover: ./type-construction-architecture.png
year: 2026
order: 3
---

Each fact holds the one before it. A reply holds the outcome, the outcome holds the position, and the position holds the fill and the position before it, back to flat. Order is depth, so the sequence is never written and cannot be written wrong, and a position is its own history.

The types are the domain, so nothing restates it in procedures, mappers or checks. A state the domain cannot be in has no type to be, and a refusal is a fact like any other. In its worked example, a trading desk booking fills, none of these can happen:

- a sell booked from a mistyped buy
- a fill accepted, then dropped halfway through
- a position the program believes and the clearing house never recorded
- a refusal the desk never hears about
- every position lost on a restart

It is built for the agent that writes the code: a skill it reads before it writes, a check that admits no procedure, a reviewer that assumes bad faith. An agent acting through the program can construct only what the types declare. What it cannot build, it cannot decide.

One declaration is the specification people read, the program that runs, the code the agent writes and the limit of what the agent decides.
