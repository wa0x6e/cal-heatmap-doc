---
title: dimensions()
---

<p class="subhead">Return the calendar's dimensions</p>

```js
type Dimensions = {
  width: number,
  height: number,
};

const cal = new CalHeatmap();
cal.dimensions(): Dimensions;
```

#### Arguments

- none

#### Return

- An object, with the calendar `width` and `height` in pixels.

:::tip
You can also retrieve the calendar's dimensions with the [`resize`](/events.md#resize) event.
:::

## Usage

```js
const cal = new CalHeatmap();
// highlight-start
cal.paint().then(() => {
  // Wait for paint() to complete before retrieving the dimensions
  cal.dimensions(); // { width: 969, height: 142 }
});
// highlight-end
```
