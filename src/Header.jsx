import React, { useState, useEffect } from 'react';
import insta from './assets/insta_logo.svg';
import HamburgerMenu from './HamburgerMenu';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() { setIsMobile(window.innerWidth <= 1248); }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      style={{
        position: 'relative',
        backgroundColor: isMobile ?  '#3D3C3C' : '#343232',
        paddingTop: '7vh',
        paddingBottom: isMobile ? 0 : '3vh',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: isMobile ? '95vw' : '60vw' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '9vh',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: isMobile ? '3vw' : '5vw' }}>
            <button
              onClick={() => window.location.href = '#/home'}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Go to Home"
            >
              <img
                src="/sswp_logo.svg"
                alt="SSWP Logo"
                style={{
                  width: isMobile ? '25vw' : '12vw',
                  objectFit: 'contain',
                  marginRight: isMobile ? '4vw': '2.5vw',
                }}
              />
            </button>
            <div
              style={{
                color: '#7B00CC',
                fontSize: isMobile ? '8vw' : '3.5vw',
                maxWidth: '400px',
                minWidth: '180px',
                fontFamily: "'Museo Slab'",
              }}
            >
              <p style={{ margin: 0, lineHeight: 1.3, fontFamily: "'Roboto Slab', serif", fontWeight: 400, }}>
                Specimen<br />SandWitch<br />Press
              </p>
            </div>
          </div>

          {isMobile ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-2vh',
              }}
            >
              <HamburgerMenu />
            </div>
          ) : (
            <a
              href="https://www.instagram.com/specimensandwitch/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                borderRadius: '50%',
                marginTop: '1.5vh',
                marginRight: '4vw',
                width: '3.5vw',
                height: '3.5vw',
                minWidth: '35px',
                minHeight: '35px',
              }}
            >
              <img
                src={insta}
                alt="Instagram"
                style={{ height: '2.4vw', width: '2.6vw', minWidth: '24px', minHeight: '24px' }}
              />
            </a>
          )}
        </div>

        {!isMobile && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2vw',
              marginBottom: '2vh',
            }}
          >
            <button
              style={{
                backgroundColor: '#7B00CC',
                color: '#FFD966',
                border: 'none',
                height: '6.5vh',
                width: '16vw',
                fontSize: 'max(2.1vh, 1.2vw)',
                cursor: 'pointer',
                fontFamily: "'EB Garamond', serif",
              }}
              onClick={() => window.location.href = '#/home'}
            >
              Home
            </button>
            <button
              style={{
                backgroundColor: '#FFD966',
                color: '#7B00CC',
                border: 'none',
                height: '6.5vh',
                width: '16vw',
                fontSize: 'max(2.1vh, 1.2vw)',
                cursor: 'pointer',
                fontFamily: "'EB Garamond', serif",
              }}
              onClick={() => window.location.href = '#/wip'}
            >
              Works In Progress
            </button>
            <button
              style={{
                backgroundColor: '#FFD966',
                color: '#7B00CC',
                border: 'none',
                height: '6.5vh',
                width: '16vw',
                fontSize: 'max(2.1vh, 1.2vw)',
                cursor: 'pointer',
                fontFamily: "'EB Garamond', serif",
              }}
              onClick={() => window.location.href = '#/contact'}
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
