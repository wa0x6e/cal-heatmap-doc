---
title: extendDayjs()
sidebar_position: 12
---

<p className="subhead">Extend the dayjs library with plugins</p>

```js
const cal = new CalHeatmap();
cal.extend(PluginFunc);
```

The built-in dayjs is already shipped with some plugins, see the [DateHelper](https://github.com/wa0x6e/cal-heatmap/blob/master/src/helpers/DateHelper.ts) for
the list of plugins.

#### Arguments

- `plugin`: A [`Dayjs Plugin`](https://day.js.org/docs/en/plugin/plugin)

#### Return

- `void`

## Usage

#### Example with the [BuddhistEra](https://day.js.org/docs/en/plugin/buddhist-era) plugin

Inject the dayjs plugin in your page `<head>`

```html title="index.html"
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/plugin/buddhistEra.js"></script>
```

Extend dayjs with the plugin, before the [`paint()`](/API/paint.md) call

```js title="index.js"
const cal = new CalHeatmap();
// highlight-next-line
cal.extendDayjs(window.dayjs_plugin_buddhistEra);
cal.paint();
```
