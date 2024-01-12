import React, { useContext } from 'react'
import MainContext from '../../../context'
import { Link } from 'react-router-dom'
import './Header.scss'
const Header = () => {
    const{search,setSearch}=useContext(MainContext)
  return (
  <>
  <div className='header'>
    <img className='imgSlider' src="https://preview.colorlib.com/theme/startup2/img/banner/banner.png" alt="" />
   <div className='opacity'></div>
    <div className='header_nav' >
    <img src="https://preview.colorlib.com/theme/startup2/img/logo.png" alt="" />
    <div className='ul'>
        <p>Portfolio</p>
    <p>About</p>
    <Link to={"add"}>Add</Link>
    <Link to={""}>Home</Link>
    </div>
    <input  
    type="text"
    value={search}
    placeholder='Search product'
    onChange={(e) => setSearch(e.target.value)}
  />
  </div> 

  <div className='textStart'>
    <h2>Startup you can build a <br /> website online using the <br /> Bootstrap builder.</h2>
    <button className='visitBtn'>Visit Our Works</button>
    </div>
  </div>
  </>
  )
}

export default Header