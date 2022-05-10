import { faCircleArrowLeft, faCircleArrowRight,faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { SearchContext } from "../../context/searchContext";
import useFetch from "../../context/useFetch";
import Footer from "../Footer";
import Header from "../Header";
import MailList from "../MailList";
import Navbar from "../Navbar";
import ReserveModal from "./ReserveModal";

function SingleHotel() {
    const navigate = useNavigate()
    const [slider,setSlider] = useState(0)
    const [openSlider,setOpenSlider] = useState(false)
    const hotelId = useParams()
    const [openModal,setOpenModal] = useState(false)
    const {data,loading} = useFetch(`http://localhost:8000/api/hotel/find/${hotelId._id}`)
    const {user} = useContext(AuthContext)
    const {dates,options} = useContext(SearchContext)
    const MLSPERDAY = 1000*60*60*24;
    function dayDiff(date1,date2){
      const timeDiff = Math.abs(date2.getTime()-date1.getTime());
      const diffDays = Math.ceil(timeDiff/MLSPERDAY)
      return diffDays;
    }

    const days = dayDiff(dates[0].endDate,dates[0].startDate)

    const handleModal =()=>{
        if(user){
          setOpenModal(true)
        }else{
          navigate('/login')
        }
    }

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
        {loading ? "Loading wait":
        <>
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
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.city} , {data.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location {data.distance} m from your location
          </span>
          <span className="hotelPriceHighLight">
            Book a stay $ {data.cheapestPrice} at thi property and get free airport taxi
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
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
                {" "}
                {data.description}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a {days}-night stay</h1>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam exercitationem deleniti iste magni? Veritatis eligendi
                repellendus atque deserunt quo vero facilis nam. Maiores magnam
                est vero recusandae porro officia ratione.
              </span>
              <h2>
                <b>$ {days * data.cheapestPrice * options.room}</b>({days} days)
              </h2>
              <button onClick={handleModal}>Reserve or Book Now !</button>
            </div>
          </div>
        </div>
        <MailList />
          <Footer />
        </>
        }
      </div>
      {openModal && <ReserveModal setOpen={setOpenModal} hotelId={hotelId}/>}
    </>
  );
}

export default SingleHotel;
