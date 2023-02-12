---
title: scale
sidebar_position: 47
---

# scale

Control your data colors

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

Set a color scheme.

```js
scheme: string,
```

Support all schemes from [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic).
Just use any scheme name without the `scheme` prefix.

:::caution
`range`, which allow more advanced scheme customization, will take precedence if set.
:::

## range

Define a range of colors, instead of using one the predefined `scheme`.

```js
range: string[] | d3-scale-chromatic
```

Accepts an array of colors, a color scheme, or an color interpolator.