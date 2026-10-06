---
sheet: 3
short: One meaning
position: Agents inherit every definition at once.
consequence: People reconciled the three in meetings. Agents act on all three.
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
