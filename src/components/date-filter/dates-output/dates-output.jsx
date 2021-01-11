import React from 'react';

function DatesOutput({ activeFilter, dateStart, dateEnd, handleInputChange }) {
	const isDateEndNeed = activeFilter === 'week' || activeFilter === 'month';

	return (
		<div className='dates-output mt-2'>
			<div className='dates-range d-flex'>
				<input
					className='date-input'
					data-range_label='dateStart'
					type='text'
					value={dateStart.format('DD.MM.YYYY')}
					onChange={handleInputChange}
				/>
				{isDateEndNeed && (
					<input
						className='date-input ml-2'
						data-range_label='dateEnd'
						type='text'
						value={dateEnd.format('DD.MM.YYYY')}
						onChange={handleInputChange}
					/>
				)}
			</div>
		</div>
	);
}

export default DatesOutput;
