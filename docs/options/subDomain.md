---
title: subDomain
sidebar_position: 4
---

Specify all options related to the subDomain configuration

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

## type

SubDomain's type, representing a time unit

```js
type: string,
```

The `subDomain` should always be smaller than the `domain` type.

### Available default subDomains type

- `month`
- `week`
- `day`
- `x_day`
- `hour`
- `minute`

See [Examples](/examples)

{: .note}
You can create and add your own custom subDomain, see the [`Templates`](/templates) section.

## gutter

Space between each subDomain, in pixel

```js
gutter: number,
```

Default: `2`

## width

Width of each subDomain cell, in pixel

```js
width: number,
```

Default: `10`

## height

Height of each subDomain cell, in pixel

```js
height: number,
```

Default: `10`

## radius

Border radius of each subDomain cell, in pixel

```js
radius: number,
```

Default: `0`

## label

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

{: .note}
dayjs `format()` is [`locale`](/options/date.html#locale) and timezone aware.

{: .note }
Depending on your chosen cell size, subDomain label may overflow

You can customize the style of the subDomain label text via css, or by
manipulating the `SVGElement` given as argument when using a `function`.

## color

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
- a range of static colors (i.e `['#fff', '#eee', '#000']`, matching the [`scale's range`](/options/scale.html))
- a custom function returning a color, computed from the background color (like the default value)
