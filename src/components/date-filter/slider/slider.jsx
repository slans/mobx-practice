import React from 'react';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
dayjs.extend(weekOfYear);

const Slider = ({ activeFilter, dateFrom, dateTo, handleSliderDateChange }) => {
	const renderDateInfo = () => {
		let result = '';
		switch (activeFilter) {
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

	if (activeFilter === 'week' || activeFilter === 'month') {
		return (
			<div className='slider d-flex justify-content-between'>
				<span className='slider-btn prev' style={{ cursor: 'pointer' }} onClick={handleSliderDateChange}>
					Предыдущий
				</span>
				<span className='date-info'>{renderDateInfo()}</span>
				<span className='slider-btn next' style={{ cursor: 'pointer' }} onClick={handleSliderDateChange}>
					Следующий
				</span>
			</div>
		);
	}

	return null;
};

export default Slider;
