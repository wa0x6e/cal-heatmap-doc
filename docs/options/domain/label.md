---
title: label
---

Specify all options related to the domain's label configuration

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
dayjs `format()` is [`locale`](/options/date.html#locale) and timezone aware.
:::

## `position`

Position of the label, relative to its domain

```js
position: 'top' | 'right' | 'bottom' | 'left',
```

Default: `bottom`

## `textAlign`

Horizontal alignment of the label

```js
textAlign: 'start' | 'middle' | 'end',
```

Default: `middle`

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
