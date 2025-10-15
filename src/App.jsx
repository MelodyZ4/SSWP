import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx'
import './App.css';
import Home from './Home.jsx';
import WIP from './WIP.jsx';
import Contact from './Contact.jsx';

function App() {
  const page = window.location.pathname;

  let Component;
  if (page === '/home') {
    Component = Home;
  } else if (page === '/wip') {
    Component = WIP;
  } else if (page === '/contact') {
    Component = Contact;
  } else {
    Component = Home;
  }
  return (
    <>
      <Header />
      <main>
        <Component />
      </main>
      <Footer />
    </>
  );
}

export default App;
