function Footer() {
  const year = new Date().getFullYear() 
  return (
  <footer
    style={{
      marginTop: 'auto',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      background: '#FFD966'
    }}
  > 
    <div
      style={{
        color: '#4D0080'
      }}
    >
      <p>© {year} Specimen SandWitch Press</p>
    </div>
  </footer>
  )
}

export default Footer;