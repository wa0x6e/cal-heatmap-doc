---
title: Quick Start
sidebar_position: 3
---

import BrowserWindow from '@site/src/components/BrowserWindow';

# Quick start

After [installing](/install.html) the script:

- insert `<div id="cal-heatmap"></div>` where you want to render the calendar in your page
- create a calendar instance
- paint the calendar with your desired options/plugins.

## Examples

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint();
render(<div id="cal-heatmap"></div>);
```

</BrowserWindow>

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({
  itemSelector: '#qs-2',
  date: { start: new Date(2020, 0, 15) },
  domain: { type: 'month' },
  subDomain: { type: 'day' },
});
render(<div id="qs-2"></div>);
```

</BrowserWindow>

You can customize the calendar by passing an [`Options`](/options/) object and/or
a [Plugins list](/plugins/) to [`paint()`](/api/paint.html).

:::tip

See the [showcase](../showcase) section for more examples.

:::
