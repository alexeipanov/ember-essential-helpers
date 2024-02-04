# ember-essential-helpers
Helpers to format boolean, money, percent and file size values.

[![Node.js Package](https://github.com/alexeipanov/ember-essential-helpers/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/alexeipanov/ember-essential-helpers/actions/workflows/npm-publish.yml)

## Compatibility

* Node.js v14 or above
* Ember.js v3.28 or above

## Installation

```
ember install ember-essential-helpers
```

## boolean-format
### Usage
`{{boolean-format value [labels]}}`

  value: boolean value to display
  labels: array of two strings to display true and false respectively (default: ['Yes', 'No'])

### Examples
```
{{boolean-format true}} // output: Yes
{{boolean-format true (array 'On' 'Off')}} // output: On
```

## filesize
### Usage
`{{filesize value [empty]}}`

  value: integer value to display as filesize
  empty: string to be displayed in case of an undefined value (default: 'N/A')

### Examples
```
{{filesize 8388608}} // output: 8 Mb
{{filesize null "Not a number"}} // output: Not a number
```

# percent
this helper uses native Intl.NumberFormat
### Usage
`{{percent value [locale] [options] [empty]}}`

  value: number
  locale: string
  options: see [Intl.NumberFormat options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options)
  empty: string to be displayed in case of an undefined value (default: 'N/A')

### Examples
```
{{percent 0.125}} // output: 13%
{{percent 0.125 'en-US' (hash minimumFractionDigits=2 maximumFractionDigits=2)}} // output: 12.50%
{{percent null 'en-US' (hash) 'Not set'}} //output: Not set
```

# money-format
this helper uses native Intl.NumberFormat
### Usage
`{{money-format value [locale] [options] [empty]}}`

  value: number
  locale: string
  options: see [Intl.NumberFormat options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options)
  empty: string to be displayed in case of an undefined value (default: 'N/A')

### Examples
```
{{money-format 3.5}} // output: $3.50
{{money-format 3.5 "en-US" (hash currency="EUR")}} // output: €3.50
{{money-format 3.5 "de-DE" (hash currency="EUR")}} // output: 3,50 €
{{money-format null "en-US" (hash currency="EUR") "-"}} // output: -
{{money-format 3500 "en-US" (hash currency="USD")}} // output: $3,500.00
{{money-format 3500 "de-DE" (hash currency="EUR")}} // output: 3.500,00 €
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
