---
sheet: 5
short: Three systems, one meaning
position: Three systems say how long she’s been with us. The agent gets the desk’s meaning.
proof:
  - kind: speech
    label: The desk
    lines:
      - "“Three years means three years paying us. I don’t care when she signed up.”"
  - kind: table
    columns: [System, Three years with us]
    stack: true
    rows:
      - [CRM, "~~Account created~~"]
      - [Billing, First payment]
      - [Product, "~~First login~~"]
  - kind: code
    code: |
      class Tenure(BaseModel):
          """How long she has paid us."""

          customer: Customer
          first_payment: SettledPayment
---
