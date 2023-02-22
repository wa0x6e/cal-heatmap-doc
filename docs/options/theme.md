---
title: theme
sidebar_position: 50
---

<p className="subhead">Toggle between light and dark mode</p>

```js
theme: 'light' | 'dark',
```

Default: `light`

<hr />

## Usage

```js
const cal = new CalHeatmap();
// highlight-next-line
cal.paint({ theme: 'light' });
```

:::note
Theme is a togglable option, and not honoring the CSS `prefers-color-scheme` media query,
as not all websites support dark/light mode.
:::

:::info
All examples and demos in this documentation uses CSS to switch
between light and dark mode, instead of the `theme` option, due to the way
the documentation engine works.
:::
