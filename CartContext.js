import React, {createContext, useState} from 'react';
import { getDate } from './services/DatesService.js';
export const CartContext = createContext();
export function CartProvider(props) {
  const [items, setItems] = useState([]);

  function addItemToCart(date_id) {
    const date = getDate(date_id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.date_id == date_id));
      if(!item) {
          return [...prevItems, {
              date_id,
              qty: 1,
              date,
              totalPrice: date.price_low 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.date_id == date_id) {
              item.qty++;
              item.totalPrice += date.price_low;
            }
            return item;
          });
      }
    });
}
function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }

  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice}}>
      {props.children}
    </CartContext.Provider>
  );
}