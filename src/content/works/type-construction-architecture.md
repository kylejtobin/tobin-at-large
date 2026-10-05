---
sheet: 3
layer: Its code
kind: software
title: Type Construction Architecture
subtitle: Software in which an invalid state cannot be constructed.
by: [Kyle J. Tobin]
url: https://github.com/kylejtobin/tca
linkLabel: TCA on GitHub
cover: ./type-construction-architecture.png
recognition: Coding agents ship in an hour what fails in production in a week.
reveal: "Typed design always prevented those failures, and always cost too much on the first day. Machines now read types as instructions, so that cost is gone. Type Construction Architecture builds programs entirely from types whose construction is their proof, and the declarations that constrain the code instruct the agent writing it."
proof:
  kind: struck
  lines:
    - 'fill = body["data"]["payload"]'
    - 'if fill["side"] == "buy":'
    - "if position is None:"
    - "positions = {}"
    - "except Exception: return None"
  caption: Every line the procedural version depends on, and the failure each one hides. Under construction, none of them can be written.
offer:
  line: TAL installs agent-native engineering in software teams, with the method, the skills, and the gates.
  subject: Agent-native engineering
---
