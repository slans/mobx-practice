import '../index.scss';
import React from 'react';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
dayjs.extend(weekOfYear);

const DatesSlider = ({ activeFilter, dateFrom, dateTo, handleSliderDateChange, handleToggleDatesInput }) => {
	// const isWeekOrMonth = activeFilter === 'week' || activeFilter === 'month';

	function isDateToday() {
		return dateFrom.isSame(dayjs(), 'd');
	}

	function isDateYesterday() {
		return dateFrom.isSame(dayjs().subtract(1, 'd'), 'd');
	}

	const renderDateInfo = () => {
		let result = '';
		switch (activeFilter) {
			case 'yesterday':
				result = `${isDateYesterday() ? 'вчера,' : ''} ${dateFrom.date()} ${dateTo.format('MMMM')}`;
				break;
			case 'today':
				result = `${isDateToday() ? 'сегодня,' : ''} ${dateFrom.date()} ${dateTo.format('MMMM')}`;
				break;
			case 'week':
				result = `неделя, ${dateFrom.date()}-${dateTo.date()} ${dateTo.format('MMMM')}`;
				break;
			case 'month':
				result = `${dateFrom.format('MMMM')}, ${dateFrom.year()}`;
				break;
			default:
				break;
		}

		return result;
	};

	return (
		<div className='slider d-flex justify-content-center align-items-center mt-3'>
			<span className='slider-btn prev mr-3' onClick={handleSliderDateChange}>
				<BiChevronLeft size='24' />
			</span>
			<span className='date-info' onClick={handleToggleDatesInput}>
				{renderDateInfo()}
			</span>
			<span className='slider-btn next ml-3' onClick={handleSliderDateChange}>
				<BiChevronRight size='24' />
			</span>
		</div>
	);
};

export default DatesSlider;
