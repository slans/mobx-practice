import React from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import dateRangeLocaleRu from '../../../utils/date-range-locale-ru';

const DatesInput = ({ activeFilter, dateFrom, dateTo, handleCalendarChange }) => {
	// const isdateToNeed = activeFilter === 'week' || activeFilter === 'month';

	let dateRange = {
		from: dateFrom
			? {
					year: dateFrom.year(),
					month: dateFrom.month() + 1,
					day: dateFrom.date(),
			  }
			: null,
		to: dateTo
			? {
					year: dateTo.year(),
					month: dateTo.month() + 1,
					day: dateTo.date(),
			  }
			: null,
	};

	const formatInputValue = () => {
		const fromResult = dateFrom ? `${dateFrom.format('DD.MM.YYYY')}` : '',
			toResult = dateTo ? `${dateTo.format('DD.MM.YYYY')}` : '';

		if (!fromResult) return '';

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
					inputPlaceholder='Выберите дату'
					formatInputText={formatInputValue}
					shouldHighlightWeekends
					locale={dateRangeLocaleRu}
				/>
			</div>
		</div>
	);
};

export default DatesInput;
