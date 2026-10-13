---
sheet: 4
short: What an agent cannot build
position: The wrong refund cannot be made.
key: "Decision: what the agent may settle · Fact: what must be proven first · State: what a thing is right now"
proof:
  - kind: code
    code: |
      class Refund(Decision):
          order: Order
          payment: Proven[Payment]
          # no proof, no refund
          customer_waiting: bool
          approved_by: Person | None
          # required above the limit
  - kind: struck
    as: code
    lines:
      - "Refund(order=unpaid)  # cannot be built"
      - "Refund(amount=over_limit)  # not without approved_by"
---
