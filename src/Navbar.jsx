import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.svg'
import Button from './Button'
import styled from 'styled-components'

export const Navbar = () => {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

            <Link to='/' >
            <img src={logo} alt="store" className='navbar' />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nab-item ml-5">
                    <Link to='/' className='nav-link' >
                        products
                    </Link>
                </li>
            </ul>
            <Link to='/cart' className='ml-auto ' >
                <Button> 
                    <i className="fas fa-cart-plus"/> My cart 
                </Button>
            </Link>
        </NavWrapper>
    )
}

export default Navbar

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: capitalize;
}
`