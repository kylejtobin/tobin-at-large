---
sheet: 4
short: What an agent can build
position: What an agent may decide is exactly what it can build.
proof:
  - kind: code
    code: |
      class Refund(Decision):
          order: Order
          payment: Proven[Payment]
          # no proof, no refund
          reason: Reason
          approved_by: Person | None
          # required above the limit
  - kind: struck
    as: code
    lines:
      - "Refund(order=unpaid)  # cannot be built"
---
