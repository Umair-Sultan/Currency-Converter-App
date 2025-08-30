const countryList = {
  AED: "AE", // United Arab Emirates
  AFN: "AF", // Afghanistan
  ALL: "AL", // Albania
  AMD: "AM", // Armenia
  ANG: "CW", // Curaçao (Netherlands Antilles legacy)
  AOA: "AO", // Angola
  ARS: "AR", // Argentina
  AUD: "AU", // Australia
  AWG: "AW", // Aruba
  AZN: "AZ", // Azerbaijan
  BAM: "BA", // Bosnia and Herzegovina
  BBD: "BB", // Barbados
  BDT: "BD", // Bangladesh
  BGN: "BG", // Bulgaria
  BHD: "BH", // Bahrain
  BIF: "BI", // Burundi
  BMD: "BM", // Bermuda
  BND: "BN", // Brunei
  BOB: "BO", // Bolivia
  BRL: "BR", // Brazil
  BSD: "BS", // Bahamas
  BTN: "BT", // Bhutan
  BWP: "BW", // Botswana
  BYN: "BY", // Belarus
  BZD: "BZ", // Belize
  CAD: "CA", // Canada
  CDF: "CD", // DR Congo
  CHF: "CH", // Switzerland
  CLP: "CL", // Chile
  CNY: "CN", // China
  COP: "CO", // Colombia
  CRC: "CR", // Costa Rica
  CUP: "CU", // Cuba
  CVE: "CV", // Cape Verde
  CZK: "CZ", // Czech Republic
  DJF: "DJ", // Djibouti
  DKK: "DK", // Denmark
  DOP: "DO", // Dominican Republic
  DZD: "DZ", // Algeria
  EGP: "EG", // Egypt
  ERN: "ER", // Eritrea
  ETB: "ET", // Ethiopia
  EUR: "EU", // Eurozone
  FJD: "FJ", // Fiji
  FKP: "FK", // Falkland Islands
  GBP: "GB", // United Kingdom
  GEL: "GE", // Georgia
  GHS: "GH", // Ghana
  GIP: "GI", // Gibraltar
  GMD: "GM", // Gambia
  GNF: "GN", // Guinea
  GTQ: "GT", // Guatemala
  GYD: "GY", // Guyana
  HKD: "HK", // Hong Kong
  HNL: "HN", // Honduras
  HRK: "HR", // Croatia
  HTG: "HT", // Haiti
  HUF: "HU", // Hungary
  IDR: "ID", // Indonesia
  ILS: "IL", // Israel
  INR: "IN", // India
  IQD: "IQ", // Iraq
  IRR: "IR", // Iran
  ISK: "IS", // Iceland
  JMD: "JM", // Jamaica
  JOD: "JO", // Jordan
  JPY: "JP", // Japan
  KES: "KE", // Kenya
  KGS: "KG", // Kyrgyzstan
  KHR: "KH", // Cambodia
  KMF: "KM", // Comoros
  KPW: "KP", // North Korea
  KRW: "KR", // South Korea
  KWD: "KW", // Kuwait
  KYD: "KY", // Cayman Islands
  KZT: "KZ", // Kazakhstan
  LAK: "LA", // Laos
  LBP: "LB", // Lebanon
  LKR: "LK", // Sri Lanka
  LRD: "LR", // Liberia
  LSL: "LS", // Lesotho
  LYD: "LY", // Libya
  MAD: "MA", // Morocco
  MDL: "MD", // Moldova
  MGA: "MG", // Madagascar
  MKD: "MK", // North Macedonia
  MMK: "MM", // Myanmar
  MNT: "MN", // Mongolia
  MOP: "MO", // Macao
  MRU: "MR", // Mauritania
  MUR: "MU", // Mauritius
  MVR: "MV", // Maldives
  MWK: "MW", // Malawi
  MXN: "MX", // Mexico
  MYR: "MY", // Malaysia
  MZN: "MZ", // Mozambique
  NAD: "NA", // Namibia
  NGN: "NG", // Nigeria
  NIO: "NI", // Nicaragua
  NOK: "NO", // Norway
  NPR: "NP", // Nepal
  NZD: "NZ", // New Zealand
  OMR: "OM", // Oman
  PAB: "PA", // Panama
  PEN: "PE", // Peru
  PGK: "PG", // Papua New Guinea
  PHP: "PH", // Philippines
  PKR: "PK", // Pakistan
  PLN: "PL", // Poland
  PYG: "PY", // Paraguay
  QAR: "QA", // Qatar
  RON: "RO", // Romania
  RSD: "RS", // Serbia
  RUB: "RU", // Russia
  RWF: "RW", // Rwanda
  SAR: "SA", // Saudi Arabia
  SBD: "SB", // Solomon Islands
  SCR: "SC", // Seychelles
  SDG: "SD", // Sudan
  SEK: "SE", // Sweden
  SGD: "SG", // Singapore
  SHP: "SH", // Saint Helena
  SLL: "SL", // Sierra Leone
  SOS: "SO", // Somalia
  SRD: "SR", // Suriname
  STN: "ST", // São Tomé and Príncipe
  SYP: "SY", // Syria
  SZL: "SZ", // Eswatini
  THB: "TH", // Thailand
  TJS: "TJ", // Tajikistan
  TMT: "TM", // Turkmenistan
  TND: "TN", // Tunisia
  TOP: "TO", // Tonga
  TRY: "TR", // Turkey
  TTD: "TT", // Trinidad and Tobago
  TWD: "TW", // Taiwan
  TZS: "TZ", // Tanzania
  UAH: "UA", // Ukraine
  UGX: "UG", // Uganda
  USD: "US", // United States
  UYU: "UY", // Uruguay
  UZS: "UZ", // Uzbekistan
  VES: "VE", // Venezuela
  VND: "VN", // Vietnam
  VUV: "VU", // Vanuatu
  WST: "WS", // Samoa
  XAF: "CM", // CFA Central Africa
  XCD: "AG", // East Caribbean
  XOF: "SN", // CFA West Africa
  XPF: "PF", // CFP Franc
  YER: "YE", // Yemen
  ZAR: "ZA", // South Africa
  ZMW: "ZM", // Zambia
  ZWL: "ZW"  // Zimbabwe
};  

