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

// class Example extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         val: 0
//       };
//     }
    
//     componentDidMount() {
//       this.setState({val: this.state.val + 1});
//       console.log(this.state.val);    // 第 1 次 log
  
//       this.setState({val: this.state.val + 1});
//       console.log(this.state.val);    // 第 2 次 log
  
//       setTimeout(() => {
//         this.setState({val: this.state.val + 1});
//         console.log(this.state.val);  // 第 3 次 log
  
//         this.setState({val: this.state.val + 1});
//         console.log(this.state.val);  // 第 4 次 log
//       }, 0);
//     }
  
//     render() {
//       return null;
//     }
//   };
// // 答案是0023
// export default Example;

class Example extends Component {
    state = {
      count: 0
    };
  
    componentDidMount() {
      // 生命周期中调用
      this.setState({ count: this.state.count + 1 });
      console.log("lifecycle: " + this.state.count);
      setTimeout(() => {
        // setTimeout中调用
        this.setState({ count: this.state.count + 1 });
        console.log("setTimeout: " + this.state.count);
      }, 0);
      document.getElementById("div2").addEventListener("click", this.increment2);
    }
  
    increment = () => {
      // 合成事件中调用
      this.setState({ count: this.state.count + 1 });
      console.log("react event: " + this.state.count);
    };
  
    increment2 = () => {
      // 原生事件中调用
      this.setState({ count: this.state.count + 1 });
      console.log("dom event: " + this.state.count);
    };
  
    render() {
      return (
        <div className="App">
          <h2>couont: {this.state.count}</h2>
          <div id="div1" onClick={this.increment}>
            click me and count+1
          </div>
          <div id="div2">click me and count+1</div>
        </div>
      );
    }
  }
export default Example;