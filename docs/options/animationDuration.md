---
title: animationDuration
sidebar_position: 50
---

<p className="subhead">Control the duration of the various animations</p>

```js
animationDuration: number, // duration, in milliseconds
```

Default: `200`

Animation is used each time there is a change in the calendar UI, such as
navigation, resize, etc...

<hr />

## Usage

```js
const cal = new CalHeatmap();
// highlight-next-line
cal.paint({ animationDuration: 500 });
```
