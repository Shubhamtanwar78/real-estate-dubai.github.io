import React, { useEffect, useState } from 'react'
import HCData from '../assets/data/HonoredCustomers_Data.json'

const HonoredCustomers = () => {
    const [activeBox, setActiveBox] = useState('list1');
    const InnerContent = HCData.map((DataHC) => {
        return (
            <div className='homeContainer7Sub2Div2'>
                <div className='SuperSub2Div2Container7Div1'>
                    <div className='Sub2Div2Container7Div1Outter1'><img className='Sub2Div2Container7Div1Outter1Img' src={DataHC.list[activeBox][0].buildingImg} alt="" /></div>
                    <div className='Sub2Div2Container7Div1Outter2'>
                        <div className='Sub2Div2Container7Div1Inner1'><img className='Sub2Div2Container7Div1Inner1Img' src={DataHC.list[activeBox][0].imgURL} alt="" /></div>
                        <div className='Sub2Div2Container7Div1Inner2'>
                            <p className='Sub2Div2Container7Div1Inner2P1'>{DataHC.list[activeBox][0].ownerName}</p>
                            <p className='Sub2Div2Container7Div1Inner2P2'>{DataHC.list[activeBox][0].ownerComp}</p>
                        </div>
                    </div>
                </div>
                <div className='SuperSub2Div2Container7Div2'>
                    <div className='Sub2Div2Container7Div2Outter1'><img className='Sub2Div2Container7Div2Outter1Img' src={DataHC.list[activeBox][1].buildingImg} alt="" /></div>
                    <div className='Sub2Div2Container7Div2Outter2'>
                        <div className='Sub2Div2Container7Div2Inner1'><img className='Sub2Div2Container7Div2Inner1Img' src={DataHC.list[activeBox][1].imgURL} alt="" /></div>
                        <div className='Sub2Div2Container7Div2Inner2'>
                            <p className='Sub2Div2Container7Div2Inner2P1'>{DataHC.list[activeBox][1].ownerName}</p>
                            <p className='Sub2Div2Container7Div2Inner2P2'>{DataHC.list[activeBox][1].ownerComp}</p>
                        </div>
                    </div>
                </div>
                <div className='SuperSub2Div2Container7Div3'>
                    <div className='Sub2Div2Container7Div3Outter1'><img className='Sub2Div2Container7Div3Outter1Img' src={DataHC.list[activeBox][2].buildingImg} alt="" /></div>
                    <div className='Sub2Div2Container7Div3Outter2'>
                        <div className='Sub2Div2Container7Div3Inner1'><img className='Sub2Div2Container7Div3Inner1Img' src={DataHC.list[activeBox][2].imgURL} alt="" /></div>
                        <div className='Sub2Div2Container7Div3Inner2'>
                            <p className='Sub2Div2Container7Div3Inner2P1'>{DataHC.list[activeBox][2].ownerName}</p>
                            <p className='Sub2Div2Container7Div3Inner2P2'>{DataHC.list[activeBox][2].ownerComp}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    );
    console.log(InnerContent)

    function handleHCClick(val) {
        setActiveBox(val)
    }
    return (
        <>
            <div className='homeContainer7SuperSub1'>
                <p className='homeContainer7Sub1P1'>Our recently</p>
                <p className='homeContainer7Sub1P2'>Honored Customers</p>
            </div>
            <div onClick={() => handleHCClick('list1')} className='homeContainer7SuperSub2' >
                <div className='homeContainer7Sub2'>
                    <div className='homeContainer7Sub2Div1'>
                        <p className='Sub2Div1Container7P1'>2024</p>
                        <p className='Sub2Div1Container7P2'>37</p>
                    </div>
                    {activeBox == 'list1' ? InnerContent : ''}
                </div>
            </div>
            <div onClick={() => handleHCClick('list2')} className='homeContainer7SuperSub2' >
                <div className='homeContainer7Sub2'>
                    <div className='homeContainer7Sub2Div1'>
                        <p className='Sub2Div1Container7P1'>2023</p>
                        <p className='Sub2Div1Container7P2'>82</p>
                    </div>
                    {activeBox == 'list2' ? InnerContent : ''}
                </div>
            </div>
            <div onClick={() => handleHCClick('list3')} className='homeContainer7SuperSub2' >
                <div className='homeContainer7Sub2'>
                    <div className='homeContainer7Sub2Div1'>
                        <p className='Sub2Div1Container7P1'>2022</p>
                        <p className='Sub2Div1Container7P2'>102</p>
                    </div>
                    {activeBox == 'list3' ? InnerContent : ''}
                </div>
            </div >
            <div className='homeContainer7SuperSub3' >
                <div className='homeContainer7Sub3'>
                    <div className='homeContainer7Sub3Div1'>
                        <p className='Sub3Div1Container7P1'>View All<img style={{ height: "clamp(min(1.5vw, 50rem), 15px, max(2vw, 55rem))" }} src="./images/extra/arrow-up-right-svgrepo-com.svg" alt="" srcset="" /></p>
                    </div>
                </div>
            </div >

            <div></div>
        </>
    )
}

export default HonoredCustomers