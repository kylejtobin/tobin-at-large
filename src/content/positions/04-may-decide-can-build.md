---
sheet: 4
short: The refund that can’t be made
position: A refund holds a paid order. There is no refund of an unpaid one, so none can be decided.
proof:
  - kind: code
    code: |
      class Refund(BaseModel):
          """The intended refunding
          of a paid order, for a reason."""

          order: PaidOrder
          reason: Reason
---
