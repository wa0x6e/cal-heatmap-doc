---
title: LegendLite
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from '@site/src/components/BrowserWindow';

<p className="subhead">This plugin generates a basic legend</p>

Compared to [Legend](plugins/legend.md), this plugin generates a more basic legend, with a UI
more similar to [github contribution calendar](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/viewing-contributions-on-your-profile#contributions-calendar).

## Install

```mdx-code-block
<Tabs>
  <TabItem value="cdn" label="CDN" default>
```

Add the legend plugin in your page's `<head>`, after cal-heatmap library `<script>`

```html
<script src="https://unpkg.com/cal-heatmap@4.0.0-beta.9/dist/plugins/LegendLite.min.js"></script>
```

```mdx-code-block
 </TabItem>
 <TabItem value="npm" label="NPM">
```

The plugin is built-in in the core CalHeatmap, just import the module with

```
import { LegendLite } from 'cal-heatmap';
```

```mdx-code-block
  </TabItem>
</Tabs>
```

:::caution
This plugin only support the `quantize`, `ordinal`, and `threshold` [scale's type](options/scale.md#type)
:::

<hr />

## Usage

```js
const cal = new CalHeatmap();
// highlight-next-line
cal.paint({}, [[LegendLite, LEGEND_OPTIONS]]);
```

See [LegendOptions](#legendoptions) for the full list of available options.

## LegendOptions

```js
interface LegendOptions {
  enabled: boolean;
  itemSelector: string | null;
  width: number;
  height: number;
  gutter: number;
  radius: number;
  includeBlank: boolean;
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

### `width`

Set the legend cell's width

Default: `10`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({}, [
  [
    LegendLite,
    {
      width: 25,
      itemSelector: '#legend-width',
    },
  ],
]);

render(<div id="legend-width"></div>);
```

</BrowserWindow>

### `height`

Set the legend cell's height

Default: `10`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({}, [
  [
    LegendLite,
    {
      height: 25,
      itemSelector: '#legend-height',
    },
  ],
]);

render(<div id="legend-height"></div>);
```

</BrowserWindow>

### `gutter`

Set the legend cell's gutter

Default: `2`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({}, [
  [
    LegendLite,
    {
      gutter: 10,
      itemSelector: '#legend-gutter',
    },
  ],
]);

render(<div id="legend-gutter"></div>);
```

</BrowserWindow>

### `radius`

Set the legend cell's radius

Default: `0`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({}, [
  [
    LegendLite,
    {
      radius: 3,
      itemSelector: '#legend-radius',
    },
  ],
]);

render(<div id="legend-radius"></div>);
```

</BrowserWindow>

### `includeBlank`

Whether to include a cell for data with no values

Default: `false`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({}, [
  [
    LegendLite,
    {
      includeBlank: true,
      itemSelector: '#legend-include-blank',
    },
  ],
]);

render(<div id="legend-include-blank"></div>);
```

</BrowserWindow>
