---
title: data
sidebar_position: 6
---

<p class="subhead">Specify how to fetch and process the data used to fill the calendar</p>

```js
type DataRecord = Record<string, string | number>;
type DataGroupType = 'sum' | 'count' | 'min' | 'max' | 'median';

type DataOptions = {
  source: string | DataRecord[],
  type: 'json' | 'csv' | 'tsv' | 'txt',
  requestInit: object,
  x: string | ((datum: DataRecord) => number),
  y: string | ((datum: DataRecord) => number),
  groupY: DataGroupType | ((values: number[]) => number),
};
```

The calendar is expecting an array of objects as input.  
There is no expected pre-defined structure for the object,
but it must at least have one or more property for the date,
and another one for the value.

```js title="Classic object"
[
  { date: '2012-01-01', value: 3 },
  { date: '2012-01-02', value: 6 },
  ...
];
```

```js title="Using timestamp"
[
  { t: 1673388319933, p: 3, v: 58 },
  { t: 1673388319934, p: 6, v: 1 },
  ...
];
```

```js title="Using multiple properties to define a date"
[
  { year: 2020, month: 1, day: 1, temperature: 38 },
  ...
];
```

More options are available below to instruct the calendar on
how to fetch, read and extract the date and value from your dataset.

<hr/>

## `source`

Data used to populate the calendar.

```js
source: string | DataRecord[],
```

There are 2 ways to pass your data to the calendar:

### Using a local object

```js
// highlight-start
const data = [
  { date: '2012-01-01', value: 3 },
  { date: '2012-01-02', value: 6 },
];
// highlight-end

const cal = new CalHeatmap();
cal.paint({
  // highlight-next-line
  data: { source: data },
});
```

### Fetching data from a remote source

A `string` value will be interpreted as an url, and the data
will be retrieved via a `GET` request.

```js
const cal = new CalHeatmap();
cal.paint({
  // highlight-next-line
  data: { source: 'https://your-api.com/data.json' },
});
```

Some tokens are available to customize your url,
in order to limit the data time range from your remote source.

| Token       | Description                                                                                                                  | Example output             |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------- | :------------------------- |
| `{t:start}` | Timestamp (in seconds)                                                                                                       | `1673388319`               |
| `{t:end}`   | Timestamp (in seconds)                                                                                                       | `1673388319`               |
| `{d:start}` | [ISO 8601 formatted Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) | `2011-10-05T14:48:00.000Z` |
| `{d:end}`   | [ISO 8601 formatted Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) | `2011-10-05T14:48:00.000Z` |

- `start` refers to the start of the first subDomain of the calendar
- `end` refers to the end of the last subDomain of the calendar

:::note
The `start` and `end` time range are both inclusive.
:::

:::tip
The tokens' value will dynamically update on [navigation](/API/navigation/index.md).
:::

```js title="Usage"
const cal = new CalHeatmap();
cal.paint({
  // highlight-next-line
  data: { source: 'https://your-api.com/data?start={t:start}&end{t:end}' },
});
```

If the remote source is behind authentication, or requires additional request
customization, see [requestInit](#requestinit).

## `type`

Parser used to interpret the data returned by your url source.

```js
type: 'json' | 'csv' | 'tsv' | 'txt',
```

The parser will interpret the data, and convert it to an array of DataRecord.

Default: `json`

:::note
This option is used only when the [`source`](#source) is an url.
:::

## `requestInit`

Additional [requestInit](https://fetch.spec.whatwg.org/#requestinit) options, send along your data request.

[d3-fetch](https://github.com/d3/d3-fetch) is used under the hood to handle all network requests. See their documentation for further information and usage.

Default: `{}`

:::note
This option is used only when the `source` is an url.
:::

```js title="Usage"
{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }
```

## `x`

Property name of the date, or a function returning a timestamp.  
Instruct the calendar how to extract the _date_ property from your data.

```js
x: string | ((datum: DataRecord) => number),
```

You can either pass a:

- `string`: key name of the property holding the date, in your datum object. The date will be parsed using [`Date.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date). Ensure that
  the date format is ISO 8601 compliant.
- `function`: function taking the datum as argument, and should return a timestamp

#### Example

```js title="Extract date using property name"
// highlight-next-line
var data = [{ column1: '2012-01-01', column2: 3 }];

cal.paint({
  // highlight-next-line
  data: { source: data, x: 'column1' },
});
```

```js title="Extract date using a custom function"
// highlight-next-line
var data = [{ column1: '2012-01-01', column2: 3 }];

cal.paint({
  data: {
    source: data,
    // highlight-start
    x: datum => {
      return +new Date(datum['column1']);
    },
    // highlight-end
  },
});
```

```js title="Compute date from multiple properties"
// highlight-next-line
var data = [{ year: 2020, month: 1, value: 3 }];

cal.paint({
  data: {
    source: data,
    // highlight-start
    x: datum => {
      return +new Date(datum['year'], datum['month'] - 1, 1);
    },
    // highlight-end
  },
});
```

## `y`

Property name of the the value, or a function returning the value.  
Instruct the calendar how to extract the _value_ property from your data.

```js
y: string | ((datum: DataRecord) => number),
```

You can either pass a:

- `string`: key name of the property holding the value, in your datum object. The value should be a number.
- `function`: function taking the datum as argument, and should return the value, as a number.

#### Example

```js title="Extract value using property name"
// highlight-next-line
var data = [{ column1: '2012-01-01', column2: 3 }];

cal.paint({
  // highlight-next-line
  data: { source: data, y: 'column2' },
});
```

```js title="Extract value using a built-in function"
// highlight-next-line
var data = [{ date: '2012-01-01', high: '30', low: '16' }];

cal.paint({
  data: {
    source: data,
    // highlight-start
    y: datum => {
      // You can use the function to pre-process your values
      return +datum['high'] + +datum['low']) / 2;
    },
    // highlight-end
  },
});
```

## `groupY`

Aggregate function, to group all values from the same subDomain.

```js
type DataGroupType = 'sum' | 'count' | 'min' | 'max' | 'median';
```

```js
groupY: DataGroupType | ((values: number[]) => number),
```

You can either pass a:

- `string`: name of a built-in aggregate function (see _DataGroupType_)
- `function`: function taking an array of datum from the same subDomain, and should return a new aggregated value.

#### Example

```js title="data.js"
var data = [
  { column1: '2012-01-01', column2: 3 },
  { column1: '2012-01-01', column2: 3 },
  { column1: '2012-01-02', column2: 3 },
];
```

```js title="Group using a built-in function"
cal.paint({
  data: {
    source: data,
    x: 'column1',
    y: 'column2',
    // highlight-next-line
    groupY: 'sum',
  },
});
```

```js title="Group using a custom function"
cal.paint({
  data: {
    source: data,
    x: 'column1',
    y: 'column2',
    // highlight-start
    groupY: data => {
      return data.reduce((a, b) => a + b, 0);
    },
    // highlight-end
  },
});
```
