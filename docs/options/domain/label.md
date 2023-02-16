---
title: label
---

import BrowserWindow from '@site/src/components/BrowserWindow';

<p class="subhead">Specify all options related to the domain's label configuration</p>

```js
type LabelOptions: {
  text?: string | null | ((timestamp: number, element: SVGElement) => string);
  position: 'top' | 'right' | 'bottom' | 'left',
  textAlign: 'start' | 'middle' | 'end',
  offset: {
    x: number,
    y: number,
  },
  rotate: null | 'left' | 'right',
  width: number,
  height: number,
}
```

<hr />

## `text`

Specify the label's content

```js
label?: string | null | ((timestamp: number, element: SVGElement) => string);
```

Default: `undefined`

This option accepts different value's type, see table below for usage.

| Value type  | Description                                                                                                            | Example Value                                                   | Example output             |
| :---------- | :--------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | -------------------------- |
| `undefined` | Let the calendar decides, based on the chosen `type`                                                                   |                                                                 | `March`                    |
| `string`    | Pass the string to [dayjs `format()`](https://day.js.org/docs/en/display/format), and display its result               | `MMMM`                                                          | `March`                    |
| `null`      | Do not show any label                                                                                                  | `null`                                                          |                            |
| `function`  | Display the function's return value. The function takes the domain's timestamp and the label's SVG Element as argument | `function (timestamp) { return new Date(date).toISOString(); }` | `2022-12-06T20:01:51.290Z` |

:::tip
dayjs `format()` is [`locale`](/options/date.md#locale) and timezone aware.
:::

## `position`

Position of the label, relative to its domain

```js
position: 'top' | 'right' | 'bottom' | 'left',
```

Default: `bottom`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
// Change the position value to see result
cal.paint({
  itemSelector: '#ex-position',
  domain: { label: { position: 'top' } },
});

render(<div id="ex-position"></div>);
```

</BrowserWindow>

## `textAlign`

Horizontal alignment of the label

```js
textAlign: 'start' | 'middle' | 'end',
```

Default: `middle`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
// Change the textAlign value to see result
cal.paint({
  itemSelector: '#ex-textalign',
  domain: { label: { textAlign: 'left' } },
});

render(<div id="ex-textalign"></div>);
```

</BrowserWindow>

## `offset`

Further customize the label placement along its x and y axis

```js
offset: {
  x: number, // in pixels
  y: number, // in pixels
},
```

## `rotate`

Rotate to obtain a vertical label

```js
rotate: null | 'left' | 'right',
```

Default: `null`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
// Change the textAlign value to see result
cal.paint({
  itemSelector: '#ex-rotate',
  domain: { label: { rotate: 'left' } },
});

render(<div id="ex-rotate"></div>);
```

</BrowserWindow>

## `width`

Width of the label, in pixel

```js
width: number,
```

Default: `100`

:::note
Ignored when [`position`](#position) is set to `top` or `bottom`.
In these cases, the width is capped to the domain width.
:::

## `height`

Height of the label, in pixel

```js
height: number,
```

Default: `25`

:::note
Ignored when [`position`](#position) is set to `left` or `right`.
In these cases, the height is capped to the domain height.
:::

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
// Change the height value to see result
cal.paint({
  itemSelector: '#ex-height',
  domain: { label: { height: 50 } },
});

render(<div id="ex-rotate"></div>);
```

</BrowserWindow>
