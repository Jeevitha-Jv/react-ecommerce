import React, { useState,useContext } from 'react'
import './QuickView.css'
import * as FiIcons from "react-icons/fi";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ShopContext } from '../../Context/ShopContext'



const QuickView = (props) => {
  const {product} = props;
  const { addToCart } = useContext(ShopContext);

  const [open, setOpen] =useState(false);
  return (
    <div className='quickview'>
      
      <button 
      onClick={() => {setOpen(!open)}}
      className="action-btn"
      >
          <FiIcons.FiEye />
      </button>
      <div className="quickview-model" 
        style={{visibility: open? 'visible': 'hidden'}}
        >
          
        <div className="quick-left">
          <div className="image-container">
            <img src={product.image} alt=''/>
          </div>
        </div>
        <div className="quick-right">
        <button 
          onClick={() => {setOpen(!open)}}
          className="close-btn"
          >
              <FiIcons.FiX />
          </button>
          <h3>{product.name}</h3>
          <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button className='cart-btn' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"/>
                </div>

        </div>

      </div>
    </div>
  )
}

export default QuickView
