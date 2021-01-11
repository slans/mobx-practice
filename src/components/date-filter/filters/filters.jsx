import React from 'react';
import { List } from 'reactstrap';
import FilterItem from './filter-item/filter-item';
import { nanoid } from 'nanoid';
import './index.scss';

function Filters({ handleChooseFilter, activeFilter }) {
	const filters = [
		{ text: 'Вчера', label: 'yesterday' },
		{ text: 'Сегодня', label: 'today' },
		{ text: 'Неделя', label: 'week' },
		{ text: 'Месяц', label: 'month' },
	];

	return (
		<div className='filters d-flex'>
			<span className='label'>Выбор:</span>
			<List type='unstyled' className='filters-list ml-2'>
				{filters.map((filter) => {
					const isActive = activeFilter === filter.label;
					return (
						<FilterItem
							text={filter.text}
							label={filter.label}
							handleChooseFilter={handleChooseFilter}
							isActive={isActive}
							key={nanoid()}
						/>
					);
				})}
			</List>
		</div>
	);
}

export default Filters;
