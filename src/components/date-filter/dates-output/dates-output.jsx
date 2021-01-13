import React from 'react';
// import NumberFormat from 'react-number-format';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

const DatesOutput = ({ activeFilter, dateFrom, dateTo, handleCalendarChange }) => {
	// const isdateToNeed = activeFilter === 'week' || activeFilter === 'month';

	console.log('dateFrom.month()', dateFrom.month());

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
			: dateTo,
	};

	const formatInputValue = () => {
		const { from, to } = dateRange;
		const toResult = to ? `${'-'} ${to.day}.${to.month}.${to.year}` : '';
		return `${from.day}.${from.month}.${from.year} ${toResult}`;
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

				{/* <span>{dateFrom.format('DD.MM.YYYY')}</span>
				{isdateToNeed && <span className='ml-3'>{dateTo.format('DD.MM.YYYY')}</span>} */}
				{/* <NumberFormat
					format='##.##.####'
					value={dateFrom.format('DDMMYYYY')}
				/> */}
				{/* <input
					className='date-input'
					data-range_label='dateFrom'
					type='text'
					value={dateFrom.format('DD.MM.YYYY')}
					onChange={handleInputChange}
				/> */}
				{/* {isdateToNeed && (
					<input
						className='date-input ml-2'
						data-range_label='dateTo'
						type='text'
						value={dateTo.format('DD.MM.YYYY')}
						onChange={handleInputChange}
					/>
				)} */}
			</div>
		</div>
	);
};

export default DatesOutput;
