import React from 'react'

const Footer = ({ phone = '0987654321' }) => {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '40px',
    }}>
      Creado por Bryan Pérez
      <br />
      Teléfono de contacto: {phone}
    </div>
  )
}

export default Footer