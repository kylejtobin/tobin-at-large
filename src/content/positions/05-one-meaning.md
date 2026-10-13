---
sheet: 5
short: Three systems, three definitions
position: Three systems say active. The agent gets the desk’s meaning, proven.
proof:
  - kind: speech
    label: The desk
    lines:
      - "“Active means they’ve paid us. I don’t care who logged in.”"
  - kind: table
    columns: [System, An active customer]
    rows:
      - [CRM, "~~Signed in the last year~~"]
      - [Billing, Paid in the last 90 days]
      - [Product, "~~Logged in this month~~"]
  - kind: code
    code: |
      class ActiveCustomer(State):
          customer: Customer
          paid: Proven[Payment]
---
