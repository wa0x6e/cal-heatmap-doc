---
title: date
sidebar_position: 5
---

import BrowserWindow from '@site/src/components/BrowserWindow';

Specify the calendar's time boundaries and settings

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
        'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split(
          '_'
        ),
      months:
        'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split(
          '_'
        ),
      weekStart: 1,
      weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
      monthsShort:
        'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split(
          '_'
        ),
      weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
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
        future: 'í~ñ %s',
        past: '%s á~gó',
        s: 'á ~féw ~sécó~ñds',
        m: 'á ~míñ~úté',
        mm: '%d m~íñú~tés',
        h: 'á~ñ hó~úr',
        hh: '%d h~óúrs',
        d: 'á ~dáý',
        dd: '%d d~áýs',
        M: 'á ~móñ~th',
        MM: '%d m~óñt~hs',
        y: 'á ~ýéár',
        yy: '%d ý~éárs',
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
