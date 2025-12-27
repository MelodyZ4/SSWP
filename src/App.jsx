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
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <Header />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Component />
      </main>
      <Footer />
    </div>
  );
}

export default App;
