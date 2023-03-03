---
title: Scale type
sidebar_position: 1
---

import BrowserWindow from '@site/src/components/BrowserWindow';

<p className="subhead">Detailed guide about all the various scale's type</p>

:::info
This guide assumes that you have read the [`scale`](options/scale.md) section

The calendar rely on [Plot](https://github.com/observablehq/plot#color-options) to handle all color scales. Part of this documentation is extracted from their own documentation, see their docs for more advanced usage.
:::

## `ordinal`

Associate each `domain` value to a specific color.

This type is best used when your dataset have a finite number of different values,
which do not necessarly have a specific ordered, `domain` do not have to be sorted.

This is also the type you have to use when using a dataset with non-numerical values.

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint(
  {
    scale: {
      color: {
        domain: [0, 5, 10, 15, 20, 25, 30],
        type: 'ordinal',
      },
    },
    data: {
      source: '../../fixtures/seattle-weather.csv',
      type: 'csv',
      x: 'date',
      y: d => parseInt(d['temp_max']),
      groupY: 'max',
    },
    date: { start: new Date('2012-01-01') },
    range: 1,
    itemSelector: '#ex-ordinal',
    domain: {
      type: 'year',
    },
    subDomain: { type: 'day', radius: 2, label: (t, v) => v },
  },
  [[Legend, { width: 500 }]]
);

render(<div id="ex-ordinal"></div>);
```

</BrowserWindow>

Notice in the above example that all data not matching the `domain` values are ignored.

You can control the colors by passing the option:

- a `scheme`
- a `range`, an array of colors, same size as the domain array

When `scheme` nor `range` are specified, it will default to [`Turbo`](https://observablehq.com/@d3/color-schemes#Turbo) scheme.

Followed is an example with non-numerical dataset

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint(
  {
    scale: {
      color: {
        domain: ['Banana', 'Orange', 'Apple', 'Berry'],
        type: 'ordinal',
      },
    },
    data: {
      source: [
        { t: new Date('2012-01-01'), v: 'Banana' },
        { t: new Date('2012-01-04'), v: 'Orange' },
        { t: new Date('2012-01-12'), v: 'Apple' },
        { t: new Date('2012-01-18'), v: 'Berry' },
      ],
      x: 't',
      y: 'v',
      groupY: d => d[0],
    },
    date: { start: new Date('2012-01-01') },
    range: 1,
    itemSelector: '#ex-ordinal-2',
    domain: {
      type: 'month',
    },
    subDomain: {
      type: 'xDay',
      radius: 2,
      width: 35,
      height: 35,
      label: (t, v) => v,
    },
  },
  [[Legend, { width: 400 }]]
);

render(<div id="ex-ordinal-2"></div>);
```

</BrowserWindow>

## `categorical`

Same as `ordinal`, but default to `tableau10` scheme.

## `threshold`

> For a threshold scale, the domain represents n (typically numeric) thresholds which will produce a range of n + 1 output colors; the ith color of the range applies to values that are smaller than the ith element of the domain and larger or equal to the i - 1th element of the domain

Learn more about on the [Plot documentation](https://github.com/observablehq/plot#color-options)

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint(
  {
    scale: {
      color: {
        domain: [5, 10, 15, 20, 25, 30],
        type: 'threshold',
        scheme: 'YlOrRd',
      },
    },
    data: {
      source: '../../fixtures/seattle-weather.csv',
      type: 'csv',
      x: 'date',
      y: d => parseInt(d['temp_max']),
      groupY: 'max',
    },
    date: { start: new Date('2012-01-01') },
    range: 1,
    itemSelector: '#ex-threshold',
    domain: {
      type: 'year',
    },
    subDomain: { type: 'day', radius: 2, label: (t, v) => v },
  },
  [[Legend]]
);

render(<div id="ex-threshold"></div>);
```

</BrowserWindow>

You can control the colors by passing the option:

- a `scheme`
- a `range`, an array of `n+1` colors, with `n` the size of `domain`

When `scheme` nor `range` are specified, it will default to [`RdYlBu`](https://observablehq.com/@d3/color-schemes#RdYlBu) scheme.

## `quantize`

> For a quantize scale, the domain will be transformed into approximately n quantized values, where n is an option that defaults to 5.

Learn more about on the [Plot documentation](https://github.com/observablehq/plot#color-options)

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint(
  {
    scale: {
      color: {
        domain: [0, 30],
        type: 'quantize',
      },
    },
    data: {
      source: '../../fixtures/seattle-weather.csv',
      type: 'csv',
      x: 'date',
      y: d => parseInt(d['temp_max']),
      groupY: 'max',
    },
    date: { start: new Date('2012-01-01') },
    range: 1,
    itemSelector: '#ex-quantize',
    domain: {
      type: 'year',
    },
    subDomain: { type: 'day', radius: 2, label: (t, v) => v },
  },
  [[Legend]]
);

render(<div id="ex-quantize"></div>);
```

</BrowserWindow>

When `scheme` nor `range` are specified, it will default to [`RdYlBu`](https://observablehq.com/@d3/color-schemes#RdYlBu) scheme.

## `quantile`

> For a quantile scale, the domain represents all input values to the scale, and the n option specifies how many quantiles to compute from the domain; n quantiles will produce n - 1 thresholds, and an output range of n colors

Learn more about on the [Plot documentation](https://github.com/observablehq/plot#color-options)

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint(
  {
    scale: {
      color: {
        domain: [0, 30],
        type: 'quantile',
      },
    },
    data: {
      source: '../../fixtures/seattle-weather.csv',
      type: 'csv',
      x: 'date',
      y: d => parseInt(d['temp_max']),
      groupY: 'max',
    },
    date: { start: new Date('2012-01-01') },
    range: 1,
    itemSelector: '#ex-quantile',
    domain: {
      type: 'year',
    },
    subDomain: { type: 'day', radius: 2, label: (t, v) => v },
  },
  [[Legend]]
);

render(<div id="ex-quantile"></div>);
```

</BrowserWindow>

When `scheme` nor `range` are specified, it will default to [`RdYlBu`](https://observablehq.com/@d3/color-schemes#RdYlBu) scheme.

## `linear`

Create a scale of continuous colors.

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint(
  {
    scale: {
      color: {
        domain: [0, 30],
        type: 'linear',
      },
    },
    data: {
      source: '../../fixtures/seattle-weather.csv',
      type: 'csv',
      x: 'date',
      y: d => parseInt(d['temp_max']),
      groupY: 'max',
    },
    date: { start: new Date('2012-01-01') },
    range: 1,
    itemSelector: '#ex-linear',
    domain: {
      type: 'year',
    },
    subDomain: { type: 'day', radius: 2, label: (t, v) => v },
  },
  [[Legend]]
);

render(<div id="ex-linear"></div>);
```

</BrowserWindow>

You can control the colors by passing the option:

- a `scheme`
- a `range` of 2 or more colors, with an optional `interpolate` function

When `scheme` nor `range` are specified, it will default to [`Turbo`](https://observablehq.com/@d3/color-schemes#Turbo) scheme.

There are a few mathematical-oriented variant of the `linear` type:

- `pow` - power (exponential) transform
- `sqrt` - square-root transform (pow transform with exponent = 0.5)
- `log` - logarithmic transform
- `symlog` - bi-symmetric logarithmic transform per Webber et al.
- `sequential` - equivalent to `linear`
- `cyclical` - equivalent to `linear`, but defaults to the [`Rainbow`](https://observablehq.com/@d3/color-schemes#Rainbow) scheme

## `diverging`

Equivalent to `linear`, but with a pivot; but defaults to the [`RdBu`](https://observablehq.com/@d3/color-schemes#RdBu) scheme

> all diverging color scales are symmetric around the pivot; set symmetric to false if you want to cover the whole extent on both sides.

All diverging type support additional options:

- `pivot` (default to 0)
- `symmetric` (default to false), whether the scale should be symetric around the pivot

Play with the option in the playground to check how these options work.

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint(
  {
    scale: {
      color: {
        domain: [-20, 20],
        type: 'diverging',
        scheme: 'BuRd',
        pivot: 0,
        symmetric: true,
      },
    },
    data: {
      source: '../../fixtures/seattle-weather.csv',
      type: 'csv',
      x: 'date',
      y: d => parseInt(d['temp_min']),
      groupY: 'min',
    },
    date: { start: new Date('2012-01-01') },
    range: 1,
    itemSelector: '#ex-diverging',
    domain: {
      type: 'year',
    },
    subDomain: { type: 'day', radius: 2, label: (t, v) => v },
  },
  [[Legend]]
);

render(<div id="ex-diverging"></div>);
```

</BrowserWindow>

There are also variant of the `diverging` scale:

- `diverging-log` - like log, but with a pivot that defaults to 1; defaults to the [`RdBu`](https://observablehq.com/@d3/color-schemes#RdBu) scheme
- `diverging-pow` - like pow, but with a pivot; defaults to the [`RdBu`](https://observablehq.com/@d3/color-schemes#RdBu) scheme
- `diverging-sqrt` - like sqrt, but with a pivot; defaults to the [`RdBu`](https://observablehq.com/@d3/color-schemes#RdBu) scheme
- `diverging-symlog` - like symlog, but with a pivot; defaults to the [`RdBu`](https://observablehq.com/@d3/color-schemes#RdBu) scheme
