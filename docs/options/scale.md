---
title: scale
sidebar_position: 47
---

import BrowserWindow from '@site/src/components/BrowserWindow';

# scale

<p className="subhead">Control how your data are represented on the heatmap</p>

```js
type scaleOptions = {
  opacity?: {
    baseColor: string,
    domain: number[],
    type: string,
  },
  color?: {
    scheme: string,
    range: string[] | d3-scale-chromatic,
    interpolate: string | d3-interpolator,
    domain: number[],
    type: string,
  },
};
```

Your dataset can be represented either with a range of different colors, or with a single color with different opacity.

:::caution
`color` and `opacity` are mutually exclusive, you should only use one.
:::

:::caution
`domain` is always required
:::

<hr />

## `color`

Use 2 or more colors to represent your dataset. Depending on the [`type`](#type), it will use a continuous range of colors, or a discret set.

```js
color: {
  scheme: string,
  range: string[] | d3-scale-chromatic-scheme,
  interpolate: string | d3-interpolator,
  domain: number[],
  type: string,
},
```

### `scheme`

Use a predefined color scheme name from [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic).

This is the easiest way to bind color to your dataset, using predefined color palette and interpolator

```js
scheme: string, // scheme name from d3-chromatic-scale, e.g. "Purple", "RdYlGn"
```

#### Playground

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({
  range: 1,
  domain: { type: 'year', label: { text: null } },
  subDomain: { type: 'day' },
  data: {
    source: '/fixtures/seattle-weather.csv',
    type: 'csv',
    x: 'date',
    y: d => +d['temp_max'],
    groupY: 'max',
  },
  date: { start: new Date('2012-01-01') },
  scale: {
    color: {
      // Try some values: Purples, Blues, Turbo, Magma, etc ...
      scheme: 'Cool',
      type: 'linear',
      domain: [0, 30],
    },
  },
});

render(<div id="cal-heatmap"></div>);
```

</BrowserWindow>

:::tip
You can see a more visual list of predefined color scheme [here](https://observablehq.com/@d3/color-schemes)
:::

:::caution
[`scheme`](#scheme) is mutually exclusive with [`range`](#range), which will take precedence if set.
:::

:::info
See [`range`](#range) if you want to use your own color palette.
:::

### `range`

Define your own color palette

```js
range: string[] | d3-scale-chromatic-scheme
```

Accepts an array of colors, or a [d3 color scheme function](https://github.com/d3/d3-scale-chromatic).

When using an array of colors, it expects a minimum of 2 colors.

```js title="Using an array of colors"
const cal = new CalHeatmap();
cal.paint({
  scale: {
    color: {
      // highlight-next-line
      range: ['red', '#0000FF'],
    },
  },
});
```

```js title="Using an d3 color scheme function"
const cal = new CalHeatmap();
cal.paint({
  scale: {
    color: {
      // highlight-next-line
      range: d3.schemeSpectral[3],
    },
  },
});
```

### `interpolate`

Used in conjuction with `range`, define how to interpolate the color range.

The following color interpolators are supported:

- `rgb` - RGB (red, green, blue)
- `hsl` - HSL (hue, saturation, lightness)
- `lab` - CIELAB (a.k.a. “Lab”)
- `hcl` - CIELChab (a.k.a. “LCh” or “HCL”)

```js
const cal = new CalHeatmap();
cal.paint({
  scale: {
    color: {
      range: ['red', 'green', 'blue'],
      // highlight-next-line
      interpolate: 'hcl',
    },
  },
});
```

Or you can also use a [d3.interpolator](https://github.com/d3/d3-interpolate/blob/main/README.md#color-spaces) directly

```js
const cal = new CalHeatmap();
cal.paint({
  scale: {
    color: {
      range: ['red', 'blue'],
      // highlight-next-line
      interpolate: d3.interpolateRgb.gamma(2.2),
    },
  },
});
```

#### Playground

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({
  itemSelector: '#scale-color',
  range: 1,
  domain: { type: 'year', label: { text: null } },
  subDomain: { type: 'day' },
  data: {
    source: '/fixtures/seattle-weather.csv',
    type: 'csv',
    x: 'date',
    y: d => +d['temp_max'],
    groupY: 'max',
  },
  date: { start: new Date('2012-01-01') },
  scale: {
    color: {
      range: ['yellow', 'red'],
      interpolate: 'hsl',
      type: 'linear',
      domain: [0, 30],
    },
  },
});

render(<div id="scale-color"></div>);
```

</BrowserWindow>

### `domain`

An array of at least 2 values, specifying the _minimum_ and _maximum_ value of your dataset.

When using the `threshold`'s type, domain should be a list of different threshold

```js
domain: number[],
```

```js title="Linear type, only min/max are required"
const cal = new CalHeatmap();
cal.paint({
  scale: {
    color: {
      // highlight-next-line
      domain: [-5, 25],
    },
  },
});
```

```js title="Threshold type"
const cal = new CalHeatmap();
cal.paint({
  scale: {
    color: {
      range: ['red', 'blue'],
      // highlight-next-line
      domain: [0, 10, 20, 30, 40, 50],
      // With n the number of values:
      // This will generate a scale of 5 (n-1) colors, between red and blue
      // Use the interpolator to control how the colors are generated,
      // or you can also use a range with n-1 colors
    },
  },
});
```

### `type`

The scale type used to encode colors

```js
type: string,
```

The following types are supported

- `ordinal`
- `linear` (default) - linear transform (translate and scale)-
- `pow` - power (exponential) transform-
- `sqrt` - square-root transform (pow transform with exponent = 0.5)-
- `log` - logarithmic transform-
- `symlog` - bi-symmetric logarithmic transform per Webber et al.-
- `categorical` - equivalent to ordinal, but defaults to the tableau10 scheme-
- `sequential` - equivalent to linear-
- `cyclical` - equivalent to linear, but defaults to the rainbow scheme-
- `threshold` - encodes based on the specified discrete thresholds; defaults to the rdylbu scheme-
- `quantile` - encodes based on the computed quantile thresholds; defaults to the rdylbu scheme-
- `quantize` - transforms a continuous domain into quantized thresholds; defaults to the rdylbu scheme-
- `diverging` - like linear, but with a pivot; defaults to the rdbu scheme-
- `diverging-log` - like log, but with a pivot that defaults to 1; defaults to the rdbu scheme-
- `diverging-pow` - like pow, but with a pivot; defaults to the rdbu scheme-
- `diverging-sqrt` - like sqrt, but with a pivot; defaults to the rdbu scheme-
- `diverging-symlog` - like symlog, but with a pivot; defaults to the rdbu scheme

:::info
Most use cases will use only the 4 most common types:

- quantize
- linear
- categorical
- diverging

See the [advanced section](/docs/advanced/scaleType) to learn more about the different type and their usage

:::

## `opacity`

Use the difference in opacity to represent your dataset, using a single color.

:::tip
`opacity` is best used when you have a dynamic background color, such as light/dark mode.

See the [daily precipitation example](showcase.md#seattle-daily-average-precipitation)
:::

### `baseColor`

The base color

```js
baseColor: string,
```

Accepts a color name (`red`), a hexadecimal color code (`#ff0000`), or rgb (`rgb(0, 0, 255)`).

### `domain`

Same as [`color.domain`](#domain)

### `type`

Same as [`color.type`](#type)

#### Playground

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({
  itemSelector: '#scale-opacity',
  range: 1,
  domain: { type: 'year', label: { text: null } },
  subDomain: { type: 'day' },
  data: {
    source: '/fixtures/seattle-weather.csv',
    type: 'csv',
    x: 'date',
    y: d => +d['temp_max'],
    groupY: 'max',
  },
  date: { start: new Date('2012-01-01') },
  scale: {
    opacity: {
      baseColor: '#71b747',
      type: 'linear',
      domain: [0, 30],
    },
  },
});

render(<div id="scale-opacity"></div>);
```

</BrowserWindow>

:::note
Cal-Heatmap is using [Plot](https://github.com/observablehq/plot/tree/977e0118dad0f05158dbc3c0cab5f92047f449fd#color-options) as the underlying library to handle the color scale.
Take a look at their documentation for more advanced uses.

Some part of the scale documentation are extracted from their own documentation.
:::

## More advanced guide

You can read a more advanced guide about the various scale type in the [Advanced section](/docs/advanced/scaleType)
