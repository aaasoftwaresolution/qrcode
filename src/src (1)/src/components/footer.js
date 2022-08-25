import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <Link to={"/orders"}>
      <div className='footer1'>
      <div className=' fixed-bottom p-3'>
            <div  className='d-flex justify-content-center'>
            <div className='footer-color content-footer'>My Order List / Next</div> 
            </div>
        </div>
      </div>
      </Link>  
    </div>
  )
}
