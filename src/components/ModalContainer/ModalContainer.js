import React from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types'

import Password from "../Password/Password"

import "./ModalContainer.scss"

/**
 * Modal Portal
 * @param {boolean} isOpened - Value to open/close the modal
 * @param {any} onClose - Function to close the modal
 */

const modalContainer = document.querySelector("#modalContainer");

const ModalContainer = ( props ) => {
  return (
      props.isOpened
      ? ReactDOM.createPortal(
        <div className="modalContainer">
          <div className="modal-content">
            <Password onClose={props.onClose} />
          </div>
        </div>
        ,
        modalContainer
      )
      : null
  )
}

ModalContainer.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ModalContainer

