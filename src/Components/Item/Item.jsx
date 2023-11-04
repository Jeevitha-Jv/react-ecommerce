import React, { useContext, useState } from 'react'
import './Item.css'
import { Link, useParams } from 'react-router-dom'
import * as FiIcons from "react-icons/fi";
import { ShopContext } from '../../Context/ShopContext';
import QuickView from '../QuickView/QuickView';


const Item = (props) => {

  const quickview = () => {

  }
  
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}>
          <img onClick={window.scrollTo(0,0)} src={props.image} alt=''/>
        </Link>
        <div className="prd-rating">
            <FiIcons.FiStar/> {props.rating} | {props.ratingcounts}
        </div>
        <p className='prd-name'>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
        <div className="actions-container">
          <button className="action-btn">
            <FiIcons.FiShoppingCart />
          </button>
          <button className="action-btn">
            <FiIcons.FiHeart />
          </button>
          <button onClick={quickview} className="action-btn">
            <FiIcons.FiEye />
          </button>
          {/* <QuickView product={props} /> */}
        </div>
      
    </div>
  )
}

export default Item
