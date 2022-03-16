import React, {useState} from "react";
import AppStyle from "./App.module.css";
import Branding from './Branding.module.css'
import AppHeader from "./components/AppHeader/AppHeader";
import Card from "./components/UI/Card/Card";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

let styles = {}
Object.assign(styles, AppStyle, Branding);



const menuItems = [
    {
        id:1,
        name: "Sushi",
        description: "Delicious raw fish",
        price: 2299
    },
    {
        id:2,
        name: "Clams",
        description: "Fresh caught and steamed clams",
        price: 1599
    },
    {
        id:3,
        name: "Crab boil",
        description: "Blue crabs done in a low country boil comes mild, hot, and spicy",
        price: 3199
    },
]

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () =>{
        setCartIsShown(false);
    }

  return (
      <CartProvider>
          <AppHeader onShowCart={showCartHandler}/>
          {cartIsShown && <Cart onClose={hideCartHandler}/>}
          <div className={styles.app}>
              <Card classes={[styles['app-main'], styles['primary-background']].join(' ')}>
                  <h1>Delicious Food, Delivered To You</h1>
                  <p>Choose you favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
                  <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs</p>
              </Card>
              <Menu items={menuItems}/>
          </div>
      </CartProvider>

  );
}

export default App;
