import React, { type ReactNode, useState } from 'react';

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

	const schemes = {
		sequential: [
			'blues',
			'greens',
			'greys',
			'oranges',
			'purples',
			'reds',
			'bugn',
			'bupu',
			'gnbu',
			'orrd',
			'pubu',
			'pubugn',
			'purd',
			'rdpu',
			'ylgn',
			'ylgnbu',
			'ylorbr',
			'ylorrd',
			'cividis',
			'inferno',
			'magma',
			'plasma',
			'viridis',
			'cubehelix',
			'turbo',
			'warm',
			'cool',
		],
		diverging: [
			'brbg',
			'prgn',
			'piyg',
			'puor',
			'rdbu',
			'rdgy',
			'rdylbu',
			'rdylgn',
			'spectral',
			'burd',
			'buylrd',
		],
		cyclical: ['rainbow', 'sinebow'],
	};

	const dir = { asc: 'Left-to-Right', desc: 'Right-to-left' };

	const [selectedOption, setSelectedOption] = useState('Diverging');
	const [getCal, setCal] = useState(null);
	const [getScheme, setScheme] = useState('prgn');
	const [getDir, setDir] = useState('asc');
	const [getIntervalIndex, setIntervalIndex] = useState(2);

	const scales = {
		Diverging: {
			color: { type: 'diverging', scheme: getScheme, domain: [-10, 20] },
		},
		Threshold: {
			color: {
				type: 'threshold',
				scheme: getScheme,
				domain: [-10, -5, 0, 5, 10, 15, 20],
			},
		},
		Linear: {
			color: { type: 'linear', scheme: getScheme, domain: [-10, 20] },
		},
		Quantile: {
			color: { type: 'quantile', scheme: getScheme, domain: [-10, 20] },
		},
		Quantize: {
			color: { type: 'quantize', scheme: getScheme, domain: [-10, 20] },
		},
	};
	const options = {
		date: { start: new Date('2013-01-01') },
		data: {
			source: './fixtures/seattle-weather.csv',
			type: 'csv',
			x: 'date',
			y: 'temp_min',
			groupY: 'min',
		},
		scale: scales[selectedOption],
		itemSelector: '#cal-heatmap-index',
		domain: {
			type: intervals[getIntervalIndex][0],
			sort: getDir,
		},
		subDomain: {
			type: intervals[getIntervalIndex][1],
			radius: 2,
			sort: getDir,
		},
	};

	function paint(options) {
		options.domain.type = intervals[getIntervalIndex][0];
		options.domain.sort = getDir;

		options.subDomain.type = intervals[getIntervalIndex][1];
		options.subDomain.width = intervals[getIntervalIndex][3];
		options.subDomain.height = intervals[getIntervalIndex][4];
		options.subDomain.radius = intervals[getIntervalIndex][5];
		options.subDomain.gutter = intervals[getIntervalIndex][6];
		options.subDomain.sort = getDir;
		options.range = intervals[getIntervalIndex][2];

		getCal.paint(options, [
			[
				window.Tooltip,
				{
					text: function (date, value, dayjsDate) {
						return (
							(value ? value + '°C' : 'No data') +
							' on ' +
							dayjsDate.format(intervals[getIntervalIndex][7])
						);
					},
				},
			],
			[
				window.Legend,
				{
					itemSelector: '#cal-heatmap-index-legend',
					label: 'Seattle min. temp. (°C)',
				},
			],
		]);
	}

	function zoomIn() {
		if (getIntervalIndex >= Object.keys(intervals).length - 1) {
			return false;
		}

		if (getIntervalIndex === Object.keys(intervals).length - 2) {
			window.d3.select('#index-zoom-in').classed('disabled', true);
		}

		if (getIntervalIndex >= 0) {
			window.d3.select('#index-zoom-out').classed('disabled', false);
		}

		getCal.destroy().then(() => {
			setIntervalIndex(getIntervalIndex + 1);
			initCalendar();
		});
	}

	function zoomOut() {
		if (getIntervalIndex <= 0) {
			return false;
		}

		if (getIntervalIndex === 1) {
			window.d3.select('#index-zoom-out').classed('disabled', true);
		}

		if (getIntervalIndex != Object.keys(intervals).length - 2) {
			window.d3.select('#index-zoom-in').classed('disabled', false);
		}

		getCal.destroy().then(() => {
			setIntervalIndex(getIntervalIndex - 1);
			initCalendar();
		});
	}

	function selectScale(e) {
		setSelectedOption(e.target.value);
	}

	function selectScheme(e) {
		setScheme(e.target.value);
	}

	function selectDir(e) {
		setDir(e.target.value);
	}

	function initCalendar() {
		const cal = new window.CalHeatmap();
		setCal(cal);

		cal.on('resize', function (nw) {
			window.d3
				.select('#cal-heatmap-index-toolbar')
				.attr('style', `width: ${nw}px; opacity: 1`);

			window.d3
				.select('#cal-heatmap-index-footer')
				.attr('style', `width: ${nw}px; opacity: 1`);
		});
	}

	if (getCal === null) {
		initCalendar();
	} else {
		paint(options);
	}

	return (
		<div>
			<div id="cal-heatmap-index-toolbar">
				<div className="group-buttons">
					<a
						id="index-zoom-out"
						title="Zoom out"
						onClick={() => zoomOut()}
						className="button button--secondary button--sm padding-vert--xs padding-horiz--sm"
					>
						-
					</a>
					<a
						id="index-zoom-in"
						title="Zoom in"
						onClick={() => zoomIn()}
						className="button button--secondary button--sm padding-vert--xs padding-horiz--sm"
					>
						+
					</a>
				</div>
				<div></div>
				<div className="margin-right--md">
					<form>
						<select
							onChange={selectDir}
							value={getDir}
							className="button button--secondary button--sm"
						>
							<optgroup label="Choose a text direction">
								{Object.keys(dir).map(d => (
									<option key={d} value={d}>
										{dir[d]}
									</option>
								))}
							</optgroup>
						</select>
					</form>
				</div>
				<div className="margin-right--md">
					<form>
						<select
							onChange={selectScale}
							value={selectedOption}
							className="button button--secondary button--sm"
						>
							<optgroup label="Choose a scale type">
								{Object.keys(scales).map(o => (
									<option key={o} value={o}>
										{o}
									</option>
								))}
							</optgroup>
						</select>
					</form>
				</div>
				<div className="margin-right--md">
					<form>
						<select
							onChange={selectScheme}
							value={getScheme}
							className="button button--secondary button--sm"
						>
							<option disabled>Choose a color scheme</option>
							{Object.keys(schemes).map(title => (
								<optgroup
									key={title}
									label={title.toUpperCase()}
								>
									{schemes[title].map(o => (
										<option key={o} value={o}>
											{o}
										</option>
									))}
								</optgroup>
							))}
						</select>
					</form>
				</div>
				<div className="group-buttons">
					<a
						title="Previous"
						id="index-previous"
						onClick={() => getCal.previous()}
						className="button button--secondary button--secondary button--sm padding-vert--xs padding-horiz--sm"
					>
						‹
					</a>
					<a
						title="Next"
						id="index-next"
						onClick={() => getCal.next()}
						className="button button--secondary button--secondary button--sm padding-vert--xs padding-horiz--sm"
					>
						›
					</a>
				</div>
			</div>
			<div id="cal-heatmap-index"></div>
			<div id="cal-heatmap-index-footer">
				<small>Data may not be available for all timeframes</small>
				<div
					style={{ float: 'right' }}
					id="cal-heatmap-index-legend"
				></div>
			</div>
		</div>
	);
}
