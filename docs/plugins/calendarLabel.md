---
title: CalendarLabel
sidebar_position: 8
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrowserWindow from '@site/src/components/BrowserWindow';

# CalendarLabel

<p className="subhead">This plugin generates additional labels for the calendar x/y axis</p>

## Install

```mdx-code-block
<Tabs>
  <TabItem value="cdn" label="CDN" default>
```

Add the legend plugin in your page's `<head>`, after cal-heatmap library `<script>`

```html
<script src="https://unpkg.com/cal-heatmap/dist/plugins/CalendarLabel.min.js"></script>
```

```mdx-code-block
 </TabItem>
 <TabItem value="npm" label="NPM">
```

The plugin is built-in in the core CalHeatmap, just import the module with

```
import CalendarLabel from 'cal-heatmap/plugins/CalendarLabel';
```

```mdx-code-block
  </TabItem>
</Tabs>
```

<hr />

## Usage

```js
const cal = new CalHeatmap();
// highlight-next-line
cal.paint({}, [[CalendarLabel, CALENDAR_LABEL_OPTIONS]]);
```

See [CalendarLabelOptions](#calendarlabeloptions) for the full list of available options.

## CalendarLabelOptions

```js
interface CalendarLabelOptions = {
  enabled: boolean;
  text: () => string[];
  key?: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  padding: [number, number, number, number];;
  radius: number;
  width: number;
  height: number;
  gutter: number;
  textAlign: TextAlign;
};
```

### `enabled`

Whether to enable the plugin

Default: `true`

### `text`

A function which return an array of labels.

```js
text: () => string[],
```

The number of returned result is up to you, and generally
depends on the subDomain's type. The returned labels will be split evenly
on the X/Y axis

### `key`

Unique ID for the plugin instance, required when you're using multiple instance of the plugin

```js
key?: string;
```

#### Example

```js
const cal = new CalHeatmap();
cal.paint({}, [
  // highlight-next-line
  [CalendarLabel, { position: 'top', key: 'top' }],
  // highlight-next-line
  [CalendarLabel, { position: 'bottom', key: 'bottom' }],
]);
```

### `position`

Position of the labels, relative to the calendar.

```js
position?: 'top' | 'right' | 'bottom' | 'left';
```

Default: `left`

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint(
  {
    itemSelector: '#cal-label-position',
    range: 3,
    domain: { type: 'month' },
    subDomain: { type: 'day' },
  },
  [
    [
      CalendarLabel,
      {
        position: 'top',
        key: 'top',
        text: () => ['this', '', 'is', 'on', '', 'top'],
        width: 30,
        textAlign: 'middle',
        padding: [0, 0, 5, 0],
      },
    ],
    [
      CalendarLabel,
      {
        position: 'left',
        key: 'left',
        text: () => ['Mon', '', '', 'Thu', '', '', 'Sun'],
        textAlign: 'end',
        width: 30,
        padding: [0, 5, 0, 0],
      },
    ],
    [
      CalendarLabel,
      {
        position: 'bottom',
        key: 'bottom',
        text: () => ['', '', '', ''],
      },
    ],
    [
      CalendarLabel,
      {
        position: 'right',
        key: 'right',
        text: () => [0, 1, 2, 3, 4],
        padding: [0, 10, 0, 10],
      },
    ],
    [
      CalendarLabel,
      {
        position: 'right',
        key: 'right-2',
        text: () => [0, 1, 2, 3, 4, 5, 6],
      },
    ],
  ]
);

render(<div id="cal-label-position"></div>);
```

</BrowserWindow>

### `padding`

Padding around the labels container, in pixel

```js
padding: [number, number, number, number];
```

Expect an array of 4 numbers, in the same order as CSS padding property (top, right, bottom, left)

Default: `[0, 0, 0, 0]`

### `radius`

Border radius of the label's background, in pixel

```js
radius?: number,
```

Default: `0`

### `width`

Width of the label, in pixel

```js
width?: number,
```

Default: [subDomain's width](/options/subDomain.md#width)

### `height`

Height of the label, in pixel

```js
height?: number,
```

Default: [subDomains' height](/options/subDomain.md#height)

:::caution
Total height can not be greater that the domain height
:::

### `gutter`

Space between each label, in pixel

```js
gutter?: number,
```

Default: [subDomains' gutter](/options/subDomain.md#gutter)

### `textAlign`

Horizontal alignment of the label

```js
textAlign?: 'start' | 'middle' | 'end',
```

Default: `middle`

## Styling

### Text color

Default : inherit your parent text color

Overwrite the CSS with

```css
// highlight-next-line
.ch-plugin-calendar-label-text {
  fill: red;
}

/* Or if you have multiple instance  */
// highlight-next-line
[data-key='my-custom-label'] .ch-plugin-calendar-label-text {
  fill: red;
}

// highlight-next-line
[data-key='my-other-label'] .ch-plugin-calendar-label-text {
  fill: blue;
}
```

### Background color

Default: `transparent`

Overwrite the CSS with

```css
// highlight-next-line
.ch-plugin-calendar-label-bg {
  fill: blue;
}

/* Or if you have multiple instance  */
// highlight-next-line
[data-key='my-custom-label'] .ch-plugin-calendar-label-bg {
  fill: blue;
}

// highlight-next-line
[data-key='my-other-label'] .ch-plugin-calendar-label-bg {
  fill: red;
}
```
