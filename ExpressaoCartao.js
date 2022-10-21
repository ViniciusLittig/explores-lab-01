// Visa
// Iniciar com 4 seguido de mais 15 dígitos
4234234423432344

// master
// iniciar com 5, seguido de um dígito entre 1 e 5, seguido de mais 2 dígitos
//OU
// iniciar com 22, seguido de um dígito entre 2 e 9, seguido de mais 1 dígito
//OU
//iniciar com 2, seguido de um dígito entre 3 e 7, seguido de mais 2 dígitos
// seguido de mais 12 dígitos

5353535353535353
2323232323232323

const cardsDynamicMasks = [
  {
    mask: "0000 000000 00000",
    regex: /^3[47]\d{0,13}/,
    cardtype: "american express",
  },
  {
    mask: "0000 0000 0000 0000",
    regex: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
    cardtype: "discover",
  },
  {
    mask: "0000 000000 0000",
    regex: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
    cardtype: "diners",
  },
  {
    mask: "0000 0000 0000 0000",
    regex: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
    cardtype: "mastercard",
  },
  {
    mask: "0000 000000 00000",
    regex: /^(?:2131|1800)\d{0,11}/,
    cardtype: "jcb15",
  },
  {
    mask: "0000 0000 0000 0000",
    regex: /^(?:35\d{0,2})\d{0,12}/,
    cardtype: "jcb",
  },
  {
    mask: "0000 0000 0000 0000",
    regex: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
    cardtype: "maestro",
  },
  {
    mask: "0000 0000 0000 0000",
    regex: /^4\d{0,15}/,
    cardtype: "visa",
  },
  {
    mask: "0000 0000 0000 0000",
    regex: /^62\d{0,14}/,
    cardtype: "unionpay",
  },
]
