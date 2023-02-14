---
title: Tooltip
sidebar_position: 2
---

This plugin adds a tooltip when hovering over a subDomain's cell

## Install

### NPM

The plugin is built-in in CalHeatmap, just import the module with

```js
import { Tooltip } from 'cal-heatmap';
```

### CDN

Add the tooltip plugin script and its dependencies in your page's `<head>`

```html
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/cal-heatmap@4.0.0-beta.6/dist/plugins/Tooltip.min.js"></script>
```

<hr/>

## Usage

```js
const cal = new CalHeatmap();
cal.paint({}, [[Tooltip, TOOLTIP_OPTIONS]]);
```

## TooltipOptions

```js
// PopperOptions, see https://popper.js.org/docs/v2/constructors/#options
interface TooltipOptions extends PluginOptions, PopperOptions {
  enabled: boolean;
  text: (timestamp: number, value: number, dayjsDate: dayjs.Dayjs) => string;
}
```

### enabled

Whether to enable the tooltip

Default: `true`

To customize the tooltip's UI, look for `#ch-tooltip` in the CSS.

### text

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

### Additional Popper options

You can customize the underlying popper instance further,
by passing the same object as [`createPopper`](https://popper.js.org/docs/v2/constructors/#options)'s `Options` argument.
