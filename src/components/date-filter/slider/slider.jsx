import React from 'react';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
dayjs.extend(weekOfYear);

const Slider = ({ activeFilter, dateStart, handleSliderDateChange }) => {
	const renderDateInfo = () => {
		let result = '';
		switch (activeFilter) {
			case 'week':
				result = `неделя ${dateStart.week()}`;
				break;
			case 'month':
				result = `${dateStart.format('MMMM')}`;
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
					Предыдущая
				</span>
				<span className='date-info'>{renderDateInfo()}</span>
				<span className='slider-btn next' style={{ cursor: 'pointer' }} onClick={handleSliderDateChange}>
					Следующая
				</span>
			</div>
		);
	}

	return null;
};

export default Slider;
