import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import React from 'react'
import './zonepub.css'
import image1 from './img/image1.jpg'
import image2 from './img/image2.jpg'
import image3 from './img/image3.jpg'
import image4 from './img/image4.png'

function Zonepub() {
  return (
    <div className='Zonepub'>
  <AwesomeSlider>
    <div><img src={image1} alt="" /></div>
    <div><img src={image2} alt="" /></div>
    <div><img src={image3} alt="" /></div>
    <div><img src={image4} alt="" /></div>
  </AwesomeSlider>
  </div>
);

}
export default Zonepub
