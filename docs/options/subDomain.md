---
title: subDomain
sidebar_position: 4
---

import BrowserWindow from '@site/src/components/BrowserWindow';

<p className="subhead">Specify all options related to the subDomain configuration</p>

```js
type subDomain: {
  type: string,
  gutter: number,
  width: number,
  height: number,
  radius: number,
  label:
    | string
    | null
    | ((timestamp: number, value: number, element: SVGElement) => string);
  color?:
    | string
    | ((timestamp: number, value: number, backgroundColor: string) => string);
}
```

<hr/>

## `type`

SubDomain's type, representing a time unit.

This is the time unit represented by each cell in the calendar.

```js
type: string,
```

The `subDomain` should always be smaller than the `domain` type.

Each subdomain type have their own layout (rows/columns count, etc ...)

### `month`

Shows all the months within the domain type

Allowed domain type: `year`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({
  range: 1,
  itemSelector: '#example-month',
  domain: { type: 'year' },
  subDomain: { type: 'month', label: 'MM', width: 15, height: 15 },
});

render(<div id="example-month"></div>);
```

</BrowserWindow>

### `week`

Shows all the weeks within the domain type

Allowed domain type: `year`, `month`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({
  range: 1,
  itemSelector: '#example-week',
  domain: { type: 'year' },
  subDomain: { type: 'week', label: 'ww', width: 15, height: 15 },
});

render(<div id="example-week"></div>);
```

</BrowserWindow>

### `day`

Shows all the days within the domain type

Allowed domain type: `year`, `month`, `week`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({
  range: 4,
  itemSelector: '#example-day',
  // Change to month or week to view result
  domain: { type: 'month' },
  subDomain: { type: 'day', label: 'DD' },
});

render(<div id="example-day"></div>);
```

</BrowserWindow>

### `hour`

Shows all the hours within the domain type

Allowed domain type: `month`, `week`, `day`

:::caution
`year` domain is not allowed for performance issues.
:::

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({
  range: 1,
  itemSelector: '#example-hour',
  // Change to month or week to view result
  domain: { type: 'day' },
  subDomain: { type: 'hour', label: 'HH' },
});

render(<div id="example-hour"></div>);
```

</BrowserWindow>

### `minute`

Shows all the minutes within the domain type

Allowed domain type: `day`, `hour`

:::caution
Other domains are not allowed for performance issues.
:::

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({
  range: 1,
  itemSelector: '#example-minute',
  // Change to hour to view result
  domain: { type: 'hour' },
  subDomain: { type: 'minute', label: 'mm' },
});

render(<div id="example-minute"></div>);
```

</BrowserWindow>

There's 2 additional variants for the `day` type

### `xDay`

Shows all the days within the domain type, but from left to right, and top to bottom

Allowed domain type: `year`, `month`, `week`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({
  range: 4,
  itemSelector: '#example-xday',
  // Change to month or week to view result
  domain: { type: 'month', gutter: 10, dynamicDimension: false },
  subDomain: { type: 'xDay', label: 'DD' },
});

render(<div id="example-xday"></div>);
```

</BrowserWindow>

### `ghDay`

Shows all the days within the domain type, but domain start and end are rounded
to the first and end of week of the month, so that each column has the same number of days.

