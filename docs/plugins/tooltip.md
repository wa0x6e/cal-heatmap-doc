---
title: Tooltip
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p className="subhead">This plugin adds a tooltip when hovering over a subDomain's cell</p>

## Install

```mdx-code-block
<Tabs>
  <TabItem value="cdn" label="CDN" default>
```

Add the tooltip plugin and its dependendcy in your page's `<head>`, after cal-heatmap library `<script>`

```html
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/cal-heatmap/dist/plugins/Tooltip.min.js"></script>
```

```mdx-code-block
 </TabItem>
 <TabItem value="npm" label="NPM">
```

The plugin is built-in in the core CalHeatmap, just import the module with

```
import Tooltip from 'cal-heatmap/plugins/Tooltip';
```

```mdx-code-block
  </TabItem>
</Tabs>
```

<hr/>

## Usage

```js
const cal = new CalHeatmap();
// highlight-next-line
cal.paint({}, [[Tooltip, TOOLTIP_OPTIONS]]);
```

See [TooltipOptions](#tooltipoptions) for the full list of available options.

## TooltipOptions

```js
// PopperOptions, see https://popper.js.org/docs/v2/constructors/#options
interface TooltipOptions extends PluginOptions, PopperOptions {
  enabled: boolean;
  text: (timestamp: number, value: number, dayjsDate: dayjs.Dayjs) => string;
}
```

### `enabled`

Whether to enable the tooltip

Default: `true`

To customize the tooltip's UI, look for `#ch-tooltip` in the CSS.

### `text`

A function returning the content of the tooltip

```js
text: (timestamp: number, value: number, dayjsDate: dayjs.Dayjs) => string;
```

Default:

```js
function (timestamp, value, dayjsDate) {
  return `${value} - ${dayjsDate.toString()}`;
}
```

#### Arguments:

- `timestamp`: The timestamp of the current subDomain, in ms, rounded to the start of the subDomain
- `value`: The value of the current subDomain, from your data set
- `dayjsDate`: A locale/timezone aware `dayjs` object, provided for easier date manipulation and formatting.

### And more...

You can customize the underlying popper instance further,
by passing the same object as [`createPopper`](https://popper.js.org/docs/v2/constructors/#options)'s `Options` argument.

## Styling

See `#ch-tooltip` properties in the CSS
