import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Backdrop from './backdrop'

const wrapperStyles = {
  width: '100%',
  position: 'absolute',
  left: 0,
  top: 0
}

const modalStyles = {
  maxWidth: '500px',
  width: '100%',
  border: '1px solid #ddd',
  backgroundColor: 'white',
  margin: '100px auto 0',
  zIndex: 1,
  position: 'relative',
  padding: '10px'
}

const closeBtnStyles = {
  position: 'absolute',
  right: '20px',
  top: '20px',
  background: 'none',
  border: 'none',
  fontWeight: 'bold',
  fontSize: '20px',
  cursor: 'pointer'
}

const Modal = ({ children, show, onClickCloseBtn }) => {
  return (
    <Fragment>
      {show && (
        <div style={wrapperStyles}>
          <Backdrop onClick={onClickCloseBtn} />
          <div style={modalStyles}>
            <button onClick={onClickCloseBtn} style={closeBtnStyles}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  )
}

Modal.propTypes = {
  children: PropTypes.element,
  show: PropTypes.bool,
  onClickCloseBtn: PropTypes.func
}

export default Modal
