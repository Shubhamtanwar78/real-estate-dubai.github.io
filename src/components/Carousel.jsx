import React, { useState } from "react"
import image1 from '../assets/images/1.jpg'
import image2 from '../assets/images/2.jpg'
import image3 from '../assets/images/3.jpg'
import image4 from '../assets/images/4.jpg'
import image5 from '../assets/images/5.jpg'

const Carousel = () => {

    const [currentImg1, setCurrentImg1] = useState(image1);
    const [currentImg2, setCurrentImg2] = useState(image2);
    const [currentImg3, setCurrentImg3] = useState(image3);
    const [currentImg4, setCurrentImg4] = useState(image4);
    const [currentImg5, setCurrentImg5] = useState(image5);

    function handleCarouselClickPrev() {
        if (currentImg1 == image1) {
            setCurrentImg1(image5)
            setCurrentImg2(image1)
            setCurrentImg3(image2)
            setCurrentImg4(image3)
            setCurrentImg5(image4)
        } else if (currentImg2 == image1) {
            setCurrentImg1(image4)
            setCurrentImg2(image5)
            setCurrentImg3(image1)
            setCurrentImg4(image2)
            setCurrentImg5(image3)
        } else if (currentImg3 == image1) {
            setCurrentImg1(image3)
            setCurrentImg2(image4)
            setCurrentImg3(image5)
            setCurrentImg4(image1)
            setCurrentImg5(image2)
        } else if (currentImg4 == image1) {
            setCurrentImg1(image2)
            setCurrentImg2(image3)
            setCurrentImg3(image4)
            setCurrentImg4(image5)
            setCurrentImg5(image1)
        } else if (currentImg5 == image1) {
            setCurrentImg1(image1)
            setCurrentImg2(image2)
            setCurrentImg3(image3)
            setCurrentImg4(image4)
            setCurrentImg5(image5)
        }
    }
    function handleCarouselClickNext() {
        if (currentImg1 == image1) {
            setCurrentImg1(image2)
            setCurrentImg2(image3)
            setCurrentImg3(image4)
            setCurrentImg4(image5)
            setCurrentImg5(image1)
        } else if (currentImg2 == image1) {
            setCurrentImg1(image1)
            setCurrentImg2(image2)
            setCurrentImg3(image3)
            setCurrentImg4(image4)
            setCurrentImg5(image5)
        } else if (currentImg3 == image1) {
            setCurrentImg1(image5)
            setCurrentImg2(image1)
            setCurrentImg3(image2)
            setCurrentImg4(image3)
            setCurrentImg5(image4)
        } else if (currentImg4 == image1) {
            setCurrentImg1(image4)
            setCurrentImg2(image5)
            setCurrentImg3(image1)
            setCurrentImg4(image2)
            setCurrentImg5(image3)
        } else if (currentImg5 == image1) {
            setCurrentImg1(image3)
            setCurrentImg2(image4)
            setCurrentImg3(image5)
            setCurrentImg4(image1)
            setCurrentImg5(image2)
        }
    }

    return (
        <div className="main-container animateBlock">
            <div className="slides-box">
                <div className="slide-list">
                    <div className="Carousel-PrevButton" onClick={handleCarouselClickPrev}>
                        <div class="arrowLeft">
                            <span></span>
                        </div>
                    </div>
                    <img src={currentImg1} alt="image" className="slide-item-img-1"></img>
                    <img src={currentImg2} alt="image" className="slide-item-img-2"></img>
                    <img src={currentImg3} alt="image" className="slide-item-img-3"></img>
                    <img src={currentImg4} alt="image" className="slide-item-img-4"></img>
                    <img src={currentImg5} alt="image" className="slide-item-img-5"></img>
                    <div className="Carousel-NextButton " onClick={handleCarouselClickNext}>
                        <div class="arrowRight">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel