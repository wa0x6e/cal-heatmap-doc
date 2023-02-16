---
title: jumpTo()
sidebar_position: 3
---

<p class="subhead">Scroll the calendar to the given date.</p>

```
cal.jumpTo(date: Date, reset: boolean): Promise<unknown>
```

#### Arguments:

- `date`: a [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, representing the date to jump to.
- `reset`: whether if the given date should be at the start of the calendar. Default `false`

#### Return:

- A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), that will resolve once all the new domains have loaded, and filled with data.
