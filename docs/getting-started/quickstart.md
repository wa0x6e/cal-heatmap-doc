---
title: Quick Start
sidebar_position: 2
---

import BrowserWindow from '@site/src/components/BrowserWindow';

# Quick start

1. [Install](/getting-started/installation.md) the script
2. Insert `<div id="cal-heatmap"></div>` where you want to render the calendar in your page
3. Instantiate and paint the calendar with your desired options/plugins

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({});
render(<div id="cal-heatmap"></div>);
```

</BrowserWindow>

:::note
You can customize the calendar by passing an [`Options`](/options/index.md) object and/or
a [Plugins list](/plugins/index.md) to [`paint()`](/API/paint.md).
:::

:::tip

See the [showcase](../showcase) section for more examples.

:::
