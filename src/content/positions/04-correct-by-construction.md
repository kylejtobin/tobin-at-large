---
sheet: 4
short: Correct by construction
position: Speed and correctness stopped being a trade.
consequence: Agents write strict code at full speed.
proof:
  - kind: struck
    lines:
      - "if position is None:"
      - "positions = {}"
      - "except Exception: return None"
  - kind: code
    code: |
      class Position(BaseModel):
          prior: FlatPosition | Position
          fill: Fill
      # it exists, so it is valid
---
