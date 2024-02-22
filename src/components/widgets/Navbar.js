import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu';
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)
    // const [dropdown, setDropdown] = useState(false)
    const changeClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    // const [isOpen, setIsOpen] = useState(false);
    const [burger_class, setBurgerClass]= useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };

    // const onMouseEnter = () => {
    //     setDropdown(true)
    // }

    // const onMouseLeave = () => {
    //     setDropdown(false)
    // }

    // useEffect(() => {
    //     const toggleMenu = () => {
    //         setIsOpen(!isOpen);
    //     };
        
    //     const hamburgerMenu = document.querySelector(".hamburger-menu");
    //     const navbar = document.querySelector(".nav-side-menu");
    //     if(hamburgerMenu) {
    //         hamburgerMenu.addEventListener("click", () => {
    //             navbar.classList.toggle("active")
    //         })
    //     }

    //     return () => {
    //         if(hamburgerMenu){
    //             hamburgerMenu.removeEventListener("click", () => {
    //                 navbar.classList.toggle("")
    //             })
    //         }
    //     };
    // },[isOpen]);
    

    return (
        <>
            <section>
                <div>
                <nav className="navbar">
                    <img src="/images/logonavbar.png" className='picnav'/>
                    
                    <Link to='/' className='logo'><i className='fas fa-home' /> PRELIMINARY MENTAL ASSESSMENT </Link>
                    <div className="menu-icon" onClick={changeClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
                    </div>

                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>

                    <div className={menu_class}>
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
                    </div>
                    
                    {/* <li class="hamburger-menu  material-symbols-outlined" onClick={toggleMenu}>menu</li> */}
                    
                </nav>
                </div>
            </section>
        </>
    )
}

export default Navbar;
