---
title: addTemplates()
sidebar_position: 10
---

<p className="subhead">Add a new subDomain template</p>

```js
addTemplates(Template[] | Template): void;
```

#### Arguments

- A single or an array of [`Template`](/template.md)

#### Return

- `void`

:::caution
This method have to be called before [`paint()`](/API/paint.md).
:::

:::tip What is a template?
See the [Templates](/template.md) section for more informations.
:::

<hr/>

## Usage

```js
// Create a template
// Content skipped, see the Templates section for full template example
const quarterTemplate = () => {};

const cal = new CalHeatmap();
// Add the template
// highlight-next-line
cal.addTemplates(quarterTemplate);

cal.paint({
  range: 2,
  domain: { type: 'year', gutter: 10, label: { textAlign: 'start' } },
  subDomain: {
    // Use the template
    // highlight-next-line
    type: 'quarter',
    width: 60,
    height: 15,
    label: '[Quarter] Q',
    radius: 3,
  },
});
```
