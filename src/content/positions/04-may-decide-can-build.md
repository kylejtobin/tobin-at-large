---
sheet: 4
short: The refund that can’t be made
position: A refund is of a paid order. An unpaid one has no refund to decide.
proof:
  - kind: code
    code: |
      class Refund(BaseModel):
          """The intended refunding
          of a paid order."""

          model_config = ConfigDict(
              frozen=True,
              extra="forbid",
              strict=True,
              validate_default=True,
              revalidate_instances="never",
          )
          order: PaidOrder
          reason: Reason
---
