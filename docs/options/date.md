---
title: date
sidebar_position: 5
---

import BrowserWindow from '@site/src/components/BrowserWindow';

<p className="subhead">Specify the calendar's time boundaries and settings</p>

```js
type DateOptions: {
  start: Date;
  min?: Date;
  max?: Date;
  highlight?: Date[];
  locale: string | Partial<ILocale>;
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

```js
const cal = new CalHeatmap();
cal.paint({
  date: {
    // highlight-start
    highlight: [
      new Date('2020-01-15'),
      new Date(), // Highlight today
    ],
    // highlight-end
  },
});
```

## `locale`

Date locale.

```js
locale: string | Partial<ILocale>;
// See https://github.com/iamkun/dayjs/blob/dev/types/locale/types.d.ts for ILocale definition
```

`locale` is used by the underlying Day.js library to set the language
and locale specific function, such as the first day of the week (monday/sunday).

Default: `en`

This option behaves differently, depending on the type of the passed value.

### Using a locale name

Pass a dayjs locale name, e.g. `en`, `fr`, etc ...

```js title="Using the french locale"
const cal = new CalHeatmap();
cal.paint({
  // highlight-next-line
  date: { locale: 'fr' },
});
```

See the [list of supported locale](https://github.com/iamkun/dayjs/tree/dev/src/locale) on day.js repository.

:::tip
For performance reasons, only the `en` locale is included by default, and
all other locales are loaded on-demand. You can save a few milliseconds by
including the dayjs locale script directly in your `<head>`, e.g. `<script src="https://cdn.jsdelivr.net/npm/dayjs@1/locale/zh-cn.js"></script>`, after the cal-heatmap.js `<script>`
:::

### Using a partial locale definition

Extend the default `en` locale, by passing a _partial_ [dayjs locale object](https://day.js.org/docs/en/customization/customization).

```js title="Change the start of the week to monday"
const cal = new CalHeatmap();
cal.paint({
  // highlight-next-line
  date: { locale: { weekStart: 1 } },
});
```

:::tip
A locale object without the `name` property will be considered as partial
:::

### Using a full locale definition

Pass a full locale object. See [dayjs locale documentation](https://day.js.org/docs/en/customization/customization) for object structure,
and its [github repo](https://github.com/iamkun/dayjs/tree/dev/src/locale) for some examples.

```js title="Pass a full custom locale"
const cal = new CalHeatmap();
cal.paint({
  date: {
    locale: {
      // highlight-next-line
      // Name property is required in order to not consider this object as partial
      name: 'x-pseudo',
      weekdays:
        'S~????d??~??_M??~??d????~_T????~sd????~_W??d~????sd~????_T~h??rs~d????_~Fr??d~????_S~??t??r~d????'.split(
          '_'
        ),
      months:
        'J~????????~r??_F~??br??~??r??_~M??rc~h_??p~r??l_~M????_~J??????~_J??l~??_????~g??st~_S??p~t??mb~??r_??~ct??b~??r_??~??v??m~b??r_~D??c??~mb??r'.split(
          '_'
        ),
      weekStart: 1,
      weekdaysShort: 'S~????_~M????_~T????_~W??d_~Th??_~Fr??_~S??t'.split('_'),
      monthsShort:
        'J~????_~F??b_~M??r_~??pr_~M????_~J????_~J??l_~????g_~S??p_~??ct_~????v_~D??c'.split(
          '_'
        ),
      weekdaysMin: 'S~??_M??~_T??_~W??_T~h_Fr~_S??'.split('_'),
      ordinal: n => n,
      formats: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      relativeTime: {
        future: '??~?? %s',
        past: '%s ??~g??',
        s: '?? ~f??w ~s??c??~??ds',
        m: '?? ~m????~??t??',
        mm: '%d m~??????~t??s',
        h: '??~?? h??~??r',
        hh: '%d h~????rs',
        d: '?? ~d????',
        dd: '%d d~????s',
        M: '?? ~m????~th',
        MM: '%d m~????t~hs',
        y: '?? ~??????r',
        yy: '%d ??~????rs',
      },
    },
  },
});
```

## `timezone`

Date timezone.

```js
timezone?: string;
```

Default: guessed from user browser.

Accepts any string representing a [IANA timezone canonical name](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database).

```js
const cal = new CalHeatmap();
cal.paint({
  // highlight-next-line
  date: { timezone: 'Europe/Paris' },
});
```

:::info
See the list of TZ database timezone [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
:::
