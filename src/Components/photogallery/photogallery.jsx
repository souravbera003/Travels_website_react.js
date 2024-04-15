import React from 'react'
import './photogallery.css'
import video from '../videos/h.mp4'
import img1 from'../../img/p.jpg';
import img2 from'../../img/m.jpg';
import img3 from'../../img/im.jpg';

const Photogallery = () => {
  return (
    <div className='photogallery'>
       <h3 className='title'>
     Gallery look
        </h3>  
        <video src={video} muted autoPlay loop type="s/mp4"></video>
        <div className='galleryimg'>
          
          
        <div class="column">
        <img src={img1} alt="" className='imgs' />
       </div>
        <div class="column">
          <img src={img2} alt="" className='imgs' />
       </div>
        <div class="column">
        <img src={img3} alt="" className='imgs' />
    
       </div>
       </div>
    </div>
  )
}

export default Photogallery