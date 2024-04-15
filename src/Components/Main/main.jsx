import React from 'react'
import'./main.css'
import { CiLocationOn } from "react-icons/ci";
import{HiOutlineClipboardCheck} from 'react-icons/hi'
import img from'../../img/a.jpg'
import img1 from'../../img/b.webp'
import img2 from'../../img/c.jpg'
import img3 from'../../img/d.jpg'
import img4 from'../../img/e.jpg'
import img5 from'../../img/f.webp'

const Data=[
  {id:1,
  imgSrc:img,
  destTitle:'Kolkata',
  location:'West Bengal',
  grade:'',
  fees:'200',
  description:'Kolkata, Indias second biggest city, is a perpetually ongoing festival of human existence, concurrently luxurious and squalid, refined and frantic, pointedly futuristic, while beautifully in decay. A vibrant 350-year-old metropolis located on Indias Eastern Coast, the capital of West Bengal thrive...',},
  {id:1,
  imgSrc:img1,
  destTitle:'Darjeeling',
  location:'West Bengal',
  grade:'',
  fees:'3700',
  description:'Darjeeling, the former summer capital of India under the British Raj, has evolved into one of Indias most sought-after hill stations. This picturesque hill destination in West Bengal is ideal for a romantic honeymoon. Darjeeling, nestled among acres of tea estates, is 2,050 metres above sea level a...',},
  {id:1,
  imgSrc:img2,
  destTitle:'Sundarbans',
  location:'West Bengal',
  grade:'',
  fees:'5500',
  description:'Known for hosting the biggest mangrove forests in the world, Sundarbans National Park is located around 110 Km south of Kolkata in West Bengal, India. It is also a Tiger Reserve and a Biosphere Reserve famous for being the home of the Royal Bengal tigers, among others, including roaring rivers and b...',},
  {id:2,
  imgSrc:img3,
  destTitle:'Mirik',
  location:'West Bengal',
  grade:'',
  fees:'6700',
  description:'Nestled amidst the picturesque hills of Darjeeling district in West Bengal, Mirik is a charming hill station known for its serene beauty and tranquil ambiance. Located at an altitude of 1,495 meters above sea level, Mirik is surrounded by lush green forests, rolling tea gardens, and breathtaking vie...',}, 
  {id:3,
  imgSrc:img4,
  destTitle:'Digha',
  location:'West Bengal',
  grade:'',
  fees:'1000',
  description:'Beach town situated on the shores of Bay of Bengal, Digha is a popular tourist destination known for its untouched beaches and scenic views, especially among people in West Bengal..',},
  {id:4,
  imgSrc:img5,
  destTitle:'Murshidabad',
  location:'West Bengal',
  grade:'',
  fees:'2000',
  description:'From the Nawabs of the pre-British era to the Lords from England, Murshidabad has seen history from its core. This small tourist haven in West Bengal serves as a place that manages to combine the beauty of the past with the beliefs of the present..',}

]
const Main = () => {
  return (
    <section  className='main container section'>
      <div className='secTitle'>
        <h3 className='title'>
          Most visited destinations
        </h3>
        </div> 
       <div className="seaContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id} 
              className='singleDestintion'>
                  <div className='imageDiv'>
                    <img src={imgSrc} alt={destTitle}/>
                  </div>
                  <div className='cardInfo'>
                    <h4 className='destTitle'>
                      {destTitle}
                    </h4>
                    <span className='continent flex'>
                      <CiLocationOn className='icon'/>
                      <span className='name'>{location}</span>
                    </span>
                    <div className='fees flex'>
                      <div className='grade'>
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className='price'>
                        <h5>{fees}</h5>
                      </div>
                     
                    </div>
                    <div className='desc'>
                        <p>{description}</p>
                      </div>
                      <button className='btn flex'>
                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                      </button>
                  </div>
                </div>
            )
          })
        }
       </div>
    </section>
   )
  
}

export default Main