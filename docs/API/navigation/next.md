---
title: next()
sidebar_position: 1
---

<p className="subhead">Shift the calendar by the given number of domains forward (in the future).</p>

```
cal.next(steps?: number): Promise<unknown>
```

#### Arguments:

- `steps`: the number of domains to shift, default `1`

#### Return:

- A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), that will resolve once all the new domains have loaded, and filled with data.
