import React from 'react';
import './Cheader.css'; 

const Header = (props) => {
  return (
    <nav className='Navbar'>
      <div className='Nav-Header'>
        <span>{props.title}</span>
      </div>
      <div className='Nav-List'>
        <ul>
          <li>
            <a href='#' >Home</a>
          </li>
          <li>
            <a href='#'>{props.about}</a>
          </li>
        </ul>
      </div>

      {props.searchbar ? <div className='Nav-search'>
        <input type='text' placeholder='Search list' />
        <button>Submit</button>
      </div> : "Not aplicabe"}
    </nav>
  )
}

export default Header;
