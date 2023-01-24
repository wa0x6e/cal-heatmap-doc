---
title: Plugins
sidebar_position: 7
---

## Introduction

Cal-heatmap can be customized further with the help of plugins.

A plugin is setup within a [`paint()`](/API/paint.md) call.

```js
interface PluginOptions {}
// IPluginContructor is the plugin's class
type PluginDefinition = [IPluginContructor, PluginOptions?];

const cal = new CalHeatmap();
cal.paint(options: Options, plugins?: PluginDefinition[] | PluginDefinition),
```

## Core plugins

Below are the built-in plugins shipped with Cal-Heatmap

import DocCardList from '@theme/DocCardList';

<DocCardList />

These plugins are not included in the main bundled, and have to be loaded
separatly, alongside their dependencies. See each plugin documentation for details.

## Usage

```js title="index.js"
const cal = new CalHeatmap();
cal.paint({}, [[Legend], [Tooltip, { text: t => `${new Date(t)}` }]]);
```

## Write your own plugins

:::info Docs coming soon

:::
