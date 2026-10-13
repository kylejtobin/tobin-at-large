---
sheet: 4
short: The refund that can’t be made
position: A refund over the limit isn’t declined. It isn’t there.
proof:
  - kind: speech
    label: Dana, at the returns desk
    lines:
      - "“Order’s paid, customer’s waiting, it’s under what I’d sign. Refund it. Tell finance after.”"
  - kind: table
    columns: [The case, The agent]
    rows:
      - ["Paid, waiting, under the limit", Refunds]
      - [
          "Paid, waiting, over the limit",
          "Credits the account, or sends the replacement",
        ]
      - ["Invoice not due yet, arrived broken", Sends the replacement]
---
