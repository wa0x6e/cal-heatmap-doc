---
title: destroy()
sidebar_position: 4
---

<p class="subhead">Destroy the calendar</p>

```js
const cal = new CalHeatmap();
cal.destroy(): Promise<unknown>
```

#### Arguments

- none

#### Return

- Return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), which will resolve once the calendar finished destroying (after all animations completed).

## Usage

```js
const cal = new CalHeatmap();
cal.paint({ ... });

// Destroy it
// highlight-next-line
cal.destroy().then(() => { console.log('Destroy complete!') });
```

:::tip
There's a [`destroy`](/events.md#destroy) event, triggered at the start of the destroy process.
:::
