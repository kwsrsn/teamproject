import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const changeClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        setDropdown(true)
    }

    const onMouseLeave = () => {
        setDropdown(false)
    }

    return (
        <>
            <section>
                
                <nav className="navbar">
                    <img src="/images/logonavbar.png" className='picnav'/>
                    
                    <Link to='/' className='logo'><i className='fas fa-home' /> PRELIMINARY MENTAL ASSESSMENT </Link>

                    <div className="menu-icon" onClick={changeClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
                    </div>

                    <ul className={click ? 'nav-side-menu start' : 'nav-side-menu'}>

                        <li className='nav-items'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu} > หน้าหลัก </Link>
                        </li>

                        <li className='nav-items'>
                            <Link to="/news" className='nav-links' onClick={closeMobileMenu}> บทความ </Link>
                        </li>

                        <li className='nav-items'>
                            <Link to="/mentalhealth" className='nav-links' onClick={closeMobileMenu}> แบบประเมิน </Link>
                        </li>

                        <li className='nav-items'>
                            <Link to="/contact" className='nav-links' onClick={closeMobileMenu}> ติดต่อ </Link>
                        </li>

                        
                    </ul>

                </nav>
            </section>
        </>
    )
}

export default Navbar;