const countryName = {
  AED: "United Arab Emirates",
  AFN: "Afghanistan",
  ALL: "Albania",
  AMD: "Armenia",
  ANG: "Curaçao",
  AOA: "Angola",
  ARS: "Argentina",
  AUD: "Australia",
  AWG: "Aruba",
  AZN: "Azerbaijan",
  BAM: "Bosnia and Herzegovina",
  BBD: "Barbados",
  BDT: "Bangladesh",
  BGN: "Bulgaria",
  BHD: "Bahrain",
  BIF: "Burundi",
  BMD: "Bermuda",
  BND: "Brunei",
  BOB: "Bolivia",
  BRL: "Brazil",
  BSD: "Bahamas",
  BTN: "Bhutan",
  BWP: "Botswana",
  BYN: "Belarus",
  BZD: "Belize",
  CAD: "Canada",
  CDF: "Democratic Republic of Congo",
  CHF: "Switzerland",
  CLP: "Chile",
  CNY: "China",
  COP: "Colombia",
  CRC: "Costa Rica",
  CUP: "Cuba",
  CVE: "Cape Verde",
  CZK: "Czech Republic",
  DJF: "Djibouti",
  DKK: "Denmark",
  DOP: "Dominican Republic",
  DZD: "Algeria",
  EGP: "Egypt",
  ERN: "Eritrea",
  ETB: "Ethiopia",
  EUR: "Eurozone",
  FJD: "Fiji",
  FKP: "Falkland Islands",
  GBP: "United Kingdom",
  GEL: "Georgia",
  GHS: "Ghana",
  GIP: "Gibraltar",
  GMD: "Gambia",
  GNF: "Guinea",
  GTQ: "Guatemala",
  GYD: "Guyana",
  HKD: "Hong Kong",
  HNL: "Honduras",
  HRK: "Croatia",
  HTG: "Haiti",
  HUF: "Hungary",
  IDR: "Indonesia",
  ILS: "Israel",
  INR: "India",
  IQD: "Iraq",
  IRR: "Iran",
  ISK: "Iceland",
  JMD: "Jamaica",
  JOD: "Jordan",
  JPY: "Japan",
  KES: "Kenya",
  KGS: "Kyrgyzstan",
  KHR: "Cambodia",
  KMF: "Comoros",
  KPW: "North Korea",
  KRW: "South Korea",
  KWD: "Kuwait",
  KYD: "Cayman Islands",
  KZT: "Kazakhstan",
  LAK: "Laos",
  LBP: "Lebanon",
  LKR: "Sri Lanka",
  LRD: "Liberia",
  LSL: "Lesotho",
  LYD: "Libya",
  MAD: "Morocco",
  MDL: "Moldova",
  MGA: "Madagascar",
  MKD: "North Macedonia",
  MMK: "Myanmar",
  MNT: "Mongolia",
  MOP: "Macao",
  MRU: "Mauritania",
  MUR: "Mauritius",
  MVR: "Maldives",
  MWK: "Malawi",
  MXN: "Mexico",
  MYR: "Malaysia",
  MZN: "Mozambique",
  NAD: "Namibia",
  NGN: "Nigeria",
  NIO: "Nicaragua",
  NOK: "Norway",
  NPR: "Nepal",
  NZD: "New Zealand",
  OMR: "Oman",
  PAB: "Panama",
  PEN: "Peru",
  PGK: "Papua New Guinea",
  PHP: "Philippines",
  PKR: "Pakistan",
  PLN: "Poland",
  PYG: "Paraguay",
  QAR: "Qatar",
  RON: "Romania",
  RSD: "Serbia",
  RUB: "Russia",
  RWF: "Rwanda",
  SAR: "Saudi Arabia",
  SBD: "Solomon Islands",
  SCR: "Seychelles",
  SDG: "Sudan",
  SEK: "Sweden",
  SGD: "Singapore",
  SHP: "Saint Helena",
  SLL: "Sierra Leone",
  SOS: "Somalia",
  SRD: "Suriname",
  STN: "São Tomé and Príncipe",
  SYP: "Syria",
  SZL: "Eswatini",
  THB: "Thailand",
  TJS: "Tajikistan",
  TMT: "Turkmenistan",
  TND: "Tunisia",
  TOP: "Tonga",
  TRY: "Turkey",
  TTD: "Trinidad and Tobago",
  TWD: "Taiwan",
  TZS: "Tanzania",
  UAH: "Ukraine",
  UGX: "Uganda",
  USD: "United States",
  UYU: "Uruguay",
  UZS: "Uzbekistan",
  VES: "Venezuela",
  VND: "Vietnam",
  VUV: "Vanuatu",
  WST: "Samoa",
  XAF: "Cameroon",
  XCD: "East Caribbean States",
  XOF: "Senegal",
  XPF: "French Polynesia",
  YER: "Yemen",
  ZAR: "South Africa",
  ZMW: "Zambia",
  ZWL: "Zimbabwe"
};
