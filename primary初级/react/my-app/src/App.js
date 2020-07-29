import React, { Component}from 'react';
import './App.css';
import Spreadsheet from 'x-data-spreadsheet';

// function ChildList(props) {
//     let {num} = props;
//     if(num == 1){
//         return <div>1111111111</div>
//     }else {
//         return <div>222222222222</div>
//     }
//   }

class Example extends React.Component {
    constructor() {
      super();
      this.state = {
        val: 0
      };
    }
    
    componentDidMount() {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);    // 第 1 次 log
  
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);    // 第 2 次 log
  
      setTimeout(() => {
        this.setState({val: this.state.val + 1});
        console.log(this.state.val);  // 第 3 次 log
  
        this.setState({val: this.state.val + 1});
        console.log(this.state.val);  // 第 4 次 log
      }, 0);
    }
  
    render() {
      return null;
    }
  };

export default Example;
