import React, { Component } from 'react';
import Filters from './filters/filters';
import dayjs from 'dayjs';
import DatesOutput from './dates-output/dates-output';
import Slider from './slider/slider';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/ru';
dayjs.locale('ru');

dayjs.extend(customParseFormat);

class DateFilter extends Component {
	state = {
		activeFilter: 'today',
		dateFrom: dayjs(),
		dateTo: dayjs(),
	};

	handleChooseFilter = (e) => {
		if (e.target.classList.contains('active')) {
			return false;
		}
		const { label } = e.target.dataset;
		const dateRange = this.getDateRangeOnFilterChoice(label);
		this.setState({
			activeFilter: label,
			...dateRange,
		});
	};

	handleInputChange = (values) => {
		const { value } = values;
		console.log('value', value);
		this.setState({
			dateFrom: dayjs(value, 'DDMMYYYY'),
		});
	};

	// handleInputChange = (e) => {
	// 	const { range_label } = e.target.dataset;
	// 	this.setState({
	// 		[range_label]: dayjs(e.target.value, 'DD.MM.YYYY'),
	// 	});
	// };

	handleSliderDateChange = (e) => {
		const { activeFilter, dateFrom, dateTo } = this.state;
		const isPrevClicked = e.target.classList.contains('prev');

		if (activeFilter === 'week') {
			isPrevClicked
				? this.setState({
						dateFrom: dateFrom.subtract(1, 'week'),
						dateTo: dateTo.subtract(1, 'week'),
				  })
				: this.setState({
						dateFrom: dateFrom.add(1, 'week'),
						dateTo: dateTo.add(1, 'week'),
				  });
		} else if (activeFilter === 'month') {
			isPrevClicked
				? this.setState({
						dateFrom: dateFrom.subtract(1, 'month'),
						dateTo: dateTo.subtract(1, 'month'),
				  })
				: this.setState({
						dateFrom: dateFrom.add(1, 'month'),
						dateTo: dateTo.add(1, 'month'),
				  });
		}
	};

	getDateRangeOnFilterChoice(label) {
		switch (label) {
			case 'yesterday':
				const yesterday = dayjs().subtract(1, 'd');
				return {
					dateFrom: yesterday,
					dateTo: yesterday,
				};
			case 'today':
				const today = dayjs();
				return {
					dateFrom: today,
					dateTo: today,
				};
			case 'week':
				return {
					dateFrom: dayjs().startOf('w'),
					dateTo: dayjs().endOf('w'),
				};
			case 'month':
				return {
					dateFrom: dayjs().startOf('M'),
					dateTo: dayjs().endOf('M'),
				};
			default:
		}
	}

	render() {
		const { activeFilter, dateFrom, dateTo } = this.state;
		return (
			<>
				<Filters activeFilter={activeFilter} handleChooseFilter={this.handleChooseFilter} />
				<Slider
					activeFilter={activeFilter}
					dateFrom={dateFrom}
					dateTo={dateTo}
					handleSliderDateChange={this.handleSliderDateChange}
				/>
				<DatesOutput
					activeFilter={activeFilter}
					dateFrom={dateFrom}
					dateTo={dateTo}
					handleInputChange={this.handleInputChange}
				/>
			</>
		);
	}
}

export default DateFilter;
