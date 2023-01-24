---
title: domain
sidebar_position: 3
---

Specify all options related to the domain configuration

```js
type DomainOptions: {
  type: string;
  gutter: number;
  padding: [number, number, number, number];
  dynamicDimension: boolean;
  label: LabelOptions;
  subLabel: SubLabelOptions;
  sort: 'asc' | 'desc';
}
```

<hr />

## `type`

Domain's type, representing a time unit

```js
type: string;
```

Default: `hour`

### Available domains type

- `year`
- `month`
- `week`
- `day`
- `hour`

See [Examples](/examples)

## `gutter`

Space between each domain, in pixel

```js
gutter: number;
```

Default: `4`

## `padding`

Padding inside each domain, in pixel

```js
padding: [number, number, number, number];
```

Expect an array of 4 numbers, in the same order as CSS padding property (top, right, bottom, left)

Default: `[0, 0, 0, 0]`

## `dynamicDimension`

Whether the domain's should be resized to fit its content.

```js
dynamicDimension: boolean;
```

The domain dimension depends on the chosen subDomain type,
which each have a different number of columns and rows count.

Some of the subDomain type, such as `day`, do not have a fixed number of items,
as there can be 28, 29, 30 or 31 days in a `month`.

This leads to different domains having different sizes, and
may cause the calendar total dimension to change on navigation.

When disabled, the domains will all take the same maximum size
as defined by the subDomain template,
and some blank space may appear between domains.

Usually, only either the width or the height will by dynamic.

Default: `true`

## `label`

Specify all options related to the domain’s label

```js
label: LabelOptions;
```

See the [Domain Label section](/options/domain/label.html)

## `subLabel`

Specify all options related to the domain’s subLabel

```js
subLabel: SubLabelOptions;
```

See the [Domain Label section](/options/domain/label.html)

## `sort`

Sort order of the domains.

```js
sort: 'asc' | 'desc';
```

Default: `asc`

:::info Option scope
This only affect the domain's order, not the subDomain.
:::
