import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className='headerContainer'>
                <NavLink to='/' className='headerLogo'>
                    <img src='' alt='Your Logo'></img>
                </NavLink>
                <NavLink to='/buy'>Buy</NavLink>
                <NavLink to='/rent'>Rent</NavLink>
                <NavLink to='/off-plan'>Off-Plan</NavLink>
            </div>
            <div className='headerContainer menuHamBur'>
                <div className='headerContainerDiv1'>
                    <h4 className='headerContainerDiv1H4'>EN</h4>
                    <div className='headerContainerDiv1SuperSub1'>
                        <div className='headerContainerDiv1Sub1'>FR</div>
                        <div className='headerContainerDiv1Sub2'>DE</div>
                        <div className='headerContainerDiv1Sub3'>RU</div>
                        <div className='headerContainerDiv1Sub4'>AR</div>
                    </div>
                </div>
                <h4>Follow Us</h4>
                <h4>Call Us</h4>
            </div>
            <nav role="navigation" className='navigation'>
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <a href="#"><li>EN</li></a>
                        <a href="#"><li>Follow Us</li></a>
                        <a href="#"><li>Call Us</li></a>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
