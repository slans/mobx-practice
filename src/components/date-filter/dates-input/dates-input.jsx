import React from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

const DatesInput = ({ activeFilter, dateFrom, dateTo, handleCalendarChange }) => {
	// const isdateToNeed = activeFilter === 'week' || activeFilter === 'month';

	let dateRange = {
		from: {
			year: dateFrom.year(),
			month: dateFrom.month() + 1,
			day: dateFrom.date(),
		},
		to: dateTo
			? {
					year: dateTo.year(),
					month: dateTo.month() + 1,
					day: dateTo.date(),
			  }
			: null,
	};

	const formatInputValue = () => {
		// const { from, to } = dateRange;
		const fromResult = `${dateFrom.date()}.${dateFrom.month() + 1}.${dateFrom.year()}`,
			toResult = dateTo ? `${dateTo.date()}.${dateTo.month() + 1}.${dateTo.year()}` : '';

		if (dateFrom.isSame(dateTo, 'D') || !dateTo) {
			return fromResult;
		} else {
			return `${fromResult} - ${toResult}`;
		}
	};

	return (
		<div className='dates-output mt-2'>
			<div className='dates-range d-flex justify-content-center'>
				<DatePicker
					value={dateRange}
					onChange={handleCalendarChange}
					inputPlaceholder='Select a day range'
					formatInputText={formatInputValue}
					shouldHighlightWeekends
				/>
			</div>
		</div>
	);
};

export default DatesInput;
