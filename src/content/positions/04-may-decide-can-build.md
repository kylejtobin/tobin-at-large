---
sheet: 4
short: What an agent cannot build
position: A refund with no proven payment can’t be made. So it can’t be decided.
proof:
  - kind: code
    code: |
      class Refund(Decision):
          order: Order
          payment: Proven[Payment]
          # handed to the agent, never made up
          # no proof, no refund
          reason: Reason
  - kind: struck
    as: code
    lines:
      - "Refund(order=unpaid)  # no proven payment"
  - kind: code
    code: |
      Refund(order, proof, reason)
      # the agent can make it,
      # so it can decide it
---
