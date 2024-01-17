import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand, 
  } from 'mdb-react-ui-kit';
  import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <Link className="navbar-brand" to="/">
            <img
              src='https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png'
              height='30'
              alt=''
              loading='lazy'
            />
            Meteo
          </Link>
        </MDBContainer>
      </MDBNavbar>

  )
}
