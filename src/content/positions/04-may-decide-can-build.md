---
sheet: 4
short: What an agent cannot build
position: What an agent can’t build, it can’t decide.
key: "Decision: an outcome the agent may produce · Proven: a fact the agent can’t assert, only receive"
proof:
  - kind: code
    code: |
      class Refund(Decision):
          order: Order
          payment: Proven[Payment]
          # no proof, no refund
          reason: Reason
  - kind: struck
    as: code
    lines:
      - "Refund(order=unpaid)  # no proven payment"
  - kind: code
    code: |
      Refund(order, proof, reason)
      # built, so it may be decided
---
