import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown]=useState(false)

    const closeMobileMenu = () => setClick(false);

    //dropdown
    const onMouseEnter=()=>{
        if(window.innerWidth<960){
            setDropdown(false)
        }else{
            setDropdown(true)
        }
    }

    const onMouseLeave=()=>{
        if(window.innerWidth<960){
            setDropdown(false)
        }else{
            setDropdown(true)
        }
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    {/* logo + icon */}
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        LOGO
                        <i className='fab fa-typo3' />
                    </Link>
                    {/* 三 toggle X */}
                    <div className='menu-icon' onClick={() => setClick(!click)}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    {/* Home Services Products Sign-up */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link
                                to='/services'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Services <i className='fas fa-caret-down'/>
                            </Link>{dropdown && <Dropdown />}
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/products'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {/* If button is true, you'll see the button, if not, you won't. */}
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;