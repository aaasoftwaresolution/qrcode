import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {

  const {
    isEmpty
  } = props.useCart;

  console.log(isEmpty)

  return (
    <div>
      <Link to={isEmpty ? "" :"/orders"}>
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
