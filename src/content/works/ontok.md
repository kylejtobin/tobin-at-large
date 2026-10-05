---
sheet: 2
layer: What the business means
kind: software
title: ONTOK
subtitle: The organization’s operational world model, written once as code.
by: [Kyle J. Tobin]
url: https://github.com/kylejtobin/ontok
linkLabel: ONTOK on GitHub
cover: ./ontok.png
recognition: Every system has its own idea of what a customer is. The agents inherited all of them.
reveal: "Every attempt at one shared definition of the enterprise, from data dictionaries to formal ontologies, ended up as documentation beside the systems. ONTOK puts it inside them: a fixed vocabulary of entities, roles, goals, actions, and rules, extended into each organization’s own terms as the code its software and agents run on."
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
  promise: One definition of the business that every application and agent acts on, and no project has to reinvent.
  ask: Discuss a world model
---
