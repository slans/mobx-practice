import './index.scss';
import React from 'react';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
dayjs.extend(weekOfYear);

const DatesSlider = ({ activeFilter, dateFrom, dateTo, handleSliderDateChange, handleToggleDatesInput }) => {
	// const isWeekOrMonth = activeFilter === 'week' || activeFilter === 'month';

	const renderDateInfo = () => {
		let result = '';
		switch (activeFilter) {
			case 'yesterday':
				result = `вчера, ${dateFrom.date()} ${dateTo.format('MMMM')}`;
				break;
			case 'today':
				result = `сегодня, ${dateFrom.date()} ${dateTo.format('MMMM')}`;
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
		<div className='slider mt-2'>
			<span className='slider-btn prev' onClick={handleSliderDateChange}>
				<BiChevronLeft size='24' />
			</span>
			<span className='date-info' onClick={handleToggleDatesInput}>
				{renderDateInfo()}
			</span>
			<span className='slider-btn next' onClick={handleSliderDateChange}>
				<BiChevronRight size='24' />
			</span>
		</div>
	);
};

export default DatesSlider;
