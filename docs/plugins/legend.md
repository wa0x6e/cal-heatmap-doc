---
title: Legend
sidebar_position: 2
---

This plugin generates a legend

## Install

### NPM

The plugin is built-in in the core CalHeatmap, just import the module with

```js
import { Legend } from 'cal-heatmap';
```

### CDN

Add the legend plugin in your page's `<head>`

```html
<script src="https://unpkg.com/cal-heatmap@4.0.0-beta.4/dist/plugins/Legend.min.js"></script>
```

<hr />

## Usage

```js
const cal = new CalHeatmap();
cal.paint({}, [[Legend, LEGEND_OPTIONS]]);
```

## LegendOptions

```js
interface LegendOptions {
  enabled: boolean;
  itemSelector: string | null;
  label: string | null;
  width: number;
}
```

### enabled

Whether to enable the legend

#### Example

```js
let cal = new CalHeatmap();
cal.paint({}, [[Legend]]);
```

Default: `true`

### itemSelector

Specify where the legend should be rendered

If not sepcified, the legend will be inserted just after the calendar, in the same DOM node defined by [`itemSelector`](/options/itemSelector.md).

#### Example

```js
const cal = new CalHeatmap();
cal.paint({}, [[Legend, { itemSelector: '#my-legend-container' }]]);
```

### label

Set the legend's title

Default: `null`

### width

Set the legend's width

Default: `null`

### Notes

The legend uses [ObservaleHQ Plot library](https://github.com/observablehq/plot) under the hood.
See [this article](https://observablehq.com/@d3/color-legend) for a more detailed and advanced customisation of the legend.
