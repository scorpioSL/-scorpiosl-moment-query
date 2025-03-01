

Here is the documentation in Markdown format:

# Moment Query Library Documentation

## Overview

The Moment Query Library is a JavaScript library that allows you to create moment values from queries. It provides a simple and intuitive way to work with dates and times in your application.

## Installation

To install the Moment Query Library, run the following command in your terminal:
```bash
npm install @scorpiosl/moment-query
```

## Usage

The library provides a single function, `parseTimeExpression`, which takes a string query as an argument and returns a moment object.

### Query Syntax

The query syntax is based on the moment.js library. You can use the following formats to create moment values:

* `now`: Returns the current moment.
* `today`: Returns the start of the current day.
* `tomorrow`: Returns the start of the next day.
* `yesterday`: Returns the start of the previous day.
* `month.start`: Returns the start of the current month.
* `month.end`: Returns the end of the current month.
* `year.start`: Returns the start of the current year.
* `year.end`: Returns the end of the current year.
* `quarter.start`: Returns the start of the current quarter.
* `quarter.end`: Returns the end of the current quarter.
* `week.start`: Returns the start of the current week.
* `week.end`: Returns the end of the current week.
* `day.start`: Returns the start of the current day.
* `day.end`: Returns the end of the current day.
* `hour.start`: Returns the start of the current hour.
* `hour.end`: Returns the end of the current hour.
* `minute.start`: Returns the start of the current minute.
* `minute.end`: Returns the end of the current minute.

You can also use the following operators to modify the moment value:

* `+`: Adds a duration to the moment value.
* `-`: Subtracts a duration from the moment value.

### Examples

```javascript
import { parseTimeExpression } from '@scorpiosl/moment-query';

// Get the current moment
const now = parseTimeExpression('now');

// Get the start of the next day
const tomorrow = parseTimeExpression('tomorrow');

// Get the end of the current month
const monthEnd = parseTimeExpression('month.end');

// Add 1 hour to the current moment
const oneHourLater = parseTimeExpression('now+1h');

// Subtract 1 day from the current moment
const yesterday = parseTimeExpression('now-1d');
```

## API Reference

### `parseTimeExpression(query: string): moment`

Parses a time expression and returns a moment object.

* `query`: The time expression to parse.

**Returns**

* A moment object representing the parsed time expression.

## Error Handling

If the query is invalid, the function will throw an error.

## License

The Moment Query Library is licensed under the ISC license.

## Contributing

Contributions are welcome! Please submit a pull request with your changes.

## Acknowledgments

The Moment Query Library is built on top of the moment.js library.
