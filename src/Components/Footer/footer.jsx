import React from 'react'
import'./footer.css'
import img from '../../img/fb.png'
import img1 from '../../img/ig.png'
const footer = () => {
  return (
  
   <div className='footer'>
    <div className="sb_footer section_padding">
<div className='sb_footer-link'>
  <div className='sb__footer-link_div'>
    <h4>Home</h4>
    <a href="/employer">
      <p>Destinations</p>
    </a>
    <a href="/employer">
      <p>Search</p>
    </a>
  </div>
  <div className='sb__footer-link_div'>
    <h4>About Us</h4>
    <a href="/resource">
      <p>contact us</p>
    </a>
    <a href="/resource">
      <p>Service</p>
    </a>
  </div>
  <div className='sb__footer-link_div'>
    <h4>socal</h4>
    <p><img src={img} alt="" className='fb' /></p>
    <p><img src={img1} alt="" className='ig' /></p>

  </div>
</div>
    </div>
   </div>
  )
}

export default footer