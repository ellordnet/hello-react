import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본이름'
    }
    static propTypes ={
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    constructor(props){
        super(props);
        this.state = {
            number : 0
        }
    }
    render() {
        return (
            <div>
                <p>나의 새롭고 멋진 컴포넌트 제 이름음 {this.props.name}</p>
        <p>저는 {this.props.age}살 입니다.</p>
        <p>숫자 : {this.state.number}</p>
        <button onClick={() => {
            this.setState({
                number: this.state.number + 1
            })
        }

        }>더하기


        </button>
            </div>
        );
    }
}


export default MyComponent;