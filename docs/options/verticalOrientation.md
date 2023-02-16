---
title: verticalOrientation
sidebar_position: 10
---

import BrowserWindow from '@site/src/components/BrowserWindow';

<p class="subhead">Whether the domains should be arranged on top of each other, or side by side.</p>

```js
verticalOrientation: boolean;
```

Default: `false`

<hr />

## Usage

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
// Set the options to true to view result
cal.paint({ verticalOrientation: false });

render(<div id="cal-heatmap"></div>);
```

</BrowserWindow>
