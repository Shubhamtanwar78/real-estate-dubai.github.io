import React, { useRef } from "react"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerDiv1">Your Logo</div>
            <div className="footerDiv2">
                <div className="footerDiv2Sub1">
                    <div className="footerSub1-1Div2">
                        <p className="footerDiv2Text">Apartments</p>
                        <p className="footerDiv2Text">Penthouses</p>
                        <p className="footerDiv2Text">Villas</p>
                        <p className="footerDiv2Text">Townhouses</p>
                    </div>
                    <div className="footerSub1-2Div2">
                        <p className="footerDiv2Text">Off-Plan</p>
                        <p className="footerDiv2Text">Catalogs</p>
                        <p className="footerDiv2Text">Area Guides</p>
                        <p className="footerDiv2Text">Sell</p>
                    </div>
                    <div className="footerSub1-3Div2">
                        <p className="footerDiv2Text">Rent</p>
                        <p className="footerDiv2Text">Developers</p>
                        <p className="footerDiv2Text">AX CORPORATE</p>
                        <p className="footerDiv2Text">Reviews</p>
                    </div>
                    <div className="footerSub1-4Div2">
                        <p className="footerDiv2Text">Careers</p>
                        <p className="footerDiv2Text">Contact Us</p>
                        <p className="footerDiv2Text"></p>
                        <p className="footerDiv2Text"></p>
                    </div>
                </div>
                <div className="footerDiv2Sub2">
                    <div className="footerSub2-1Div2">
                        <p className="footerDiv2-2Text1">Dubai, UAE</p>
                        <p className="footerDiv2-2Text2">14th Floor, XYZ Office, Business Bay</p>
                    </div>
                    <div className="footerSub2-2Div2">
                        <img src="./images/thumbnail_SVG/whatsapp.svg" alt="whatsapp" className="footerDiv2img" />
                        <img src="./images/thumbnail_SVG/facebook.svg" alt="facebook" className="footerDiv2img" />
                        <img src="./images/thumbnail_SVG/youtube.svg" alt="youtube" className="footerDiv2img" />
                        <img src="./images/thumbnail_SVG/linkedin.svg" alt="linkedin" className="footerDiv2img" />
                        <img src="./images/thumbnail_SVG/instagram.svg" alt="instagram" className="footerDiv2img" />
                    </div>
                    <div className="footerSub2-3Div2">
                        <button className="footerDiv2Button">Call US</button>
                    </div>
                </div>
            </div>
            <div className="footerDiv3">
                <p className="footerDiv3Text">XYZ ©2024 All Rights Reserved</p>
                <p className="footerDiv3Text">Terms of Use</p>
                <p className="footerDiv3Text">Privacy Policy</p>
                <p className="footerDiv3Text">Sitemap</p>
            </div>
        </footer>
    )
}