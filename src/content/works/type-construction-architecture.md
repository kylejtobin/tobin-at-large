---
kind: software
label: Architecture
title: Type Construction Architecture
claim: "Every branch in your code is a rule its owner can’t read."
line: "Run the smell check on your own code."
url: https://github.com/kylejtobin/tca
cover: ./type-construction-architecture.png
year: 2026
order: 2
---

In Type Construction Architecture every case is a type, and building one is all a program does, with no branch, loop, exception or null.

Input becomes the one case it matches, or a refusal, where it arrives. Every result contains the fact it came from, so steps cannot run out of order, and a refusal is a case the caller has to take. Delete every function body and the types still describe the business, so whoever owns a rule can read it where it runs.

The smell check fails the build on a single branch, a reviewer reads each change as an attempt to get around the rule, and the skills hold your coding agent to it.
