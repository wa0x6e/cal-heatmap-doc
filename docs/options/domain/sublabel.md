---
title: subLabel
---

# subLabel

Specify all options related to the domain's subLabel configuration

```js
type SubLabelOptions = {
  text: () => string[],
  radius?: number,
  width?: number,
  height?: number,
  gutter?: number,
  textAlign?: 'start' | 'middle' | 'end',
};
```

:::warning
SubLabel is still a work in progress, and API may changes in the future.
It its current form, this option is only used to show weekdays label
when the subDomain is set to `day`.
Future updates will allow more customization, and broaden the scope of application.
:::

<hr/>

## `text`

A function which return an array of labels.

```js
text: () => string[],
```

The number of returned result is up to you, and generally
depends on the subDomain's type.

## `radius`

Border radius of the subLabel's background, in pixel

```js
radius?: number,
```

Default: `0`

:::tip
By default, the background is transparent.  
Use the CSS class `.sublabel-rect` to style it.
:::

## `width`

Width of the subLabel, in pixel

```js
width?: number,
```

Default: [subDomain's width](/options/subDomain.md#width)

## `height`

Height of the subLabel, in pixel

```js
height?: number,
```

Default: [subDomains' height](/options/subDomain.md#height)

:::caution
Total height can no be greater that the domain height
:::

## `gutter`

Space between each subLabel, on pixel

```js
gutter?: number,
```

Default: [subDomains' gutter](/options/subDomain.md#gutter)

## `textAlign`

Horizontal alignment of the subLabel

```js
textAlign?: 'start' | 'middle' | 'end',
```

Default: `middle`
