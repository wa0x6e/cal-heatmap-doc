---
title: Showcase
sidebar_position: 30
---

import BrowserWindow from '@site/src/components/BrowserWindow';

Following are some examples of what you can accomplish with cal-heatmap, using real world data.

:::caution
Page and examples may take longer to load, and animation may be jaggered
due to high number of calendars on this page.
:::

:::tip
All examples are accompanied by a live editable code.

Edit the code, and play with the options to see the results live.
:::

## Seattle daily maximum temperature

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint(
  {
    data: {
      source: '../fixtures/seattle-weather.csv',
      type: 'csv',
      x: 'date',
      y: 'temp_max',
      groupY: 'max',
    },
    date: { start: new Date('2012-01-01') },
    range: 1,
    scale: { color: { type: 'linear', scheme: 'PRGn', domain: [0, 40] } },
    domain: {
      type: 'year',
      label: { text: null },
      subLabel: {
        width: 30,
        textAlign: 'start',
        text: () => dayjs.weekdaysShort().map((d, i) => (i % 2 == 0 ? '' : d)),
      },
    },
    subDomain: { type: 'day', radius: 2 },
    itemSelector: '#ex-year',
  },
  [
    [
      Tooltip,
      {
        text: function (date, value, dayjsDate) {
          return (
            (value ? value + '°C' : 'No data') + ' on ' + dayjsDate.format('LL')
          );
        },
      },
    ],
    [
      Legend,
      {
        tickSize: 0,
        width: 150,
        itemSelector: '#ex-year-legend',
        label: 'Seattle max temperature °C',
      },
    ],
  ]
);

render(
  <div>
    <div id="ex-year" className="margin-bottom--md"></div>
    <a
      className="button button--sm button--secondary margin-top--sm"
      href="#"
      onClick={e => {
        e.preventDefault();
        cal.previous();
      }}
    >
      ← Previous
    </a>
    <a
      className="button button--sm button--secondary margin-top--sm margin-left--xs"
      href="#"
      onClick={e => {
        e.preventDefault();
        cal.next();
      }}
    >
      Next →
    </a>
    <div id="ex-year-legend" style={{ float: 'right' }}></div>
  </div>
);
```

</BrowserWindow>

## Seattle daily wind

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint(
  {
    data: {
      source: '../fixtures/seattle-weather.csv',
      type: 'csv',
      x: 'date',
      y: 'wind',
      groupY: 'max',
    },
    date: { start: new Date('2012-01-01') },
    range: 8,
    scale: {
      color: {
        type: 'quantize',
        scheme: 'Oranges',
        domain: [0, 1, 2, 3, 4, 5, 6, 7],
      },
    },
    domain: {
      type: 'month',
    },
    subDomain: { type: 'day', radius: 2 },
    itemSelector: '#ex-wind',
  },
  [
    [
      Tooltip,
      {
        text: function (date, value, dayjsDate) {
          return (
            (value ? value + 'km/h' : 'No data') +
            ' on ' +
            dayjsDate.format('LL')
          );
        },
      },
    ],
    [
      Legend,
      {
        tickSize: 0,
        width: 100,
        itemSelector: '#ex-wind-legend',
        label: 'Seattle wind (km/h)',
      },
    ],
  ]
);

render(
  <div style={{ display: 'inline-block' }}>
    <div id="ex-wind"></div>
    <a
      className="button button--sm button--secondary margin-top--sm"
      href="#"
      onClick={e => {
        e.preventDefault();
        cal.previous();
      }}
    >
      ← Previous
    </a>
    <a
      className="button button--sm button--secondary margin-left--xs margin-top--sm"
      href="#"
      onClick={e => {
        e.preventDefault();
        cal.next();
      }}
    >
      Next →
    </a>
    <div id="ex-wind-legend" style={{ float: 'right' }}></div>
  </div>
);
```

</BrowserWindow>

