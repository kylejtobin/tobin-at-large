---
kind: software
label: Open-source architecture
title: Type Construction Architecture
claim: "Type “Buy” with a capital B, and the usual code books a sell."
url: https://github.com/kylejtobin/tca
linkLabel: TCA on GitHub
cover: ./type-construction-architecture.png
year: 2026
order: 3
---

It is the trading desk’s code as everyone writes it, and as every coding agent writes it by default. It holds four more failures:

- a fill accepted, then dropped halfway through
- a position the program believes and the clearing house never recorded
- a refusal the desk never hears about
- every position lost on a restart

In TCA a program is a set of types, and constructing them is the only operation. “Buy” with a capital B is neither a buy nor a sell, so nothing is booked. Built this way, none of the five can happen, and no test or reviewer had to catch them.

TCA is built for the agent that writes your code, and refuses the procedural version until none is left. An agent acting through the program can build only what the types declare. What it cannot build, it cannot decide.

That is how a whole stream of work runs with no one in it: the agent judges each case, and the types decide which outcomes can exist.
