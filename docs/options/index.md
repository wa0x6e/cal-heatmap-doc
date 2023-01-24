---
title: Options
sidebar_position: 3
id: options
---

Customize the UI and content of the calendar

The calendar can be customized by passing an `Options` object to the [`paint()`](/API/paint.md) method on the calendar instance.

```js title="Usage"
const cal = new CalHeatmap();
// highlight-next-line
cal.paint(options?: Options): Promise<unknown>;
```

```js title="Type Signature"
type Options = {
  itemSelector: Element | string,
  range: number,
  domain: DomainOptions,
  subDomain: SubDomainOptions,
  verticalOrientation: boolean,
  date: DateOptions,
  data: DataOptions,
  label: LabelOptions,
  animationDuration: number,
  tooltip: TooltipOptions,
  legend: LegendOptions,
  scale: ScaleOptions,
};
```

import DocCardList from '@theme/DocCardList';

<DocCardList />
