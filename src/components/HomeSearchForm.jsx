import React, { useState } from 'react'

const HomeSearchForm = () => {
    const [toggle1, setToggle1] = useState('buy')
    const [toggle2, setToggle2] = useState('all')

    function handleSwitch1(val) {
        setToggle1(val)
    }
    function handleSwitch2(val) {
        setToggle2(val)
    }

    return (
        <form className="homeCotainerSub2 animateReloadBlock">
            <div className="homeFormDiv1">
                <div className="homeFormDiv1Sub">
                    <div data={toggle1} className="homeFormDiv1SubInner">
                        <p onClick={() => handleSwitch1('buy')} className={`FormSubFont ${toggle1 == 'buy' ? 'selected' : ''}`}>Buy</p>
                        <p onClick={() => handleSwitch1('rent')} className={`FormSubFont ${toggle1 == 'rent' ? 'selected' : ''}`}>Rent</p>
                    </div>
                </div>
                <div className="homeFormDiv1Sub">
                    <div data={toggle2} className="homeFormDiv1SubInner">
                        <p onClick={() => handleSwitch2('all')} className={`FormSubFont ${toggle2 == 'all' ? 'selected' : ''}`}>All</p>
                        <p onClick={() => handleSwitch2('ready')} className={`FormSubFont ${toggle2 == 'ready' ? 'selected' : ''}`}>Ready</p>
                        <p onClick={() => handleSwitch2('offplan')} className={`FormSubFont ${toggle2 == 'offplan' ? 'selected' : ''}`}>Off-Plan</p>
                    </div>
                </div>
            </div>
            <div className="homeFormDiv2">
                <select className="homeFormDiv2Sub">
                    <option>Residental</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                </select>
                <select className="homeFormDiv2Sub">
                    <option>Beds & Baths</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                </select>
            </div>
            <input className="homeFormInput" placeholder="Enter location"></input>
            <div className="homeFormDiv3">
                <select className="homeFormDiv3Sub">
                    <option>Agent</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                </select>
                <div className='homeFormDiv3SubDiv'>
                    <button className="homeFormDiv3SubButton">Find</button>
                </div>
            </div>
            <button className="homeFormSearchButton">Search</button>
        </form>
    )
}

export default HomeSearchForm