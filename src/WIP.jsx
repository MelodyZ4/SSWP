import React, { useState, useEffect } from 'react';
import cauldron from './assets/cauldron_poem.webp';

function WIP() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() { setIsMobile(window.innerWidth <= 1248); }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
      <img src={cauldron} alt="A drawing of a cauldron with the poem: Slip of the narrows rabbit. treads from footprints. ferns & stale bread to sleep where Darkness makes its bed." loading="eager" fetchPriority="high" style={{ maxWidth: '100%', height: 'auto', margin: '0 auto' }} />
  );
}

export default WIP;
