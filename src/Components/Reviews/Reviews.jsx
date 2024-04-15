import React from 'react'
import './Reviews.css'
import img from '../../img/r.jpg'



const Reviews = () => {
  return (
<sectiion class="about_us about_container " id="offer">
  <div className=' about_img'>
    <img src={img} alt="" />
  </div>
  <div className='about_content'>
    <h3 className='section_subheader'> About Us</h3>
    <h2 className='section_header'>It is best time to take a ture</h2>
    <p className='section_discription'>
    West Bengal boasts of different ethnicities, cultures, religions, people and languages which add to its beautiful landscapes, forests, coastal beauty as well as its heritage....
    </p>
    <h5>Any Time</h5>
    {/* <div className='offer_ratings'>
      <span><i className='ri-star-fill'></i></span>
      <span><i className='ri-star-fill'></i></span>
      <span><i className='ri-star-fill'></i></span>
      <span><i className='ri-star-fill'></i></span>
    </div> */}
    <div className='about_btn'>
      <button className='btn'>
        Book Now 
      </button>
    </div>

  </div>

</sectiion>
  )
}

export default Reviews