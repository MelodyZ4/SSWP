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
      background: 'linear-gradient(to bottom, rgba(255, 217, 102, 0.75), rgba(255, 217, 102, 0.3))'
    }}
  > 
    <div>
        <p>© {year} Specimen SandWitch Press</p>
    </div>
  </footer>
  )
}

export default Footer;