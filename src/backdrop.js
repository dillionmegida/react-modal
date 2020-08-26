import React from 'react'
import PropTypes from 'prop-types'

const backdropStyles = {
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.472)'
}

const Backdrop = ({ onClick }) => {
  return <div onClick={onClick} style={backdropStyles} />
}

Backdrop.propTypes = {
  onClick: PropTypes.func
}

export default Backdrop
