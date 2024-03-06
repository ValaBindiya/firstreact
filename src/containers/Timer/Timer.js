import React, { Component } from 'react';

class Timer extends Component {

    // 1.It is used to initialize state value or binding method.
    constructor(props) {
        super(props);
        
        this.state = {
            time:new Date()
        }
    }

    tick = () => {
        this.setState  ({
            time : new Date()
        }
    )}

    // 3.It is called after mounting .It is mostly used to get data from server. It is called only one time when first time component mount

    componentDidMount = () => {
      this.timeRef =  setInterval(this.tick, 1000)
    }

    // 4. It is called when state or prpos value changed.
    
    componentDidUpdate = () => {
        console.log("4.componentDidUpdate");
    }

    // 5. It is used realse occupied resourses when we moved to another components.

    componentWillUnmount = () => {
        clearInterval(this.timeRef)
    }

     // 2.It is used to display JSX in DOM. It is called when any state or props are changed

    render() {
        return (
            <div>
                <h1>Timer</h1>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Timer;