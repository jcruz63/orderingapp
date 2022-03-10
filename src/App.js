import React from "react";
import AppStyle from "./App.module.css";
import Branding from './Branding.module.css'
import AppHeader from "./components/AppHeader/AppHeader";
import Card from "./components/UI/Card/Card";

let styles = {}
Object.assign(styles, AppStyle, Branding);

function App() {
  return (
      <React.Fragment>
          <AppHeader />
          <div className={styles.app}>
              <Card classes={[styles['app-main'], styles['primary-background']].join(' ')}>
                  <h1>Delicious Food, Delivered To You</h1>
                  <p>Choose you favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
                  <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs</p>
              </Card>
          </div>
      </React.Fragment>

  );
}

export default App;
