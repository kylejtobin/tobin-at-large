---
sheet: 3
short: Three answers to one question
position: People quietly fix what systems disagree on. Agents can’t.
consequence: Give agents one definition, and every system acts on it.
proof:
  - kind: table
    columns: [System, An active customer]
    rows:
      - [CRM, Signed in the last year]
      - [Billing, Paid in the last 90 days]
      - [Product, Logged in this month]
  - kind: code
    code: |
      class ActiveCustomer(State):
          customer: Customer
      # one definition, every system
---
