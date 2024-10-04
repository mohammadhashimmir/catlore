import React from 'react'
import "../Styles/Header.css"
import siteLogo from "../logo2.png"
import SearchCats from './SearchCats'

function Header({ term, setTerm }) {
    return (
        <div className='navbar'>
            <div className="site-logo">
                <img src={siteLogo} alt='site logo' /><span>Cat Lore</span></div>
            <div className="items">
                <div className="item"><SearchCats term={term} setTerm={setTerm} /></div>
            </div>
        </div>
    )
}

export default Header