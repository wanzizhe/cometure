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

class Foldable extends Component {
  constructor( props ) {
      super( props );
  }

  componentDidMount(){
    const s = new Spreadsheet(document.getElementById('xss-demo'), {
        mode: 'edit', // edit | read
        showToolbar: true,
        showGrid: true,
        showContextmenu: true,
        view: {
          height: () => document.documentElement.clientHeight,
          width: () => document.documentElement.clientWidth,
        },
        row: {
          len: 100,
          height: 25,
        },
        col: {
          len: 26,
          width: 100,
          indexWidth: 60,
          minWidth: 60,
        },
        style: {
          bgcolor: '#ffffff',
          align: 'left',
          valign: 'middle',
          textwrap: false,
          strike: false,
          underline: false,
          color: '#0a0a0a',
          font: {
            name: 'Helvetica',
            size: 10,
            bold: false,
            italic: false,
          },
        },
      }).loadData({});
  }

  render() {
    return(
        // <ChildList num={1}/>
        <div id="xss-demo"></div>
    );
  }
}

export default Foldable;
