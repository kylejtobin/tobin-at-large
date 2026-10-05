---
sheet: 2
area: Meaning
question: "What the business’s terms actually mean"
exhibit: "TAL’s open-source language for this work"
kind: software
title: ONTOK
subtitle: The organization’s operational world model, written once as code.
by: [Kyle J. Tobin]
url: https://github.com/kylejtobin/ontok
linkLabel: ONTOK on GitHub
cover: ./ontok.png
recognition: Every system has its own idea of what a customer is. The agents inherited all of them.
reveal: "An agent reasons with whatever definitions it is handed, and most organizations hand it several that disagree. TAL defines the business’s terms once, as a model of the organization written in code, and connects every application and agent to it, so a question about customers has one answer."
proof:
  kind: code
  code: |
    class Customer(Entity): ...
    class AccountManager(Role): ...
    class ReviewAccount(Action): ...

    ReviewCompleted(id="not an identifier", ...)
    # no such fact exists
  caption: The organization’s own terms, as code. A fact that fails its definition never exists.
offer:
  name: World models
  promise: One definition of the business that every application and agent acts on.
  ask: Discuss a world model
---
