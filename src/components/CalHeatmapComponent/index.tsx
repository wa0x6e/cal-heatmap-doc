import React, { type ReactNode } from 'react';

export default function CalHeatmapComponent(): JSX.Element {
	const intervals = {
		0: ['year', 'month', 4, 10, 20, 5, 2, 'MMMM YYYY'],
		1: ['year', 'week', 2, 5, 25, 0, 2, '[Week #]w YYYY'],
		2: ['year', 'day', 1, 10, 10, 1, 2, 'LL'],
		3: ['month', 'week', 10, 10, 10, 0, 0, '[week of] LL'],
		4: ['month', 'day', 10, 10, 10, 0, 2, 'LL'],
		5: ['day', 'hour', 12, 10, 10, 0, 2, 'LLL'],
		6: ['hour', 'minute', 9, 10, 10, 0, 2, 'LLLL'],
	};

	let intervalsIndex = 2;
	const options = {
		date: { start: new Date('2013-01-01') },
		data: {
			source: './fixtures/seattle-weather.csv',
			type: 'csv',
			x: 'date',
			y: 'temp_min',
			groupY: 'min',
		},
		scale: {
			color: { type: 'diverging', scheme: 'PRGn', domain: [-10, 20] },
		},
		itemSelector: '#cal-heatmap-index',
		domain: { type: intervals[intervalsIndex][0] },
		subDomain: { type: intervals[intervalsIndex][1] },
	};
	let cal = new window.CalHeatmap();

	cal.on('resize', function (nw) {
		window.d3
			.select('#cal-heatmap-index-toolbar')
			.attr('style', `width: ${nw}px; opacity: 1`);

		window.d3
			.select('#cal-heatmap-index-footer')
			.attr('style', `width: ${nw}px; opacity: 1`);
	});

	cal.paint(
		{
			data: {
				source: './fixtures/seattle-weather.csv',
				type: 'csv',
				x: 'date',
				y: 'temp_max',
				groupY: 'max',
			},
			date: { start: new Date('2012-01-01') },
			range: 1,
			scale: {
				color: { type: 'linear', scheme: 'PRGn', domain: [0, 40] },
			},
			domain: {
				type: 'year',
				label: { text: null },
			},
			subDomain: { type: 'day', radius: 2 },
			itemSelector: '#cal-heatmap-index',
		},
		[
			[
				window.Tooltip,
				{
					text: function (date, value, dayjsDate) {
						return (
							(value ? value + '°C' : 'No data') +
							' on ' +
							dayjsDate.format('LL')
						);
					},
				},
			],
		]
	);

	function paint(options) {
		options.domain = { type: intervals[intervalsIndex][0] };
		options.subDomain = {
			type: intervals[intervalsIndex][1],
			width: intervals[intervalsIndex][3],
			height: intervals[intervalsIndex][4],
			radius: intervals[intervalsIndex][5],
			gutter: intervals[intervalsIndex][6],
		};
		options.range = intervals[intervalsIndex][2];

		cal.paint(options, [
			[
				window.Tooltip,
				{
					text: function (date, value, dayjsDate) {
						return (
							(value ? value + '°C' : 'No data') +
							' on ' +
							dayjsDate.format(intervals[intervalsIndex][7])
						);
					},
				},
			],
		]);
	}

	function zoomIn() {
		if (intervalsIndex >= Object.keys(intervals).length - 1) {
			return false;
		}

		if (intervalsIndex === Object.keys(intervals).length - 2) {
			window.d3.select('#index-zoom-in').classed('disabled', true);
		}

		if (intervalsIndex >= 0) {
			window.d3.select('#index-zoom-out').classed('disabled', false);
		}

		intervalsIndex++;

		cal.destroy().then(() => {
			cal = new window.CalHeatmap();
			paint(options);

			cal.on('resize', function (nw) {
				window.d3
					.select('#cal-heatmap-index-toolbar')
					.attr('style', `width: ${nw}px; opacity: 1`);

				window.d3
					.select('#cal-heatmap-index-footer')
					.attr('style', `width: ${nw}px; opacity: 1`);
			});
		});
	}

	function zoomOut() {
		if (intervalsIndex <= 0) {
			return false;
		}

		if (intervalsIndex === 1) {
			window.d3.select('#index-zoom-out').classed('disabled', true);
		}

		if (intervalsIndex != Object.keys(intervals).length - 2) {
			window.d3.select('#index-zoom-in').classed('disabled', false);
		}

		intervalsIndex--;

		cal.destroy().then(() => {
			cal = new window.CalHeatmap();
			paint(options);

			cal.on('resize', function (nw) {
				window.d3
					.select('#cal-heatmap-index-toolbar')
					.attr('style', `width: ${nw}px; opacity: 1`);

				window.d3
					.select('#cal-heatmap-index-footer')
					.attr('style', `width: ${nw}px; opacity: 1`);
			});
		});
	}

	return (
		<div>
			<div id="cal-heatmap-index-toolbar">
				<div className="group-buttons">
					<a
						id="index-zoom-out"
						title="Zoom out"
						onClick={() => zoomOut()}
						className="button button--secondary button--secondary button--sm padding-vert--xs padding-horiz--sm"
					>
						-
					</a>
					<a
						id="index-zoom-in"
						title="Zoom in"
						onClick={() => zoomIn()}
						className="button button--secondary button--secondary button--sm padding-vert--xs padding-horiz--sm"
					>
						+
					</a>
				</div>
				<div>
					<h4>Seattle mininum temperature (°C)</h4>
				</div>
				<div className="group-buttons">
					<a
						title="Previous"
						id="index-previous"
						onClick={() => cal.previous()}
						className="button button--secondary button--secondary button--sm padding-vert--xs padding-horiz--sm"
					>
						‹
					</a>
					<a
						title="Next"
						id="index-next"
						onClick={() => cal.next()}
						className="button button--secondary button--secondary button--sm padding-vert--xs padding-horiz--sm"
					>
						›
					</a>
				</div>
			</div>
			<div id="cal-heatmap-index"></div>
		</div>
	);
}
