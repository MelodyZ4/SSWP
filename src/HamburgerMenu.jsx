import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const hamburgerStyle = {
    position: 'relative',
    zIndex: 1001,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const iconBox = {
    position: 'relative',
    width: '4.5vh',
    height: '4.5vh',
    borderRadius: '20%',
    backgroundColor: isOpen ? 'transparent' : '#FFD966',
  };

  const barBase = {
    position: 'absolute',
    left: '10%',
    right: '10%',
    height: 2.5,
    backgroundColor: '#7B00CC',
    borderRadius: 2,
    transformOrigin: '50% 50%',
    transition: 'top 220ms ease, transform 220ms ease, opacity 160ms ease',
    willChange: 'top, transform, opacity',
  };
  const topBarStyle = {
    ...barBase,
    top: isOpen ? '50%' : '25%',
    transform: isOpen ? 'translateY(-50%) rotate(45deg)' : 'translateY(-50%)',
  };
  const middleBarStyle = {
    ...barBase,
    top: '50%',
    transform: 'translateY(-50%)',
    opacity: isOpen ? 0 : 1,
  };
  const bottomBarStyle = {
    ...barBase,
    top: isOpen ? '50%' : '75%',
    transform: isOpen ? 'translateY(-50%) rotate(-45deg)' : 'translateY(-50%)',
  };

  const menuStyle = {
    position: 'fixed', // changed from absolute
    top: 0,
    right: 0,
    width: '300px',
    height: '100vh',
    backgroundColor: '#B3ABD2',
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    padding: '80px 30px 30px 30px',
    boxShadow: isOpen ? '-5px 0 15px rgba(0,0,0,0.2)' : 'none',
    pointerEvents: isOpen ? 'auto' : 'none',
    overflowX: 'hidden',
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: isOpen ? 'block' : 'none',
    zIndex: 999,
  };

  return (
    <>
      <button style={hamburgerStyle} onClick={toggleMenu} aria-label="Menu" aria-expanded={isOpen}>
        <div style={iconBox}>
          <span style={topBarStyle} />
          <span style={middleBarStyle} />
          <span style={bottomBarStyle} />
        </div>
      </button>

      <div style={overlayStyle} onClick={toggleMenu}></div>

      <div style={menuStyle}>
        <a href="#/home" style={{ color: '#092F37', textDecoration: 'none', fontSize: '24px', fontFamily: 'Jockey One, sans-serif', padding: '20px 0', borderBottom: '1px solid rgba(9, 47, 55, 0.2)', cursor: 'pointer' }} onClick={toggleMenu}>Home</a>
        <a href="#/wip" style={{ color: '#092F37', textDecoration: 'none', fontSize: '24px', fontFamily: 'Jockey One, sans-serif', padding: '20px 0', borderBottom: '1px solid rgba(9, 47, 55, 0.2)', cursor: 'pointer' }} onClick={toggleMenu}>Works in Progress</a>
        <a href="#/contact" style={{ color: '#092F37', textDecoration: 'none', fontSize: '24px', fontFamily: 'Jockey One, sans-serif', padding: '20px 0', borderBottom: '1px solid rgba(9, 47, 55, 0.2)', cursor: 'pointer' }} onClick={toggleMenu}>Contact</a>
        <a href="https://www.instagram.com/specimensandwitch/" target="_blank" rel="noopener noreferrer" style={{ color: '#092F37', textDecoration: 'none', fontSize: '24px', fontFamily: 'Jockey One, sans-serif', padding: '20px 0', borderBottom: '1px solid rgba(9, 47, 55, 0.2)', cursor: 'pointer' }} onClick={toggleMenu}>
          @specimensandwitch on Instagram
        </a>
      </div>
    </>
  );
};

export default HamburgerMenu;