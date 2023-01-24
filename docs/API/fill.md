---
title: fill()
sidebar_position: 2
---

Update the calendar's data set

```js
const cal = new CalHeatmap();
cal.fill(data: DataOptions['source']): Promise<unknown>;
```

#### Arguments

- `data`: A [`Data.source`](/options/data.md#source).

#### Return

- A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), that will resolve once the calendar is filled with the new data.

## When to use

Use this method if you only want to update your calendar dataset,
without trigerring any other changes, as `fill()` is already called behind the scene by [`paint()`](/API/paint.md)
and all [navigation methods](/docs/API/navigation/).

## Usage

```js
const cal = new CalHeatmap();
cal.paint({ data: { source: 'https://my-api.com/weather-min-temp.json' } });
// User opted to show max temp instead of min temp
// highlight-next-line
cal.fill('https://my-api.com/weather-max-temp.json');
```
