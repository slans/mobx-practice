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
		dateStart: dayjs(),
		dateEnd: dayjs(),
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

	handleInputChange = (e) => {
		const { range_label } = e.target.dataset;
		this.setState({
			[range_label]: dayjs(e.target.value, 'DD.MM.YYYY'),
		});
	};

	handleSliderDateChange = (e) => {
		const { activeFilter, dateStart, dateEnd } = this.state;
		const isPrevClicked = e.target.classList.contains('prev');

		if (activeFilter === 'week') {
			isPrevClicked
				? this.setState({
						dateStart: dateStart.subtract(1, 'week'),
						dateEnd: dateEnd.subtract(1, 'week'),
				  })
				: this.setState({
						dateStart: dateStart.add(1, 'week'),
						dateEnd: dateEnd.add(1, 'week'),
				  });
		} else if (activeFilter === 'month') {
			isPrevClicked
				? this.setState({
						dateStart: dateStart.subtract(1, 'month'),
						dateEnd: dateEnd.subtract(1, 'month'),
				  })
				: this.setState({
						dateStart: dateStart.add(1, 'month'),
						dateEnd: dateEnd.add(1, 'month'),
				  });
		}
	};

	getDateRangeOnFilterChoice(label) {
		switch (label) {
			case 'yesterday':
				const yesterday = dayjs().subtract(1, 'd');
				return {
					dateStart: yesterday,
					dateEnd: yesterday,
				};
			case 'today':
				const today = dayjs();
				return {
					dateStart: today,
					dateEnd: today,
				};
			case 'week':
				return {
					dateStart: dayjs().startOf('w'),
					dateEnd: dayjs(),
				};
			case 'month':
				return {
					dateStart: dayjs().startOf('M'),
					dateEnd: dayjs().endOf('M'),
				};
			default:
		}
	}

	render() {
		const { activeFilter, dateStart, dateEnd } = this.state;
		return (
			<>
				<Filters activeFilter={activeFilter} handleChooseFilter={this.handleChooseFilter} />
				<Slider
					activeFilter={activeFilter}
					dateStart={dateStart}
					handleSliderDateChange={this.handleSliderDateChange}
				/>
				<DatesOutput
					activeFilter={activeFilter}
					dateStart={dateStart}
					dateEnd={dateEnd}
					handleInputChange={this.handleInputChange}
				/>
			</>
		);
	}
}

export default DateFilter;
