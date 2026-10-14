import { createContext, useContext,
     useEffect, useMemo, useState } from "react";
    
// Initializing the CartContext using createContext()
const CartContext = createContext(null);

// Using browser local storage to store the information,
// This helps keep the cart data intact even during refreshes
const STORAGE_KEY = "shopkart_cart";

function loadCart(){
    try {
        // Trying to retrieve the stored data, or return empty array
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch { // Return empty array as cart in case Error in getting local storage
        return [];
    }
}

export function CartProvider({ children }){
    const [cartItems, setCartItems ] = useState(loadCart);

    useEffect(() => {
        // Whenever cartItems state is updated, overwrite the existing localStorage item for cart
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    },[cartItems]);

    function addToCart(products){
        
    }
}