## Seattle daily minimum temperature

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint(
  {
    data: {
      source: '../fixtures/seattle-weather.csv',
      type: 'csv',
      x: 'date',
      y: 'temp_min',
      groupY: 'min',
    },
    verticalOrientation: true,
    range: 5,
    itemSelector: '#ex-1',
    date: { start: new Date('2012-01-01') },
    scale: { color: { type: 'diverging', scheme: 'PRGn', domain: [-10, 15] } },
    domain: {
      type: 'month',
      padding: [10, 10, 10, 10],
      label: { position: 'top' },
    },
    subDomain: { type: 'x_day', radius: 2, width: 15, height: 15, label: 'D' },
  },
  [
    [
      Tooltip,
      {
        text: function (date, value, dayjsDate) {
          return (
            (value ? value + '°C' : 'No data') + ' on ' + dayjsDate.format('LL')
          );
        },
      },
    ],
  ]
);
render(
  <div>
    <div id="ex-1" className="margin-bottom--md"></div>
    <a
      className="button button--sm button--secondary"
      href="#"
      onClick={e => {
        e.preventDefault();
        cal.previous();
      }}
    >
      ← Previous
    </a>
    <a
      className="button button--sm button--secondary margin-left--xs"
      href="#"
      onClick={e => {
        e.preventDefault();
        cal.next();
      }}
    >
      Next →
    </a>
  </div>
);
```

</BrowserWindow>

## Seattle daily average precipitation

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
let dayRowTemplate = (dateHelper, { domain }) => ({
  name: 'day_row',
  level: 31,
  rowsCount() {
    return 1;
  },
  columnsCount(d) {
    return domain.dynamicDimension
      ? dateHelper.date(d).endOf('month').date()
      : 31;
  },
  mapping: (startDate, endDate, defaultValues) => {
    return dateHelper
      .intervals('day', startDate, dateHelper.date(endDate))
      .map((d, index) => ({
        t: d,
        x: index,
        y: 0,
        ...defaultValues,
      }));
  },

  format: {
    date: 'Do',
    legend: 'Do',
  },
  extractUnit(d) {
    return dateHelper.date(d).startOf('day').valueOf();
  },
});

cal.addTemplates(dayRowTemplate);

cal.paint(
  {
    range: 6,
    date: {
      start: new Date('2012-01-01'),
      min: new Date('2012-01-01'),
      max: new Date('2015-12-01'),
    },
    data: {
      source: '../fixtures/seattle-weather.csv',
      type: 'csv',
      x: 'date',
      y: 'precipitation',
    },
    domain: { type: 'month', gutter: 5, label: { textAlign: 'start' } },
    subDomain: {
      type: 'day_row',
      width: 3,
      height: 35,
      gutter: 0,
    },
    scale: {
      opacity: {
        baseColor: '#ee79bd',
        domain: [0, 35],
      },
    },
    itemSelector: '#ex-2',
  },
  [
    [
      Tooltip,
      {
        text: function (date, value, dayjsDate) {
          return (
            (value ? value + 'mm' : 'No data') + ' on ' + dayjsDate.format('LL')
          );
        },
      },
    ],
  ]
);

render(
  <div>
    <div id="ex-2"></div>
    <a
      className="button button--sm button--secondary"
      href="#"
      onClick={e => {
        e.preventDefault();
        cal.previous();
      }}
    >
      ← Previous
    </a>
    <a
      className="button button--sm button--secondary margin-left--xs"
      href="#"
      onClick={e => {
        e.preventDefault();
        cal.next();
      }}
    >
      Next →
    </a>
  </div>
);
```

  </BrowserWindow>

## Dow Jones Industrial Index Trading volume

  <BrowserWindow>

