---
title: range
sidebar_position: 2
---

import BrowserWindow from '@site/src/components/BrowserWindow';

# range

Specify the number of domains to show

```js
range: number;
```

This option accepts any number greater than 1.

Default: `12`

<hr />

## Usage

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({ range: 3 });

render(<div id="cal-heatmap"></div>);
```

</BrowserWindow>
