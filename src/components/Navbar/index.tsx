import * as React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => (
    <div>
        <div>
            <NavLink 
                activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                }} 
                to="/another-page">
                Other Page
            </NavLink>
            <NavLink 
                activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                }} to="/app">
                App
            </NavLink>
        </div>
    </div>
)

export default NavBar