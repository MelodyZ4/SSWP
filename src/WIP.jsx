import React, { useState, useEffect } from 'react';

function WIP() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() { setIsMobile(window.innerWidth <= 1248); }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
     <div
      style={{
        minHeight: isMobile ? '150vh' :'100vh',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '5vh',
        flex: 1,
      }}
    >
      <h1 style={{ fontFamily: 'Jockey One, sans-serif' }}>This page is still under construction. Check back soon!</h1>
    </div>
  );
}

export default WIP;
