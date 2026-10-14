---
kind: software
label: Open-source architecture
title: Type Construction Architecture
claim: "An agent can act on it alone and safely, because the wrong outcome cannot exist."
line: "Software whose types are its limits."
url: https://github.com/kylejtobin/tca
linkLabel: TCA on GitHub
cover: ./type-construction-architecture.png
year: 2026
order: 3
---

In TCA a program is a set of types, and running it means constructing them. An outcome no type describes cannot be constructed. Its worked example is a trading desk booking fills, and built this way none of these can happen:

- a sell booked from a mistyped buy
- a fill accepted, then dropped halfway through
- a position the program believes and the clearing house never recorded
- a refusal the desk never hears about
- every position lost on a restart

An agent acting for the organization works through the same types. Its judgment chooses among the outcomes they allow. A decision outside them is never constructed, so there is nothing for an approver to catch.
