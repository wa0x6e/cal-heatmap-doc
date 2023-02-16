---
title: paint()
sidebar_position: 1
---

<p class="subhead">Paint the calendar using the given Options and Plugins.</p>

```js
const cal = new CalHeatmap();
// highlight-next-line
cal.paint(options: Options, plugins? PluginDefinition[] | PluginDefinition): Promise<unknown>;
```

This is the core method, used to setup and paint the calendar.

#### Arguments

- `options`: An [`Options`](/options/index.md) object.
- `plugins`: An array of [Plugin Definition](/plugins/index.md) definition.

#### Return

- A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), that will resolve once the calendar is painted, and filled with data.

:::tip
The calendar can be updated dynamically by calling this method with new [`Options`](/options/index.md).
:::

<hr/>

## Usage

```js title="With custom options"
const cal = new CalHeatmap();
// highlight-start
cal.paint({
  range: 1,
  date: { start: new Date(2020, 0, 1) },
});
// highlight-end
```

```js title="With plugins"
const cal = new CalHeatmap();
// highlight-next-line
cal.paint({}, [[Timezone, { timezone: 'Europe/Paris' }]]);
```
