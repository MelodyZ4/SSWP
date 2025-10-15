import React from 'react';
import logo from './assets/sswp_logo.svg';
import insta from './assets/insta_logo.svg';

function Header() {
  return (
    <header
      style={{
        backgroundColor: '#2F2E2E',
        paddingTop: '7vh',
        paddingBottom: '3vh',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '60vw' }}>
        
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '9vh',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '5vw', }}>
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
                src={logo}
                alt="SSWP Logo"
                style={{
                  width: '12vw',
                  objectFit: 'contain',
                  marginRight: '2.5vw',
                }}
              />
            </button>
            <div
              style={{
                color: '#7B00CC',
                fontSize: '3.5vw',
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
              marginTop: '2vh',
              marginRight: '4vw',
              width: '3.5vw',
              height: '3.5vw',
              minWidth: '27px',
              minHeight: '27px',
            }}
          >
            <img
              src={insta}
              alt="Instagram"
              style={{
                height: '2.4vw',
                width: '2.6vw',
                minWidth: '19.3px',
                minHeight: '19.3px',
              }}
            />
          </a>
        </div>

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
      </div>
    </header>
  );
}

export default Header;
