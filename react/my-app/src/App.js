import React, { Component,useState }from 'react';
import './App.css';
import img from './img/img.jpg'

function Test ({ width, height }){
  const [
    foldAngle,
    setFoldAngle,
  ] = useState(0);
  
  //上半部分和下半部分共享的样式
  const sharedStyles = {
    width,
    height: height / 2
  };

  return (
    <div style={{ perspective: 500,margin: 200}}>

      {/* 上半部分 */}
      <div style={{
          ...sharedStyles,
          overflow: 'hidden',
        }}>
         <img
          src={img}
          alt="a neon Chinese alley"
          style={{
            width,
            height,
          }}
        />
      </div>

      {/* 下半部分 */}
      <div
        style={{
          ...sharedStyles,
          backgroundSize: `${width}px ${height}px`,
          backgroundImage: `url(${img})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `0px 100%`,
          transform: `rotateX(${foldAngle}deg)`,
          transformOrigin: 'center top',
          // willChange: 'transform',
          transformStyle: 'preserve-3d',
        }}
      >
        <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background:
              // 'hsla(0, 100%, 100%, 0.9)',
              'rgba(255,255,255,0.9)',
            backfaceVisibility: 'visible',
            transform:
              'rotateX(180deg) translateZ(.5px)',
          }}></div>
      </div>

      <br />
      <label htmlFor="slider">Fold ratio:</label>
      <input
        id="slider"
        type="range"
        min={0}
        max={180}
        value={foldAngle}
        onChange={ev =>
          setFoldAngle(ev.target.value)
        }
        style={{ width }}
      />
    </div>
  );
}

class Foldable extends Component {
  constructor( props ) {
      super( props );
  }

  componentDidMount(){
      console.log(this.props.options)
  }
  render() {
    return(
      <Test {...this.props.options} />
    );
  }
}

export default Foldable;
