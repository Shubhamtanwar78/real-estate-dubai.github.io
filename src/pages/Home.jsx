import React from "react"
import dubaiSketch from '../assets/images/Dubai_Skyline.svg'
import Recommendation from '../assets/images/Recommendation.webp'
import HomeSearchForm from "../components/HomeSearchForm"
import Carousel from "../components/Carousel"
import LatestLisiting from "../components/LatestListing"
import Review from "../components/Review"
import Rules from "../components/Rules"
import HonoredCustomers from "../components/HonoredCustomers"

export default function Home() {
    return (
        <>
            <div className="homeContainer1">
                {/* <div className="hiddenBlurHCTop"></div>
                <div style={{ position: "relative" }}> */}
                <div className="homecontdiv">
                    <div className="homeCotainerSubDiv1 animateReloadBlock">
                        <p className="LFont">Invest in Dubai real estate</p>
                        <p className="MFont">We bring Due Diligence at Your service</p>
                        <button className="Sub1Button">Leave a request</button>
                    </div>
                    <HomeSearchForm />
                </div>
                {/* <div className="homeCotainerSub3 animateReloadBlock">
                        <img className="homeCotainerSub3Img" src={dubaiSketch} alt="dubai sketch"></img>
                    </div>
                </div>
                <div className="hiddenBlurHCBottom"></div> */}
            </div>
            <div className="homeContainer2">
                <div className="main-container-sub animateBlock">
                    <p className="LFont">EXCLUSIVES</p>
                    <p className="MFont">Discover the outstanding range of Dubai properties</p>
                </div>
                <Carousel />
            </div>
            <div className="homeContainer3 animateBlock">
                <div className="homeContainer3Div">
                    <div className="homeContainer3SuperSubDiv">
                        <div className="homeContainer3SubDiv1">
                            <div className="SubDiv1_1Container3">
                                <p className="MFont">Get home recommendations</p>
                                <p className="SFont">Sign in for a more personalized experience.</p>
                            </div>
                            <div className="SubDiv1_2Container3">
                                <button className="SubDiv1-2Container3Button">Sign In</button>
                            </div>
                        </div>
                        <div className="homeContainer3SubDiv2">
                            <img className="SubImg2_1Container3" src={Recommendation} alt="Recommendation" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeContainer4">
                <div className="homeContainer4Sub animateBlock" style={{ textAlign: 'center' }}>
                    <p className="LFont">LATEST LISTINGS</p>
                    <p className="MFont">Check out some of the latest and best properties published on our website.</p>
                </div>
                <LatestLisiting />
            </div>
            <div className="homeContainer5">
                <div className="homeContainer5SuperSub">
                    <div className="homeContainer5Sub animateBlock" style={{ textAlign: 'center' }}>
                        <p className="LFont">Client Testimonials</p>
                        <p className="MFont">WHAT PEOPLE SAYS ABOUT US</p>
                    </div>
                    <Review />
                </div>
            </div>
            <div className="homeContainer6">
                <Rules />
            </div>
            <div className="homeContainer7">
                <HonoredCustomers />
            </div>
        </>
    )
}