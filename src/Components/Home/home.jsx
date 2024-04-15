import React , {useEffect}from 'react'
import './home.css'
// import video from '../videos/sea.mp4'
import{GrLocation} from 'react-icons/gr'
import {FaSearch } from "react-icons/fa";
import{FiFacebook} from 'react-icons/fi'
import{AiOutlineInstagram} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Home = () => {
  useEffect(()=>{
      Aos.init({duration:2000})
  },[])
  return (
  <section className='home'>
    <div className='overlay'></div>
    {/* <video src={video} muted autoPlay loop type="video/mp4"></video> */}
    <div className='homeContent container'>
      <div className='textDiv'>
        <span data-aos="fade-up"
        className='smallText'>
          Our Packages
        </span>
        <h1 data-aos="fade-up" className='homeTitle'>
          Scarch Your Holiday
        </h1>
      </div>
      <div data-aos="fade-up" className='codeDiv grid'>
          <div className='destinationInput'>
            <label htmlFor="city">Scarch Your destination:</label>
             <div className='input flex'>
              <input type="text" placeholder='Enter name here....' />
              <GrLocation className="icon"/>
             </div>
          </div>
          <div className='dateInput'>
            <label htmlFor="date">Scarch Your date:</label>
             <div className='input flex'>
              <input type="date"/>
             </div>
          </div>
          <div className='priceInput'>
           <div className='label_total flex'>
            <label htmlFor='price'>Max price:</label>
            <h3 className='total'>10000</h3>
           </div>
           <div className='input flex'>
            <input type="range" max="10000" min="1000" />
           </div>
          </div>
          <div className='searchOptions flex'>
            <FaSearch className="icon"/>
            <span>SEARCH</span>
          </div>
      </div>
      <div className="homeFooterIcon flex">
        <div className="rightIcons">

        </div>
        <div className="rightIcon">
          <FiFacebook className="icon"/>
          <AiOutlineInstagram className="icon"/>
         
        </div>
       
      </div>
    </div>
  </section>
  )
}

export default Home