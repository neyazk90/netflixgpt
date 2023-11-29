import React from 'react'
import {  NavLink } from 'react-router-dom'
import './NavLinks.css';

const NavLinks = props => {
  return (
    <>
        <NavLink to="2/places" className="mr-5 hover:text-gray-900 ">My Places</NavLink>
        <NavLink to="auth" className="mr-5 hover:text-gray-900">Auth</NavLink>
        <NavLink to="place/new" className="mr-5 hover:text-gray-900">Add Place</NavLink>
          

        <NavLink to="place/2" className="mr-5 hover:text-gray-900">Edit Palace</NavLink>
    </>
  )
}

export default NavLinks