```jsx live noInline
const weekDaysTemplate = DateHelper => ({
  name: 'weekday',
  parent: 'day',
  rowsCount: () => 5,
  columnsCount: () => 54,
  mapping: (startTimestamp, endTimestamp) => {
    let weekNumber = 0;
    let x = -1;

    return DateHelper.intervals(
      'day',
      startTimestamp,
      DateHelper.date(endTimestamp)
    )
      .map(ts => {
        const date = DateHelper.date(ts);

        if (weekNumber !== date.week()) {
          weekNumber = date.week();
          x += 1;
        }

        if (date.format('d') === '0' || date.format('d') === '6') {
          return null;
        }

        return {
          t: ts,
          x,
          y: date.format('d') - 1,
        };
      })
      .filter(n => n !== null);
  },
});
const cal = new CalHeatmap();
cal.addTemplates(weekDaysTemplate);
cal.paint(
  {
    range: 5,
    date: {
      start: new Date('2007-01-01'),
      min: new Date('2000-05-01'),
      max: new Date('2020-05-01'),
      timezone: 'utc',
    },
    data: {
      source: '../fixtures/DJIA.csv',
      type: 'csv',
      x: 'Date',
      y: 'Volume',
    },
    domain: {
      type: 'year',
      label: {
        position: 'left',
        textAlign: 'end',
        width: 50,
        offset: { x: -10, y: 5 },
      },
    },
    legend: {
      show: true,
      label: 'Daily Volume',
      width: 150,
      marginLeft: 10,
      marginRight: 10,
    },
    verticalOrientation: true,
    subDomain: {
      type: 'weekday',
    },
    scale: {
      color: {
        type: 'quantize',
        domain: [50000000, 500000000],
        scheme: 'YlOrRd',
      },
    },
    itemSelector: '#ex-stock',
  },
  [
    [LegendLite, { itemSelector: '#ex-stock-legend', includeBlank: true }],
    [
      Tooltip,
      {
        text: function (date, value, dayjsDate) {
          return (
            (value ? d3.format(',')(value) : 'No volume') +
            ' on ' +
            dayjsDate.format('dddd LL')
          );
        },
      },
    ],
  ]
);

render(
  <div>
    <div id="ex-stock" className="margin-bottom--md"></div>
    <a
      className="button button--sm button--secondary"
      href="#"
      onClick={e => {
        e.preventDefault();
        cal.previous();
      }}
    >
      ← Previous
    </a>
    <a
      className="button button--sm button--secondary margin-left--xs"
      href="#"
      onClick={e => {
        e.preventDefault();
        cal.next();
      }}
    >
      Next →
    </a>
    <div style={{ float: 'right', fontSize: 11, marginTop: '5px' }}>
      Calm
      <div
        id="ex-stock-legend"
        style={{ display: 'inline-block', margin: '0 8px' }}
      ></div>
      Busy
    </div>
  </div>
);
```

</BrowserWindow>

## Github profile contribution-like

   <BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint(
  {
    data: {
      source: '../fixtures/seattle-weather.csv',
      type: 'csv',
      x: 'date',
      y: d => parseInt(d['temp_max']),
      groupY: 'max',
    },
    date: { start: new Date('2012-01-01') },
    range: 12,
    scale: {
      color: {
        type: 'threshold',
        range: ['#14432a', '#166b34', '#37a446', '#4dd05a'],
        domain: [10, 20, 30],
      },
    },
    domain: {
      type: 'month',
      gutter: 4,
      label: { text: 'MMM', textAlign: 'start', position: 'top' },
      subLabel: {
        width: 30,
        textAlign: 'start',
        text: () => dayjs.weekdaysShort().map((d, i) => (i % 2 == 0 ? '' : d)),
      },
    },
    subDomain: { type: 'ghDay', radius: 2, width: 11, height: 11, gutter: 4 },
    itemSelector: '#ex-ghDay',
  },
  [
    [
      Tooltip,
      {
        text: function (date, value, dayjsDate) {
          return (
            (value ? value : 'No') +
            ' contributions on ' +
            dayjsDate.format('dddd, MMMM D, YYYY')
          );
        },
      },
    ],
    [
      LegendLite,
      {
        includeBlank: true,
        itemSelector: '#ex-ghDay-legend',
        radius: 2,
        width: 11,
        height: 11,
        gutter: 4,
      },
    ],
  ]
);

render(
  <div
    style={{
      background: '#22272d',
      color: '#adbac7',
      borderRadius: '3px',
      padding: '1rem',
      overflow: 'hidden',
    }}
  >
    <div id="ex-ghDay" className="margin-bottom--md"></div>
    <a
      className="button button--sm button--secondary margin-top--sm"
      href="#"
      onClick={e => {
        e.preventDefault();
        cal.previous();
      }}
    >
      ← Previous
    </a>
    <a
      className="button button--sm button--secondary margin-top--sm margin-left--xs"
      href="#"
      onClick={e => {
        e.preventDefault();
        cal.next();
      }}
    >
      Next →
    </a>
    <div style={{ float: 'right', fontSize: 12 }}>
      <span style={{ color: '#768390' }}>Less</span>
      <div
        id="ex-ghDay-legend"
        style={{ display: 'inline-block', margin: '0 4px' }}
      ></div>
      <span style={{ color: '#768390', fontSize: 12 }}>More</span>
    </div>
  </div>
);
```

   </BrowserWindow>
