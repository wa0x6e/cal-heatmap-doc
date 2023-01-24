---
title: itemSelector
sidebar_position: 1
---

Specify where the calendar should be rendered

```js
itemSelector: Element | string;
```

This option accepts either an [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element), or any [W3C Selector string](https://www.w3.org/TR/selectors-api/), such as `#my-id` or `.myclass`.

Default: `#cal-heatmap`

<hr />

## Usage

#### Example with the _default_ itemSelector

```html title="index.html"
/* Insert the following element somewhere in your page at the place where you
want to insert the calendar */
<div id="cal-heatmap"></div>
```

```js title="index.js"
const cal = new CalHeatmap();
cal.paint(); // itemSelector can be omitted when using the default selector
```

#### Example with a _custom_ itemselector

```html title="index.html"
// Assuming you have the following element somewhere in your page
<div id="my-node"></div>
```

```js title="index.js"
const cal = new CalHeatmap();
// These two following calls are identicals
cal.paint({ itemSelector: '#my-node' });
cal.paint({ itemSelector: document.getElementById('my-node') });
```

:::note
If the DOM node is not empty, the calendar will be inserted after the existing children.
