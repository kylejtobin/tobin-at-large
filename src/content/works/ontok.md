---
sheet: 2
layer: Its model
kind: software
title: ONTOK
subtitle: The organization’s operational world model, written once as code.
by: [Kyle J. Tobin]
url: https://github.com/kylejtobin/ontok
linkLabel: ONTOK on GitHub
cover: ./ontok.png
recognition: Every system in the business has its own idea of what a customer is.
reveal: "Ontology always promised one definition of the enterprise, and always lived beside the systems instead of inside them. ONTOK makes the model the system: a closed core every organization refines into its own kinds, so every application and agent acts on the same proven facts."
proof:
  kind: code
  code: |
    class Customer(Entity): ...
    class AccountManager(Role): ...
    class ReviewAccount(Action): ...

    ReviewCompleted(id="not an identifier", ...)
    # no such fact exists
  caption: The organization’s own kinds, as code. A fact that fails its kind never exists.
offer:
  line: TAL builds enterprise world models and connects agents and applications to them.
  subject: World models
---
