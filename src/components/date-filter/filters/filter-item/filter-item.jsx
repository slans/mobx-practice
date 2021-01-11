import React from 'react';
import { ListInlineItem } from 'reactstrap';

function FilterItem({ text, label, isActive, handleChooseFilter }) {
	return (
		<ListInlineItem className={`${isActive ? 'active' : ''}`} data-label={label} onClick={handleChooseFilter}>
			{text}
		</ListInlineItem>
	);
}

export default FilterItem;
