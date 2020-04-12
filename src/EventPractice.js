import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message : '',
        username: ''
    }
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            //message: e.target.value
        });
    }
    
    handleClick = () => {
        alert(this.state.username + " : " + this.state.message);
        this.setState({
            message: '',
            username: ''
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    /*
    handleChange(e){
        this.setState({
            message: e.target.value
        })
    }

    handleClick(){
        alert(this.state.message);
        this.setState({
            message: ''
        })
    }
    */
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                type="text"
                name="message"
                placeholder="아무거나 입력"
                value = {this.state.message}
                onChange={this.handleChange}
                />
                <input
                type="text"
                name="username"
                placeholder="이름입력"
                value = {this.state.username}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
                
            </div>
        );
    }
}

export default EventPractice;