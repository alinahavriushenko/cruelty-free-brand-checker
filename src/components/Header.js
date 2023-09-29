import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faOtter} from '@fortawesome/free-solid-svg-icons'



export default function Header() {
    return (
        <header className='header'>
        <FontAwesomeIcon icon={faOtter} className='logo'/>
      <h1>Cruelty-Free <span className='logo-second'>Brand Checker</span></h1>
      </header>
    )
}