---
title: data
sidebar_position: 6
---

<p className="subhead">Specify how to fetch and process the data used to fill the calendar</p>

```js
type DataRecord = Record<string, string | number>;
type DataGroupType = 'sum' | 'count' | 'min' | 'max' | 'average';

type DataOptions = {
  source: string | DataRecord[],
  type: 'json' | 'csv' | 'tsv' | 'txt',
  requestInit: object,
  x: string | ((datum: DataRecord) => number),
  y: string | ((datum: DataRecord) => number),
  groupY:
    | DataGroupType
    | ((values: (number | string | null)[]) => number | string | null),
  defaultValue: null | number | string,
};
```

The calendar is expecting an array of objects as input.  
There is no expected pre-defined structure for the object,
but it must at least have one or more property for the date,
and another one for the value, which is usually a number, but string is also accepted

```js title="Classic object"
[
  { date: '2012-01-01', value: 3 },
  { date: '2012-01-02', value: 6 },
  ...
];
```

```js title="Using timestamp"
[
  { t: 1673388319933, p: 3, v: 'Asia' },
  { t: 1673388319934, p: 6, v: 'Europe' },
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

#### Injecting dynamic date

2 special tokens are available to customize your url,
in order to limit the data time range from your remote source.

- `{{start=XXX}}` will be replaced by the start of the first subDomain of the calendar
- `{{end=XXX}}` will be replaced by the end of the last subDomain of the calendar

`XXX` should be replaced by any [dayjs format token](https://day.js.org/docs/en/display/format) ([Advanced tokens](https://day.js.org/docs/en/plugin/advanced-format) are also accepted)

:::note
The `start` and `end` time range are both inclusive.
:::

:::tip
The tokens' value will dynamically update on [navigation](/API/navigation/index.md).
:::

```js title="Usage"
const cal = new CalHeatmap();
cal.paint({
  date: { start: new Date('2020-01-01') },
  // highlight-next-line
  data: {
    source:
      'https://your-api.com/data?start={{start=YYYY-MM-DD}}&end={{end=[year-]YYYY}}',
  },
});
```

The above `date.source` will output something like:

```
https://your-api.com/data?start=2020-01-01&end=year-2020
```

If the remote source is behind authentication, or requires additional request
customization, see [requestInit](#requestinit).

:::caution
[`Fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) is used under the hood to load the remote resource.
Ensure that your endpoint has [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) setup properly.
:::

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

- `string`: key name of the property holding the date, in your datum object. The date will be parsed using [`Date.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date).
- `function`: function taking the datum as argument, and should return a timestamp

:::caution
If your date is a string (e.g. '2020-01-01T00:00:00'), ensure that its format is [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) compliant (`YYYY-MM-DDTHH:mm:ss.sssZ`), or it may lead to inconsistency/precision loss.

If possible, we recommend to always use timestamp, to avoid all timezone related issues.
:::

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
y: string | ((datum: DataRecord) => number | string),
```

You can either pass a:

- `string`: key name of the property holding the value, in your datum object. The value should be a number.
- `function`: function taking the datum as argument, and should return the value, as a number or a string

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

:::caution
When using a [`source`](#source) other than a local javascript object, there is no auto-casting, and all values will be parsed as `string`.
If your value is a number, consider using a function to cast it properly, e.g.:

```js
y: (datum) => +datum['key_name']
```

instead of just 

```js
y: 'key_name'
```
:::

## `groupY`

Aggregate function, to group all values from the same subDomain.

```js
type DataGroupType = 'sum' | 'count' | 'min' | 'max' | 'average';
```

```js
groupY:
  | DataGroupType
  | ((values: (number | string | null)[]) => number | string | null),
```

You can either pass a:

- `string`: name of a built-in aggregate function (see _DataGroupType_), only available if your values are numeric
- `function`: function taking an array of datum from the same subDomain, and should return a new aggregated value.

Default: `sum`

:::caution
If your values are non-numeric, you have to use `count`, or implement your own aggregation strategy
:::

#### Example

```js title="data.js"
var data = [
  { column1: '2012-01-01', column2: 3 },
  { column1: '2012-01-01', column2: 4 },
  { column1: '2012-01-02', column2: 5 },
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
      // data === [3, 4, 5]
      return data.reduce((a, b) => a + b, 0);
    },
    // highlight-end
  },
});
```

`groupY` also supports values with non-numeric type, such as

```js title="data.js"
var data = [
  { column1: '2012-01-01', column2: 'Asia' },
  { column1: '2012-01-01', column2: 'Europe' },
  { column1: '2012-01-02', column2: 'Asia' },
];
```

In that case, only the `count` DataGroupType will be available, and you should implement
your own `groupY` function if you are grouping your values by another strategy.

## `defaultValue`

Default value to use when your dataset does not have a value for a date.

```js
defaultValue: null | number | string,
```

Default: `null`

:::tip
The most common use case will be to set it to `0`

This option used to be known as `considerMissingDataAsZero` in the previous versions
:::
