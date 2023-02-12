// import { hasUnreliableEmptyValue } from '@testing-library/user-event/dist/utils';
import './App.css';
import { FaStar,} from 'react-icons/fa'
import React from 'react'
import img1 from './image/lap.jpeg'

const colors = {
  orange: '#FF0000',
  grey: '#a9a9a9'
}

function App() {
  const stars =Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] =React.useState(undefined);

  const handleClick=value =>{
    setCurrentValue(value)
  };
  const handleMouseOver =value =>{
    setHoverValue(value)
  }
  const handleMouseLeave =()=>{
    setHoverValue(undefined)
  }
  return ( 
    <div style={styles.container}>
      <div className='img'>
        <img src={img1} alt=''></img>
      <h1>Star Rating</h1>
        <p className='text'></p>
      <p>Rate our laptop</p>
      <p>Intel core I7 processor</p>
      <p>Black color</p>
      <p>HDMI 2.1</p>
      <p>Screen: OLED(Upto 4k resolution)</p>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              style={{
                marginRight:10,
                cursor:"pointer"
              }}
              color={(hoverValue || currentValue) >index ? colors.orange : colors.grey}
              onClick={()=> handleClick(index+1)}
              onMouseOver={()=> handleMouseOver(index +1)}
              onMouseLeave={handleMouseLeave}
              />
          )
        })}</div></div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}
export default App;
