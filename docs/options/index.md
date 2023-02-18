---
title: Options
sidebar_position: 3
id: options
---

import BrowserWindow from '@site/src/components/BrowserWindow';

<p className="subhead">Customize the UI and content of the calendar</p>

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
  scale: ScaleOptions,
  theme: 'light' | 'dark',
};
```

import DocCardList from '@theme/DocCardList';

<DocCardList />

:::tip
Throughout the documentation, you will see block like the following

<BrowserWindow>

```jsx live noInline
const cal = new CalHeatmap();
cal.paint({ range: 1 });

render(<div id="cal-heatmap"></div>);
```

</BrowserWindow>

These are _live editor_:
you can edit the code inline, and see the result in live.

Use them to test settings, and see what happen.
:::
