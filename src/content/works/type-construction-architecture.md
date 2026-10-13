---
kind: software
label: Open-source architecture
title: Type Construction Architecture
line: "What an agent may decide is what it can build."
code: |
  class Refund(Decision):
      order: Order
      paid: Payment    # none, no refund
      amount: Money = Field(le=2_000)
      # above it, a person
url: https://github.com/kylejtobin/tca
linkLabel: TCA on GitHub
cover: ./type-construction-architecture.png
order: 3
---
