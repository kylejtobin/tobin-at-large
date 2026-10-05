---
sheet: 4
short: Correct by construction
position: The trade between speed and correctness belonged to hand-written code.
insight: "Strict construction was always the better design, and always slower to write by hand. Agents write it at full speed, and read its types as instructions."
proof:
  blocks:
    - kind: code
      code: |
        class Position(BaseModel):
            prior: FlatPosition | Position
            fill: Fill
        # it exists, so it is valid
  caption: A value that can exist is a value that is valid.
---
