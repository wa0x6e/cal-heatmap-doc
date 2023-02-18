---
title: theme
sidebar_position: 50
---

import BrowserWindow from '@site/src/components/BrowserWindow';

# range

<p className="subhead">Toggle between light and dark mode</p>

```js
theme: 'light' | 'dark',
```

Default: `light`

<hr />

## Usage

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({ theme: 'dark' }, [[Tooltip]]);

render(<div id="cal-heatmap"></div>);
```

</BrowserWindow>