This subDomain type ensure that there is no gap between domains, as opposed to just [`day`](#day)

Allowed domain type: `month`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({
  range: 6,
  itemSelector: '#example-ghday',
  // Change to month or week to view result
  domain: { type: 'month', gutter: 15 },
  subDomain: { type: 'ghDay', label: 'DD', width: 15, height: 15 },
});

render(<div id="example-ghday"></div>);
```

</BrowserWindow>

Note in the above example that the domains does not start and end exactly on the
first and last day of each month, each column represent a full week, to avoid
partially populated column seen in `xDay` type.

:::caution
First week of the month is computed as the week having at least 4 days in the week.
:::

:::tip
You can create and add your own custom subDomain type, see the [`Template`](/template.md) section.
:::

## `gutter`

Space between each subDomain, in pixel

```js
gutter: number,
```

Default: `2`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
// Change the gutter value to see result
cal.paint({
  itemSelector: '#example-gutter',
  subDomain: { gutter: 2 },
});

render(<div id="example-gutter"></div>);
```

</BrowserWindow>

## `width`

Width of each subDomain cell, in pixel

```js
width: number,
```

Default: `10`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
// Change the width value to see result
cal.paint({
  itemSelector: '#example-width',
  subDomain: { width: 10 },
});

render(<div id="example-width"></div>);
```

</BrowserWindow>

## `height`

Height of each subDomain cell, in pixel

```js
height: number,
```

Default: `10`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
// Change the height value to see result
cal.paint({
  itemSelector: '#example-height',
  subDomain: { height: 10 },
});

render(<div id="example-height"></div>);
```

</BrowserWindow>

## `radius`

Border radius of each subDomain cell, in pixel

```js
radius: number,
```

Default: `0`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
// Change the radius value to see result
cal.paint({
  itemSelector: '#example-radius',
  subDomain: { radius: 2 },
});

render(<div id="example-radius"></div>);
```

</BrowserWindow>

## `label`

Label of the subDomain

```js
label:
    | string
    | null
    | ((timestamp: number, value: number, element: SVGElement) => string);
```

Default: `null`

This option accepts different value's type, see table below for usage.

| Value Type | Description                                                                                                                      | Example Value                                                                                     | Example output                         |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `string`   | Pass the string to [dayjs `format()`](https://day.js.org/docs/en/display/format), and display its result. _(not value aware)_    | `MMMM`                                                                                            | `March`                                |
| `null`     | Do not show any label                                                                                                            | `null`                                                                                            |                                        |
| `function` | Display the function's return value. The function takes the subDomain's timestamp, value and the label's SVG Element as argument | `` function (timestamp, value) { return `${value} items on ${new Date(date).toISOString()}`; } `` | `50 items on 2022-12-06T20:01:51.290Z` |

:::tip
dayjs `format()` is [`locale`](/options/date.md#locale) and [timezone](/options/date.md#timezone) aware.
:::

:::caution
Depending on your chosen cell size, subDomain label may overflow
:::

:::tip
You can customize the style of the subDomain label text via css, or by
manipulating the `SVGElement` given as argument when using a `function`.
:::

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({
  range: 3,
  domain: { type: 'month' },
  subDomain: {
    width: 15,
    height: 15,
    type: 'day',
    label: 'D',
    color: (t, v, backgroundColor) => {
      return d3.hcl(backgroundColor).l > 60 ? 'blue' : 'red';
    },
  },
});

render(<div id="cal-heatmap"></div>);
```

</BrowserWindow>

## `color`

Color of the subDomain's label

```js
color?:
| string
| ((timestamp: number, value: number, backgroundColor: string) => string);
```

Default:

```js
d3.hcl(backgroundColor).l > 60 ? 'black' : 'white';
```

This option accepts different value's type, see table below for usage.

| Value Type | Description                                                                                                                                   | Example Value                                                                                                  | Example Output |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------- |
| `string`   | A hexadecimal color code                                                                                                                      | `#000`                                                                                                         | `#000`         |
| `function` | Use the hexadecimal color code returned by the function. The function takes the subDomain's timestamp, value and background color as argument | `function (timestamp, value, backgroundColor) { return d3.hcl(backgroundColor).l > 60 ? 'black' : 'white' ; }` | `#000`         |

Using the `string` value, the same color will be applied to the whole calendar,
regardless of the subDomain's background color. Depending on your color scale,
the label color may not be readable.

Using a `function` will allow more fine-tuning of the label color, as you can use:

- a [d3-color scale](https://github.com/d3/d3-scale-chromatic)
- a range of static colors (i.e `['#fff', '#eee', '#000']`, matching the [`scale's range`](/options/scale.md))
- a custom function returning a color, computed from the background color (like the default value)

## `sort`

Sort order of the subDomains.

```js
sort: 'asc' | 'desc';
```

Default: `asc`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
// Change the sort value to see result
cal.paint({
  itemSelector: '#example-sort',
  domain: { type: 'month' },
  subDomain: { type: 'day', label: 'D', sort: 'asc' },
});

render(<div id="example-sort"></div>);
```

</BrowserWindow>

:::caution Option scope
This only affect the subDomain's order, not the Domain. See [`Domain.sort`](options/domain/index.md#sort) to also set the domains sort order.

You can achieve a RTL result by setting both values to `desc`
:::
