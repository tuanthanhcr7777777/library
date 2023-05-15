import logo from './logo.svg';
import './App.css';
import Content from './content';
import Navbar from './components/navbar';
import Amazone from './components/amazone';
import Cart from './components/cart';
import { useEffect, useState } from 'react';

function App() {

  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])


  const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
    
		setCart([...cart, item]);
	}

    const handleChange = (item, d) => {
      const ind = cart.indexOf(item);
      const arr = cart;
      arr[ind].amount += d;

      if (arr[ind].amount === 0) arr[ind].amount = 1;
      setCart([...arr])
    }

    useEffect (() => {
      
    }, [cart])


  return (
    <div >
      <Navbar size={cart.length} setShow={setShow}/>
      {show ? <Amazone handleClick={ handleClick }/> : <Cart cart={cart} 
      setCart = {setCart} 
      handleChange={handleChange}/>}


    </div>
  );
}

export default App;
