---
title: FAQ
sidebar_position: 50
---

### How to change start of week to monday

The start of the week (sunday/monday) depends on each locale. By default,
the calendar is using the `en` locale, which uses sunday as first day of the week.

#### Use a locale where the start of the week is monday

Some locale, such as `fr`, uses monday as start of the week, nothing else is required

```js
const cal = new CalHeatmap();
cal.paint({
  // highlight-next-line
  date: { locale: 'fr' },
});
```

#### Keep the `en` locale, but customize it to have monday as start of the week

You can pass a partial [daysjs locale object](https://day.js.org/docs/en/customization/customization) to `locale`, overwritting some default `en` locale values

```js
const cal = new CalHeatmap();
cal.paint({
  // highlight-next-line
  date: { locale: { weekStart: 1 } },
});
```

#### Pass your own custom locale

See [`locale`](https://day.js.org/docs/en/customization/customization) doc

:::info
This option was known as `startWeekOnMonday` in the previous version.
:::

### How to change the calendar language

Use the [locale](options/date.md#locale) option. For additional text such as tooltip text, a callback
function is provided, so you can customize the displayed text.

### Dark/Light mode support

Use the [`theme`](options/theme.md) option

### Trigger an action when clicking a calendar cell

See the [`click` event](events.md#click)

### Use a custom `subDomain` interval, such as `6 hours`, `15 min`, etc ...

See [Templates](template.md), to create your own custom subDomain with your desired time interval

### Refresh the calendar with new data, dynamically

See [`fill` API](API/fill.md)

### How to change the domain/subDomain label text size/font

Take a look at the css

- `domain` label are controlled via `.ch-domain-text`
- `subDomain` text are controlled via `.ch-subdomain-text`

### Show only weekdays, instead of all days of the week

Use a [custom template](template.md). You can see an example [here](template.md#days-subdomain-with-all-days-on-the-same-row)

### Use a data source, behind authentication

[`data.source`](options/data.md#source) is expecting a string url. When your API is behind authentication,
or required additional request headers, you can use [`requestinit`](options/data.md#requestinit) to customize the http request,
to add addition headers, change the request type to `POST`, etc ...

### Right to Left (RTL) support

Set both [`domain.sort`](options/domain/index.md#sort) and [`subDomain.sort`](options/subDomain.md#sort) to `desc`

### Reproduce a calendar in the Github contribution style

See [Github showcase](showcase.md#github-profile-contribution-like)

### Does it work with React ?

Yes, see [this starter demo](https://github.com/wa0x6e/cal-heatmap-react-starter)

The homepage demo is also a React Component, see the source code directly on the [documention repo](https://github.com/wa0x6e/cal-heatmap-doc/blob/main/src/components/CalHeatmapComponent/index.tsx)

### Does it work with VueJS ?

Yes, see [this starter demo](https://github.com/wa0x6e/cal-heatmap-vue-starter)
