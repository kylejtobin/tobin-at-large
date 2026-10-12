---
sheet: 3
short: Three systems, three definitions
position: People quietly fix what systems disagree on. Agents can’t.
consequence: "A person picks one each time. An agent needs exactly one, and it has to be a fact it can check: a payment, not a flag. So the definition is code."
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
          paid: Payment  # within 90 days
---
