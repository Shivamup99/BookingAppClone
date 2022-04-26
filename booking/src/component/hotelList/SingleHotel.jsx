import { faCircleArrowLeft, faCircleArrowRight,faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import MailList from "../MailList";
import Navbar from "../Navbar";

function SingleHotel() {
    const [slider,setSlider] = useState(0)
    const [openSlider,setOpenSlider] = useState(false)
  const photos = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0sYRNsS-NnUe78ZS21yD2XYwKpVEdlBH6g&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1pZ3DnvfSaEHuHUB1OKCf_gbkQlvM-AUNQ&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0sYRNsS-NnUe78ZS21yD2XYwKpVEdlBH6g&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1pZ3DnvfSaEHuHUB1OKCf_gbkQlvM-AUNQ&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0sYRNsS-NnUe78ZS21yD2XYwKpVEdlBH6g&usqp=CAU",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1pZ3DnvfSaEHuHUB1OKCf_gbkQlvM-AUNQ&usqp=CAU",
    },
  ];

  const handleSlider =(i)=>{
        setSlider(i)
        setOpenSlider(true)
  }
  const handleMove=(d)=>{
      let newSlide;
      if(d==='l'){
          newSlide= slider===0 ?5:slider-1;
      } else{
        newSlide= slider===5 ?0:slider+1;
      }
      setSlider(newSlide)
  }
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
         {
             openSlider &&(
                <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpenSlider(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove('l')}/>
                    <div className="sliderWrapper">
                    <img src={photos[slider].src} alt='ddd' className="sliderImg"/>    
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow'onClick={()=>handleMove('r')}/>
              
                </div>
             )

         } 
        <div className="hotelWrapper">
          <button className="booknow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Navi Mumbai 36 Sec</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500 m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay $114 at thi property and get free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i) => (
              <div className="hotelImgWrapper" key={i}>
                <img src={photo.src} alt="djdj" onClick={()=>handleSlider(i)} className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Mumbai</h1>
              <p className="hotelDesc">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                veniam ducimus totam officiis sunt, qui culpa aliquam aut quidem
                atque deleniti at quod laborum cupiditate vitae corrupti fugit
                magnam recusandae! Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Ipsam, tenetur vitae. Autem odit enim beatae
                esse nostrum quisquam ratione vero consectetur asperiores
                repudiandae ea nemo ipsum quos necessitatibus, quidem numquam!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam exercitationem deleniti iste magni? Veritatis eligendi
                repellendus atque deserunt quo vero facilis nam. Maiores magnam
                est vero recusandae porro officia ratione.
              </span>
              <h2>
                <b>$890</b>(9 nights)
              </h2>
              <button>Reserve or Book Now !</button>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default SingleHotel;
