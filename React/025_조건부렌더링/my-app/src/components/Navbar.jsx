import { useState } from 'react'
import Contents from './Contents'

export default function Navbar(){
    const [listName, setListName] = useState('about')
    const handleChangeId = (e) => {
      setListName(e.target.id)
    }
    return (
      <>
        <nav>
          <ul>
            <li 
              id = "about" 
              style = {listName === 'about'? 
                {color:"red"} : {color:"black"}}
              onClick={handleChangeId}
            >
              About
            </li>
            <li 
              id="product"
              style = {listName === 'product'? 
                {color:"red"} : {color:"black"}}
              onClick={handleChangeId}
            >
                Product
            </li>
            <li 
              id="cart" 
              style = {listName === 'cart'? 
                {color:"red"} : {color:"black"}}
              onClick={handleChangeId}
            >
                Cart
            </li>
            <li 
              id="contact" 
              style = {listName === 'contact'? 
                {color:"red"} : {color:"black"}}
              onClick={handleChangeId}
            >
                Contact
            </li>
          </ul>
        </nav>
        <Contents listName={listName}/>
      </>
    )
  }