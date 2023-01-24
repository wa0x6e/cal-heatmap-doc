---
title: date
sidebar_position: 5
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import CalHeatmap from '@site/src/components/CalHeatmap';

Specify the calendar's time boundaries and settings

```js
type DateOptions: {
  start: Date;
  min?: Date;
  max?: Date;
  highlight?: Date[];
  locale: string;
  timezone?: string
}
```

<hr />

## `start`

Start date of the calendar

```js
start: Date;
```

Default: `new Date()` (today)

:::info
Date is rounded to the start of the domain's type.  
If `start` is `new Date(2000-06-16)`, and the chosen domain is `month`, the
calendar will start on `2000-06-01` (start of the month).
:::

## `min`

Minimum allowed date.
Used on navigation, to set a lower bound when navigating backward.

Should always be `<= start`

```js
min?: Date;
```

Default: `null`

## `max`

Maximum allowed date.
Used on navigation, to set a upper bound when navigating forward.

Should always be `>= start`

```js
max?: Date;
```

Default: `null`

## `highlight`

Array of dates to highlight.  
Highlighted subDomain cells are given a special class to make them standout.

```js
highlight?: Date[];
```

Default: `[]`

:::tip
See the `highlight` class in the CSS to customize its style
:::

## `locale`

Date locale.

```js
locale: string;
```

`locale` is used by the underlying Day.js library to set the language
and locale specific function, such as the first day of the week (monday/sunday).

Default: `en`

See the [list of supported locale](https://github.com/iamkun/dayjs/tree/dev/src/locale) on day.js repository.

For performance reasons, only the `en` locale is included by default, and
all other locales are loaded on-demand. You can save a few milliseconds by
including the dayjs locale script directly in your `<head>`, e.g. `<script src="https://cdn.jsdelivr.net/npm/dayjs@1/locale/zh-cn.js"></script>`

#### Example with the french locale

<BrowserWindow>

```js
const cal = new CalHeatmap();
cal.paint({
  domain: { type: 'month' },
  subdomain: { type: 'day' },
  date: { locale: 'fr' },
});
```

</BrowserWindow>

## `timezone`

Date timezone.

```js
timezone?: string;
```

Default: guessed from user browser.
