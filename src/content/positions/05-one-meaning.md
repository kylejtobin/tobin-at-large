---
sheet: 5
short: Three systems, three definitions
position: People quietly fix what systems disagree on. Agents can’t.
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
          paid: Proven[Payment]
          # a fact, not a flag
---
