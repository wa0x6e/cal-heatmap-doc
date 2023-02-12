window.addEventListener(
	'load',
	function () {
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
					Tooltip,
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
			scale: { type: 'diverging', scheme: 'PRGn', domain: [-10, 20] },
			itemSelector: '#cal-heatmap-index',
			domain: { type: intervals[intervalsIndex][0] },
			subDomain: { type: intervals[intervalsIndex][1] },
		};
		const cal = new CalHeatmap();
		cal.on('resize', function (nw) {
			d3.select('#cal-heatmap-index-toolbar').attr(
				'style',
				`width: ${nw}px; opacity: 1`
			);

			d3.select('#cal-heatmap-index-footer').attr(
				'style',
				`width: ${nw}px; opacity: 1`
			);
		});

		paint(options);

		d3.select('#index-previous').on('click', function (e) {
			e.preventDefault();
			cal.previous();
		});

		d3.select('#index-next').on('click', function (e) {
			e.preventDefault();
			cal.next();
		});

		d3.select('#index-zoom-in').on('click', function (e) {
			e.preventDefault();
			if (intervalsIndex >= Object.keys(intervals).length - 1) {
				return false;
			}

			if (intervalsIndex === Object.keys(intervals).length - 2) {
				d3.select('#index-zoom-in').classed('disabled', true);
			}

			if (intervalsIndex >= 0) {
				d3.select('#index-zoom-out').classed('disabled', false);
			}

			intervalsIndex++;

			paint(options);
		});

		d3.select('#index-zoom-out').on('click', function (e) {
			e.preventDefault();
			if (intervalsIndex <= 0) {
				return false;
			}

			if (intervalsIndex === 1) {
				d3.select('#index-zoom-out').classed('disabled', true);
			}

			if (intervalsIndex != Object.keys(intervals).length - 2) {
				d3.select('#index-zoom-in').classed('disabled', false);
			}

			intervalsIndex--;

			paint(options);
		});
	},
	false
);
