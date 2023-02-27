---
title: Installation
description: How to install Cal-Heatmap via CDN or NPM
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Install

```mdx-code-block
<Tabs>
  <TabItem value="cdn" label="CDN" default>
```

Install the dependencies in your page `<head>`.

```html
<script src="https://d3js.org/d3.v7.min.js"></script>
<!-- v6 is also supported -->
<script src="https://d3js.org/d3.v6.min.js"></script>
```

Install the library in your page `<head>`.

```html
<script src="https://unpkg.com/cal-heatmap/dist/cal-heatmap.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/cal-heatmap/dist/cal-heatmap.css"></script>
```

```mdx-code-block
 </TabItem>
 <TabItem value="npm" label="NPM">
```

```
npm install cal-heatmap
```

```mdx-code-block
  </TabItem>
</Tabs>
```

## Distribution target

Cal-Heatmap is distributed in 2 different file formats.

- `esm` (works with `import` syntax — recommended)
- `umd` (works with `<script>` tags or RequireJS)

Each file formats is also shipped in regular and minified/compressed version with [Terser](https://github.com/terser/terser).

The bundle files are located in the `dist` folder, and code source in `src`.

```
cal-heatmap
├── dist
│   ├── cal-heatmap.js
│   ├── cal-heatmap.min.js
│   ├── cal-heatmap.esm.js
│   └── cal-heatmap.min.esm.js
│   └── cal-heatmap.css
│   ├── plugins
│   │   └── Legend.js
│   │   └── Legend.min.js
│   │   └── Legend.esm.js
│   │   └── Legend.min.esm.js
│   │   └── Tooltip.js
│   │   └── Tooltip.min.js
│   │   └── Tooltip.esm.js
│   │   └── Tooltip.min.esm.js
├── src
│   ├── cal-heatmap.js
│   ├── ....

```
