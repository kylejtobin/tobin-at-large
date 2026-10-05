---
sheet: 3
layer: How software behaves
kind: software
title: Type Construction Architecture
subtitle: Software in which an invalid state cannot be constructed.
by: [Kyle J. Tobin]
url: https://github.com/kylejtobin/tca
linkLabel: TCA on GitHub
cover: ./type-construction-architecture.png
recognition: Coding agents ship in an hour what fails in production in a week.
reveal: "Strict typing has prevented these failures for decades, and most teams skipped it because it was slow to write by hand. Coding agents remove that cost, and they follow types as instructions. Type Construction Architecture builds a program entirely from types that cannot be created in an invalid state, so the code itself holds the agent to the design."
proof:
  kind: struck
  lines:
    - 'fill = body["data"]["payload"]'
    - 'if fill["side"] == "buy":'
    - "if position is None:"
    - "positions = {}"
    - "except Exception: return None"
  caption: Each line hides a production failure. In TCA, none of them can be written.
offer:
  name: Agent-native engineering
  promise: Delivery at the speed of agents, without the defects agents make.
  ask: Discuss agent-native engineering
---
