import React from 'react';
// import NumberFormat from 'react-number-format';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

function DatesOutput({ activeFilter, dateFrom, dateTo, handleInputChange }) {
	const isdateToNeed = activeFilter === 'week' || activeFilter === 'month';
	const from = {
		year: dateFrom.year(),
		month: dateFrom.month() + 1,
		day: dateFrom.date(),
	};
	const to = {
		year: dateTo.year(),
		month: dateTo.month() + 1,
		day: dateTo.date(),
	};

	const handleChange = (info) => {
		console.log('info', info);
	};

	return (
		<div className='dates-output mt-2'>
			<div className='dates-range d-flex justify-content-center'>
				<DatePicker
					value={{ from, to }}
					onChange={handleChange}
					inputPlaceholder='Select a day range'
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
}

export default DatesOutput;
