---
title: Events
sidebar_position: 6
---

<p class="subhead">Listen for events emitted by the calendar</p>

```js
const cal = new CalHeatmap();
// highlight-start
cal.on(eventName: string, (arguments: any): void => {
  // Do something with the arguments on event trigger
})
// highlight-end
cal.paint();
```

:::caution
Define your listeners before calling `paint()`, to make sure you're catching events emitted by the `paint()` call.
:::

<hr/>

## Events list

### `resize`

Event emitted when the calendar size has changed.

#### Arguments:

- `newWidth`
- `newHeight`
- `oldWidth`
- `oldHeight`

```js title="Usage example"
cal.on('resize', (newW, newH, oldW, oldH) => {
  console.log(
    `Calendar has been resized from ${oldW}x${oldH} to ${newW}x${newH}`
  );
});
```

:::tip
You can also retrieve the calendar's dimensions with [`dimensions()`](/API/dimensions.md)
:::

### `fill`

Event emitted after new data have been loaded and painted into the calendar.

#### Arguments: `none`

```js title="Usage example"
cal.on('fill', () => {
  console.log('New data have been loaded!');
});
```

### `click`

Event emitted on a subDomain cell click

#### Arguments:

- [`PointerEvent`](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent) object
- subDomain timestamp (in ms), rounded to the start of the subdomain
- Value (from your dataset) associated to this subdomain

```js title="Usage example"
cal.on('click', (event, timestamp, value) => {
  console.log(
    'On <b>' +
      new Date(timestamp).toLocaleDateString() +
      '</b>, the max temperature was ' +
      value +
      '°C'
  );
});
```

### `mouseover`

Event emitted when the mouse enter a subDomain cell.

#### Arguments:

- [`PointerEvent`](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent) object
- subDomain timestamp (in ms), rounded to the start of the subdomain
- Value (from your dataset) associated to this subdomain

```js title="Usage example"
cal.on('mouseover', (event, timestamp, value) => {
  console.log(
    'On <b>' +
      new Date(timestamp).toLocaleDateString() +
      '</b>, the max temperature was ' +
      value +
      '°C'
  );
});
```

### `mouseout`

Event emitted when the mouse exit a subDomain cell.

#### Arguments:

- [`PointerEvent`](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent) object
- subDomain timestamp (in ms), rounded to the start of the subdomain
- Value (from your dataset) associated to this subdomain

```js title="Usage example"
cal.on('mouseout', (event, timestamp, value) => {
  console.log(
    'On <b>' +
      new Date(timestamp).toLocaleDateString() +
      '</b>, the max temperature was ' +
      value +
      '°C'
  );
});
```

### `minDateReached`

Event emitted after a navigation event, and when the calendar has reached the [`min`](/options/date.md#min) date, if set.

#### Arguments: `none`

```js title="Usage example"
cal.on('minDateReached', () => {
  // Do something to disable the navigation PREVIOUS button
});
```

### `maxDateReached`

Event emitted after a navigation event, and when the calendar has reached the [`max`](/options/date.md#max) date, if set.

#### Arguments: `none`

```js title="Usage example"
cal.on('maxDateReached', () => {
  // Do something to disable the navigation NEXT button
});
```

### `minDateNotReached`

Event emitted after a navigation event, and when the calendar has _not_ reached the [`min`](/options/date.md#min) date, if set.
Used to exit the calendar from the `minDateReached` status.

#### Arguments: `none`

```js title="Usage example"
cal.on('minDateNotReached', () => {
  // Do something to enable back the PREVIOUS button,
  // after disabling it with the minDateReached event
});
```

### `maxDateNotReached`

Event emitted after a navigation event, and when the calendar has _not_ reached the [`max`](/options/date.md#max) date, if set.
Used to exit the calendar from the `maxDateReached` status.

#### Arguments: `none`

```js title="Usage example"
cal.on('maxDateNotReached', () => {
  // Do something to enable back the NEXT button,
  // after disabling it with the maxDateReached event
});
```

### `destroy`

Event emitted when calling [`destroy()`](/API/destroy.md).

#### Arguments: `none`

:::caution
This event is emitted at the start of the destroy process,
use the promise returned by [`destroy()`](/API/destroy.md) if you want to wait for the
destroy process to complete.
:::

```js title="Usage example"
cal.on('destroy', () => {
  // Calendar has started destroying
  // Do something
});
```
