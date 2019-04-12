import React, { Component } from "react";
import Contact from './components/Contact'
import Header from './components/Header'
import "./App.css";

class App extends Component {
  render() {
    
    return (
      <div className="App">
        
        <Header branding="Contact Manager"/>
        <Contact name ="John Doe" email= "akaris@yahoo.com" phone="555-555-555"/>
        <Contact name ="Akaris John" email= "kiras@yahoo.com" phone="445-555-555"/>


      </div>
    );
  }
}

export default App;
