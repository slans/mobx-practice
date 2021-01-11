import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

class Test extends Component {
	textInput = React.createRef();

	focusTextInput = () => {
		// Установим фокус на текстовое поле с помощью чистого DOM API
		// Примечание: обращаемся к "current", чтобы получить DOM-узел
		this.textInput.current.focus();
	};

	render() {
		// описываем, что мы хотим связать реф <input>
		// с `textInput` созданным в конструкторе
		return (
			<div>
				<input type='text' ref={this.textInput} />
				<input type='button' value='Фокус на текстовом поле' onClick={this.focusTextInput} />
			</div>
		);
	}
}

export default Test;
