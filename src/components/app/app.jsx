import React, { Component } from 'react';
import { Col, Container } from 'reactstrap';
import DateFilter from '../date-filter/date-filter';
// import Test from '../test/test';

class App extends Component {
	render() {
		return (
			<Container>
				<Col sm='5'>
					<DateFilter />
					{/* <Test /> */}
				</Col>
			</Container>
		);
	}
}

export default App;
