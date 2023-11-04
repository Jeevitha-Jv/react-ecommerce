import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MainSlider.css'
import banner1 from'../Assets/banner1.jpg'
import banner2 from'../Assets/banner2.jpg'


export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
  };
  return (
    <Slider {...settings} >
                {/* <img src={banner1} /> */}
        <div>
       
            <div className='slider-image-wrapper' style={{backgroundImage:`url(${banner1})`}}>
                <div className='slider-image slider-content'>
                    <h1 variant='h1' className='sdr-hdr'>Super Hit Deal <span className='sdr-hdr-highlight' >For Kids</span></h1>
                    <h6 variant='subtitle1' className='sdr-content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </h6>
                    <button variant="contained" size="large" className='sdr-btn'>New Collections</button>
                </div>
            </div>
        </div>
        <div>
            <div className='slider-image-wrapper' style={{backgroundImage:`url(${banner2})`}}>
                <div className='slider-image slider-content'>
                    <h1 variant='h1' className='sdr-hdr'>Super Hit Deal <span className='sdr-hdr-highlight' >For Kids</span></h1>
                    <h6 variant='subtitle2' className='sdr-content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    </h6>
                    <button variant="contained" size="large" className='sdr-btn'>New Collections</button>
                </div>
            </div>
        </div>
    </Slider>
  );
}

