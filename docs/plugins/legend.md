---
title: Legend
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from '@site/src/components/BrowserWindow';

<p className="subhead">This plugin generates a legend</p>

## Install

```mdx-code-block
<Tabs>
  <TabItem value="cdn" label="CDN" default>
```

Add the legend plugin in your page's `<head>`, after cal-heatmap library `<script>`

```html
<script src="https://unpkg.com/cal-heatmap@4.0.0-beta.7/dist/plugins/Legend.min.js"></script>
```

```mdx-code-block
 </TabItem>
 <TabItem value="npm" label="NPM">
```

The plugin is built-in in the core CalHeatmap, just import the module with

```
import { Legend } from 'cal-heatmap';
```

```mdx-code-block
  </TabItem>
</Tabs>
```

<hr />

## Usage

```js
const cal = new CalHeatmap();
// highlight-next-line
cal.paint({}, [[Legend, LEGEND_OPTIONS]]);
```

See [LegendOptions](#legendoptions) for the full list of available options.

## LegendOptions

```js
interface LegendOptions {
  enabled: boolean;
  itemSelector: string | null;
  label: string | null;
  width: number;
}
```

### `enabled`

Whether to enable the legend

Default: `true`

### `itemSelector`

Specify where the legend should be rendered

If not specified, the legend will be inserted just after the calendar, in the same DOM node defined by [`itemSelector`](/options/itemSelector.md).

```js
const cal = new CalHeatmap();
// highlight-next-line
cal.paint({}, [[Legend, { itemSelector: '#my-legend-container' }]]);
```

### `label`

Set the legend's title

Default: `null`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({}, [
  [
    Legend,
    {
      label: 'Max daily temperature (°C)',
      itemSelector: '#legend-label',
    },
  ],
]);

render(<div id="legend-label"></div>);
```

</BrowserWindow>

### `width`

Set the legend's width

Default: `null`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({}, [
  [
    Legend,
    {
      width: 500,
      itemSelector: '#legend-width',
    },
  ],
]);

render(<div id="legend-width"></div>);
```

</BrowserWindow>

:::info
The legend uses [ObservaleHQ Plot library](https://github.com/observablehq/plot) under the hood.
See [this article](https://observablehq.com/@d3/color-legend) for a more detailed and advanced customisation of the legend.
:::
