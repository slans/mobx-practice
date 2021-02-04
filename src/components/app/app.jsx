import React, { Component } from 'react';
import { Col, Container } from 'reactstrap';
import DateFilter from '../date-filter/date-filter';
import './index.scss';

class App extends Component {
	render() {
		return (
			<Container>
				<Col sm='4'>
					<DateFilter />
				</Col>
			</Container>
		);
	}
}

export default App;
