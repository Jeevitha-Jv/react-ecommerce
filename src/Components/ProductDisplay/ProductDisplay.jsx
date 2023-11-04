import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDisplay = (props) => {
    const {product} = props;
    const { addToCart } = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <div className='small-img-blk' style={{backgroundImage:`url(${product.image})` }}></div>
                <div className='small-img-blk' style={{backgroundImage:`url(${product.image})` }}></div>
                <div className='small-img-blk' style={{backgroundImage:`url(${product.image})` }}></div>
                <div className='small-img-blk' style={{backgroundImage:`url(${product.image})` }}></div>
                <div className='small-img-blk' style={{backgroundImage:`url(${product.image})` }}></div>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img'  
                src={product.image}
                alt=''/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_dull_icon} alt='' />
                <p>(122)</p>
            </div>
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
                autoClose={4000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"/>
                <p className='productdisplay-right-category'><span>Category:</span>Women, Crop Top, T-Shirt </p>
                <p className='productdisplay-right-category'><span>Tags:</span>Mordern,Latest </p>
            </div>
            </div>
    </div>
  )
}

export default ProductDisplay;