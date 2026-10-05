---
sheet: 3
short: One meaning
position: Agents inherit every definition of the business at once.
insight: "Each system answers “who is an active customer” its own way, and an agent takes whichever answer it reaches first. Defined once, as a model every system and agent shares, the question has one answer."
proof:
  blocks:
    - kind: table
      columns: [System, An active customer]
      rows:
        - [CRM, Signed in the last year]
        - [Billing, Paid in the last 90 days]
        - [Product, Logged in this month]
    - kind: code
      code: |
        class Customer(Entity): ...

        class ActiveCustomer(State):
            customer: Customer
        # one definition, everywhere
  caption: Three definitions become one, as code.
---
