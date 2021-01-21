import React, { Component } from 'react';
import Filters from './filters/filters';
import dayjs from 'dayjs';
import DatesInput from './dates-input/dates-input';
import Slider from './slider/dates-slider';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/ru';
dayjs.locale('ru');
dayjs.extend(customParseFormat);

class DateFilter extends Component {
	state = {
		activeFilter: '',
		dateFrom: null,
		dateTo: null,
		isDatesInputVisible: true,
	};

	handleToggleDatesInput = () => {
		this.setState(({ isDatesInputVisible }) => ({
			isDatesInputVisible: !isDatesInputVisible,
		}));
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
			isDatesInputVisible: false,
		});
	};

	handleCalendarChange = (values) => {
		const { from, to } = values;
		const dateFrom = this.createDayjsForPicker(from),
			dateTo = to ? this.createDayjsForPicker(to) : null;

		this.setState({
			activeFilter: 'other',
			dateFrom,
			dateTo,
		});
	};

	createDayjsForPicker(date) {
		return dayjs(`${date.day}-${date.month}-${date.year}`, 'D-M-YYYY');
	}

	handleSliderDateChange = (e) => {
		const { activeFilter, dateFrom, dateTo } = this.state;
		const isPrevClicked = e.target.classList.contains('prev');

		const subtractPeriod = (period) => {
			this.setState({
				dateFrom: dateFrom.subtract(1, period).startOf(period),
				dateTo: dateTo.subtract(1, period).endOf(period),
			});
		};

		const addPeriod = (period) => {
			this.setState({
				dateFrom: dateFrom.add(1, period).startOf(period),
				dateTo: dateTo.add(1, period).endOf(period),
			});
		};

		switch (activeFilter) {
			case 'yesterday':
				isPrevClicked ? subtractPeriod('d') : addPeriod('d');
				return;
			case 'today':
				isPrevClicked ? subtractPeriod('d') : addPeriod('d');
				return;
			case 'week':
				isPrevClicked ? subtractPeriod('w') : addPeriod('w');
				return;
			case 'month':
				isPrevClicked ? subtractPeriod('M') : addPeriod('M');
				return;

			default:
				break;
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
		const { activeFilter, dateFrom, dateTo, isDatesInputVisible } = this.state;
		return (
			<>
				<Filters activeFilter={activeFilter} handleChooseFilter={this.handleChooseFilter} />
				{!isDatesInputVisible && (
					<Slider
						activeFilter={activeFilter}
						dateFrom={dateFrom}
						dateTo={dateTo}
						handleSliderDateChange={this.handleSliderDateChange}
						handleToggleDatesInput={this.handleToggleDatesInput}
					/>
				)}
				{isDatesInputVisible && (
					<DatesInput
						activeFilter={activeFilter}
						dateFrom={dateFrom}
						dateTo={dateTo}
						handleCalendarChange={this.handleCalendarChange}
					/>
				)}
			</>
		);
	}
}

export default DateFilter;
