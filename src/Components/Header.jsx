import React, {useState} from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import Order from './Order'


const showOrders = (props) => {
    return (
        <div>
            {props.orders.map(el => (
               <Order key = {el.id} item = {el} onDelete = {props.onDelete} onCount = {props.onCount}/> 
            ))}
        </div>
    )
}

const showNothing = () => {
    return (
        <div>
            <h2>NOOOOOOOOO</h2>
        </div>
    )
}


export default function Header(props) {

    let [cartOpen,setCartOpen] = useState(false)
  
    return(
        <header >
            <div className = "logo"> Shop</div>
            <ul className = "nav">  
            <li> <a href ="..."> About us</a></li>
            <li><a href ="...">Streamlit</a> </li>
            <li><a href ="https://www.arizona.edu">Arizona</a></li>
            <li className = {`shopcart ${cartOpen && 'active'}`}><FaShoppingCart onClick = {() => setCartOpen(cartOpen=!cartOpen)}/></li>
            </ul>
             
                {cartOpen && (  
                    <div className="basket">
                        {props.orders.length >0 ? showOrders(props) :showNothing()}
                        
                        
                    </div>
                )}
        
            <div className = "presentation"></div>
        </header>
        
        
    )

}