import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx'
import './App.css';
import Home from './Home.jsx';
import WIP from './WIP.jsx';
import Contact from './Contact.jsx';

function App() {
  const [hash, setHash] = useState(window.location.hash.replace('#', ''));

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash.replace('#', ''));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  let Component;
  if (hash === '/home') {
    Component = Home;
  } else if (hash === '/wip') {
    Component = WIP;
  } else if (hash === '/contact') {
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
