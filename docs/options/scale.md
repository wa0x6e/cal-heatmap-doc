---
title: scale
sidebar_position: 47
---

import BrowserWindow from '@site/src/components/BrowserWindow';

# scale

<p className="subhead">Control how your data are represented on the heatmap</p>

:::warning Work in progress
Documention for this option is incomplete, option is not final and may change before the final release
:::

```js
type scaleOptions = {
  as: 'color' | 'opacity',
  type: 'threshold',
  domain: number[],
  scheme: string,
  range: string[] | d3-scale-chromatic
};
```

<hr />

## as

Specify the type of color type

```js
as: 'color' | 'opacity',
```

## type

```js
type: 'threshold',
```

## domain

```js
domain: number[],
```

## scheme

Use a predefined color scheme from [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic)

```js
scheme: string, // scheme name from d3-chromatic-scale, e.g. "Purple", "RdYlGn"
```

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
    y: 'temp_max',
    groupY: 'max',
  },
  date: { start: new Date('2012-01-01') },
  scale: {
    as: 'color',
    type: 'linear',
    // Try some values: Purple, Blues, Turbo, Magma, etc ...
    scheme: 'Cool',
    domain: [0, 30],
  },
});

render(<div id="cal-heatmap"></div>);
```

</BrowserWindow>

:::tip
You can see the full list of predefined color scheme [here](https://observablehq.com/@d3/color-schemes)
:::

:::caution
[`scheme`](#scheme) is mutually exclusive with [`range`](#range), which will take precedence if set.
:::

:::info
See [`range`](#range) if you want to use your own color palette.
:::

## range

Define your own color palette

```js
range: string[] | d3-scale-chromatic
```

Accepts an array of colors, a color scheme, or an color interpolator.
