import React from 'react';

export default function CalHeatmap({ options }) {
  const cal = new window.CalHeatmap();
  cal.paint(options);
  const itemSelector = options.itemSelector || 'cal-heatmap';

  return <div id={itemSelector}></div>;
}
